import paypal from "@paypal/checkout-server-sdk";
// Creating an environment
let clientId = "AcZj9ADAMllpJPzEtf4-zAfitTKX4kZe-VIgrZWmj3EulE_AIiklSJL1aXSn2hdl4OXa4GV-93Z_Chzt";
let clientSecret = "EOmrajNGo-upqb1exxlr10EAJh7QiUEeJe8tVUC84tjzCtzqLUXU7Wo5fqy2PGXpm-QcHg13xx6bS2fX";

// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "1.00",
          },
        },
      ],
    });
    const response = await client.execute(request);

    return res.json({ id: response.result.id });
  }
}