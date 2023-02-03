import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import Alert from "./Alert";

const ButtonWrapper = ({ currency }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency]);


  return (<PayPalButtons
    fundingSource="paypal"
    onCancel={() => Alert({ title: 'Donación', text: 'La transacción fue cancelada', icon: 'error' })}
    onApprove={() => Alert({ title: 'Donación', text: 'La transacción fue realizada con éxito', icon: 'success' })}
    style={{ "layout": "vertical", "color": "silver", "label": "donate" }}
    disabled={false}
    createOrder={(data, actions) => {
      return actions.order
        .create({
          purchase_units: [
            {
              amount: {
                value: "1",
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: "1",
                  },
                },
              },
              items: [
                {
                  name: "donation-example",
                  quantity: "1",
                  unit_amount: {
                    currency_code: "USD",
                    value: "1",
                  },
                  category: "DONATION",
                },
              ],
            },
          ],
        })
        .then((orderId) => {
          // Your code here after create the donation
          return orderId;
        });
    }}
  />
  );
}

export default function App() {
  return (
    <div
      style={{ maxWidth: "750px", minHeight: "200px" }}
    >
      <PayPalScriptProvider
        options={{
          "client-id": "AcZj9ADAMllpJPzEtf4-zAfitTKX4kZe-VIgrZWmj3EulE_AIiklSJL1aXSn2hdl4OXa4GV-93Z_Chzt",
          components: "buttons",
          currency: "USD"
        }}
      >
        <ButtonWrapper
          currency={"USD"}
        />
      </PayPalScriptProvider>
    </div>
  );
}