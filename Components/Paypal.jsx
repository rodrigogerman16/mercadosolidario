import styles from "../styles/Home.module.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import Alert from "./Alert";
import { useUser } from "../hooks/user";
import { useEffect } from "react";
import emailPostPaypal from "./emailPostPaypal";
export default function App({ postId }) {
  const userStringify = useUser();
  const user = userStringify && JSON.parse(userStringify);
  console.log(user);
  return (
    <div className={"grid"}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AcZj9ADAMllpJPzEtf4-zAfitTKX4kZe-VIgrZWmj3EulE_AIiklSJL1aXSn2hdl4OXa4GV-93Z_Chzt",
        }}
      >
        <PayPalButtons
          disabled={!user ? true : false}
          fundingSource="paypal"
          createOrder={async () => {
            try {
              const res = await axios({
                url: "https://mercadosolidario.vercel.app/api/payment",
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              return res.data.id;
            } catch (error) {
              console.log(error);
            }
          }}
          onCancel={() =>
            Alert({
              title: "Donación",
              text: "La transacción fue cancelada",
              icon: "error",
            })
          }
          onApprove={(data, actions) => {
            actions.order.capture();
            Alert({
              title: "Donación",
              text: "La transacción fue realizada con éxito",
              icon: "success",
            });
            fetch(
              "https://pf-backend-mercadosolidario-production.up.railway.app/confirmed/newconfirmed",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userIDs: user.id,
                  postIDs: postId,
                  type_of_help: "efectivo",
                  amount: "1",
                }),
              }
            );
            emailPostPaypal(user.email);
          }}
          style={{ layout: "vertical", color: "black" }}
        />
      </PayPalScriptProvider>
      {!user && (
        <span className="text-center text-red-600 w-full m-auto">
          Debes iniciar sesión para poder donar
        </span>
      )}
    </div>
  );
}
