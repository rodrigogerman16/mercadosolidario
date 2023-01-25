'use client'
import Link from "next/link";
import { useState } from "react";
import emailPost from "@/Components/emailPost";
function Validate(input) {
  let errors = {};

  if (!input.email.includes("@")) {
    errors.email = "Debe ser un Email";
  }
  if (!input.email.includes(".")) {
    errors.email = "Debe ser un Email";
  }
  if (input.email.length < 6 || input.email.length > 30) {
    errors.email = "Al menos 6 Caracteres";
  }

  if (
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(
      input.password
    )
  ) {
    errors.password = "Contraseña invalida";
  } else if (input.password.length < 6) {
    errors.password = "Contraseña debe tener al menos 6 Caracteres"
  }
  return errors;
}

export default function CreateUser() {

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

  console.log(input)

  function handleSubmit(el) {
    try {
      el.preventDefault();
      setErrors(
        Validate({
          ...input,
          [el.target.name]: el.target.value,
        })
      );
      if (Object.values(errors).length === 0 && input.email !== '' && input.password !== '') {

        // window.localStorage.setItem(
        //   'name', JSON.stringify(input.name)
        // )

        // window.localStorage.setItem(
        //   'email', JSON.stringify(input.email)
        // )
        emailPost(input.email)
        alert("Usuario Creado!");

        setInput({
          email: "",
          password: "",
        });
      } else {
        alert("Hay datos incorrectos o sin completar!");
      }
    } catch (error) {
      //console.log(error)
    }
  }

  return (
    <div className="w-full max-w-md p-4 rounded-md sm:p-8 m-auto min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">

      {/* Steps */}
      <div className="my-8">
        <h2 class="sr-only">Steps</h2>

        <div
          class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
        >
          <ol
            class="relative z-10 flex justify-between text-sm font-medium text-gray-500"
          >
            <li class="flex items-center bg-white p-2">
              <span
                class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6"
              >
                1
              </span>

              <span class="hidden sm:ml-2 sm:block"> Details </span>
            </li>

            <li class="flex items-center bg-white p-2">
              <span
                class="h-6 w-6 rounded-full bg-pink-400 text-center text-[10px] font-bold leading-6 text-white"
              >
                2
              </span>

              <span class="hidden sm:ml-2 sm:block"> Address </span>
            </li>

            <li class="flex items-center bg-white p-2">
              <span
                class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6"
              >
                3
              </span>

              <span class="hidden sm:ml-2 sm:block"> Payment </span>
            </li>
          </ol>
        </div>
      </div>


      {/* Form */}
      <h2 className="mb-3 text-3xl font-semibold text-center">Registra tu cuenta</h2>
      <p className="text-sm text-center dark:text-gray-400">Ya estas registrado?&nbsp;
        <Link href="/ingresar" rel="noopener noreferrer" className="focus:underline hover:underline">Inicia sesión</Link>
      </p>
      <form novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid my-8 w-full">
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            <label for="email" className="block text-sm">Email address</label>
            <input type="email" name="email" id="email" placeholder="ejemplo@mail.com" value={input.email} onChange={(el) => handleChange(el)} className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200" />
            {errors.email && <label className="w-full text-red-600">{errors.email}</label>}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label for="password" value={input.password} name={"password"} onChange={(el) => handleChange(el)} className="text-sm">Password</label>
            </div>
            <input type="password" name="password" id="password" placeholder="********" className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200" />
            {errors.password && <label className="w-full text-red-600">{errors.password}</label>}
          </div>
        </div>
        <button type="button" className="w-full px-8 py-3 font-semibold  bg-black text-white hover:bg-zinc-800 transition-colors rounded">Registrarme</button>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
      </form>
      <div className="my-6 space-y-4 w-full">
        <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border shadow focus:ring-0 w-full rounded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-pink-400">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Registrarse con Google</p>
        </button>
      </div>
    </div>
  );
}