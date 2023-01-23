import axios from "axios";

const emailPost = async (email) => {
  try {
    console.log(email);
    const emailapi = await axios.post("https://pf-backend-mercadosolidario-production.up.railway.app/mailer/email",{email})
    return emailapi
  } catch (error) {
    console.log(error.message);
  }
}

export default emailPost