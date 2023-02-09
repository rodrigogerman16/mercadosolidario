"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import Router from "next/router";
import { useBackendUser, useUser } from "../../hooks/user.js";
import jwt_decode from "jwt-decode";
import Alert from "@/Components/Alert.jsx";

function Validate(input) {
  let errors = {};
  if (input.password.length < 6) {
    errors.password = "Minimo 6 Caracteres";
  }
  return errors;
}

export default function Login() {
  const router = useRouter();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(el) {
    setInput({
      ...input,
      [el.target.name]: el.target.value,
    });
    setErrors(
      Validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );
  }

  // Ingreso local
  async function handleSubmit(el) {
    try {
      el.preventDefault();
      setErrors(
        Validate({
          ...input,
          [el.target.name]: el.target.value,
        })
      );
      if (
        Object.values(errors).length === 0 &&
        input.email !== "" &&
        input.password !== ""
      ) {
        const user = {
          email: input.email,
          password: input.password,
        };

        let info = await axios.post(`https://pf-backend-mercadosolidario-production.up.railway.app/login`, user);
        const decoded = jwt_decode(info.data.token);

        window.localStorage.setItem("user", JSON.stringify(decoded));
        Alert({
          title: "Cuenta",
          text: "Iniciaste sesión satisfactoriamente!",
          icon: "success",
        });
        setInput({
          email: "",
          password: "",
        });

        // es admin (contacto.mercadosolidario@gmail.com   henryms123)
        if (decoded.type_of_user === "admin") {
          window.location.href = "/dashboard";
          return;
        }
        router.push("/");
        window.location.reload();
      } else {
        Alert({
          title: "Cuenta",
          text: "Hay datos incorrectos o sin completar",
          icon: "error",
        });
      }
    } catch (error) {
      const err = error.response.data.message? error.response.data : JSON.parse(error.response.data);
      setInput({
        email: "",
        password: "",
      });
      Alert({
        title: "Cuenta",
        text: err.message,
        icon: "error",
      });
    }
  }

  const user = useUser();
  const { data: session } = useSession();

  async function handleSignIn() {
    signIn("google");
  }

  const { backendUser, isLoading } = useBackendUser();

  useEffect(() => {
    // no esta logeado
    if (!user) {
      // esta registrandose
      if (session) {
        // estamos todavia pidiendo informacion del usuario existente
        if (isLoading) {
          return;
        }
        // pregunto si tiene usuario para guardar la data de login
        if (backendUser) {
          localStorage.setItem("user", JSON.stringify(backendUser));
          return;
        }
        // si no tenemos informacion del usuario lo madamos a register
        Router.push("/registrarse");
        return;
      }
      return;
    }

    if (user) {
      //arreglar
      if (user.isActive === "false") {
        window.localStorage.removeItem("user");
        window.localStorage.setItem("loginError", true);
        signOut();
        window.location.href = "../";
      }
      Router.push("/");
    }
  }, [user]);

  return (
    <div className="w-full max-w-md p-4 rounded-md sm:p-8 m-auto min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">
      <span className="block mb-2 text-xs font-semibold tracking-widest text-center uppercase dark:text-pink-400">
        Login
      </span>
      <h2 className="text-5xl font-bold text-center">Ingresa a tu cuenta</h2>
      <div className="text-center mb-10">
        <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
        <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
      </div>
      <p className="text-sm text-center dark:text-gray-400">
        No tienes cuenta?&nbsp;
        <Link
          href="/registrarse"
          rel="noopener noreferrer"
          className="focus:underline hover:underline"
        >
          Registrate aquí
        </Link>
      </p>
      <form
        onSubmit={(el) => handleSubmit(el)}
        noValidate=""
        action=""
        className="space-y-8 ng-untouched ng-pristine ng-valid my-8 w-full"
      >
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            <label for="email" className="block text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ejemplo@mail.com"
              onChange={(el) => handleChange(el)}
              className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" name={"password"} className="text-sm">
                Contraseña
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              onChange={(el) => handleChange(el)}
              className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold bg-black text-white hover:bg-zinc-800 transition-colors rounded"
        >
          Ingresar
        </button>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs hover:underline text-gray-400 text-center w-full m-auto block"
        >
          Olvidaste tu contraseña?
        </a>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
      </form>
      <div className="my-6 space-y-4 w-full">
        <button
          onClick={handleSignIn}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center p-4 space-x-4 border shadow focus:ring-0 w-full rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-pink-400"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Ingresar con Google</p>
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession(req);
  if (session) {    
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
    }
  }

  return {
    props: { session },
  };
}
