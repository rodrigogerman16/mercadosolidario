import axios from "axios";

const emailPostPaypal = async (email) => {
  try {
    const ruta = axios.post(
      "https://pf-backend-mercadosolidario-production.up.railway.app/mailer/confirmed",
      { email }
    );
    return ruta;
  } catch (error) {
    console.log(error.message);
  }
};

export default emailPostPaypal;
