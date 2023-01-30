import axios from "axios";

const {VERCEL_URL = 'http://localhost:3000/api/railway-backend'} = process.env

const emailPost = async (email) => {
  try {
    console.log(email);
    const emailapi = await axios.post(`${VERCEL_URL}/mailer/email`, { email });
    return emailapi;
  } catch (error) {
    console.log(error.message);
  }
};

export default emailPost;
