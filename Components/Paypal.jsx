import styles from "../styles/Home.module.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import Alert from "./Alert";

export default function App() {
  return (
    <div className={styles.container}>
      <PayPalScriptProvider
        options={{
          "client-id": "AcZj9ADAMllpJPzEtf4-zAfitTKX4kZe-VIgrZWmj3EulE_AIiklSJL1aXSn2hdl4OXa4GV-93Z_Chzt",
        }}
      >
        <PayPalButtons
          fundingSource="paypal"
          createOrder={async () => {
            try {
              const res = await axios({
                url: "http://localhost:3000/api/payment",
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
          onCancel={() => Alert({ title: 'Donación', text: 'La transacción fue cancelada', icon: 'error' })}
          onApprove={(data, actions) => {
            console.log(data);
            actions.order.capture();
            Alert({ title: 'Donación', text: 'La transacción fue realizada con éxito', icon: 'success' })
          }}
          style={{ "layout": "vertical", "color": "black" }}
        />
      </PayPalScriptProvider>
    </div>
  );
}