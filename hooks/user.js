import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";


const { VERCEL_URL = "http://localhost:3000/api/railway-backend" } =
  process.env;

export const useUser = () => {
  return useLocalstorageUser();
};

export const useLocalstorageUser = () => {
  const [user, setUser] = useState();
  console.log(user)
  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");
    setUser(localStorageUser);
  }, [user]);
  return user;
};

export const useBackendUser = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(true);

  const main = async () => {

    //Vincular session.user.email (session) con user.email (local)
    //Actualizar estado User
    if(session){
      //Recopilamos todos los usuarios
      const info = await axios.get(`https://pf-backend-mercadosolidario-production.up.railway.app/allusers`);
      //Filtramos al usuario via email
      const userFinded = info.data.data.filter(user => user.email === session.user.email);

      //Si existe session pero no el usuario local, redirige a registrarse para cumplir con los pasos 2 y 3 del /registrarse
      if(!userFinded) return router.push("/registrarse")

      //
      const info2 = await axios.post('https://pf-backend-mercadosolidario-production.up.railway.app/login', {
        email: userFinded[0].email,
        password: "asdasdasd",
        type_of_user: userFinded[0].type_of_user
      });

      const decoded = jwt_decode(info2.data.token);
      window.localStorage.setItem("user", JSON.stringify(decoded));
      console.log(decoded)
      setUser(decoded)
    }

    if (typeof window === "undefined") {
      return;
    }

    if (user) {
      router.push("/");   
      window.location.reload()  
      return
    }

    if (!session) {
      return;
    }
    setLoading(false);
  };
  main();
  return { user, isLoading };
};
