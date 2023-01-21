import axios from "axios";

const emailPost = async (email) => {
  try {
    console.log(email);
    const emailapi = await axios.post("http://localhost:3001/mailer/email",{email})
    return emailapi
  } catch (error) {
    console.log(error.message);
  }
}

export default emailPost