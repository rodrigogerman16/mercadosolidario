import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

export const useUser = () => {
  return useLocalstorageUser();
};

export const useLocalstorageUser = () => {
  const [user, setUser] = useState();
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
    if(session){
      const usuario = await axios.post('https://pf-backend-mercadosolidario-production.up.railway.app/login', {        
        email: session.user.email,
        loginGoogle: true
      });

      const decoded = jwt_decode(usuario.data.token);
      window.localStorage.setItem("user", JSON.stringify(decoded));
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
