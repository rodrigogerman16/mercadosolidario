'use client'
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

function Validate(input) {
  let errors = {};

  if (!input.email.includes("@") && !input.email.includes(".")) {
    errors.email = "Email debe ser un Email";
  } else if (input.email.length < 6) {
    errors.email =
      "Al menos 6 caracteres";
  }

  if (
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(
      input.password
    )
  ) {
    errors.password = "Contraseña Invalida";
  } else if (input.password.length < 6) {
    errors.password = "Al menos 6 caracteres";
  }
  return errors;
}

export default function Login() {
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

  const handleSubmit = (el) => {
    el.preventDefault();
    setErrors(
      Validate({
        ...input,
        [el.target.name]: el.target.value,
      })
    );
    if (Object.values(errors).length === 0) {
      setInput({
        email: "",
        password: "",
      });
    }
  };

  console.log(input)

  return (
    <div>
      <Navbar/>
      <div class="flex flex-col justify-center items-center m-auto min-h-screen w-2/5  bg-white">
        <div class="flex flex-col justify-start items-start bg-white pr-4 pl-3 text-black font-serif">
          <h1 class="text-3xl font-montserrat">Ingresar</h1>
          <h3 class="pt-4 font-hind text-gray-400">Nuevo en Mercado Solidario?{<Link href={'/registrarse'}><label class="flex flex-column pt-1 font-hind text-blue-600 ">Registrese Gratis!</label></Link>}</h3>
          <form onSubmit={(el) => handleSubmit(el)}>
            <div class="flex pt-5">
              <input
                class="w-56"
                type="text"
                value={input.email}
                name={"email"}
                onChange={(el) => handleChange(el)}
                placeholder='Email'
              />
              {errors.email ? <label>{errors.email}</label> : null}
            </div>
            <div class="pt-5">
              <input
                class="w-56"
                type="password"
                value={input.password}
                name={"password"}
                onChange={(el) => handleChange(el)}
                placeholder='Contraseña'
              />
              {errors.password ? <label>{errors.password}</label> : null}
            </div>
            <div class="pt-5 text-sm text-blue-600 font-hind">
              <Link href={'/contraseña'}>
                <label>Olvido su contraseña?</label>
              </Link>
            </div>
            <input class="mt-4 w-64 h-9 bg-blue-600 rounded-md text-white font-hind" type="submit" value={"Ingresar"} />
          </form>
          <button class="mt-3 w-64 h-9 rounded-md text-black font-hind font-bold">Ingresar con Google</button>
          <div class="pt-10">
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
