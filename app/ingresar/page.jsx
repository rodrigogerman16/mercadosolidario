'use client'
import { useState } from "react";
import Link from "next/link";
import Navbar from "app/Components/Navbar";

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
      <br></br>
      <br></br>
      <div>
        <h1>Ingresar</h1>
        <h3>Nuevo en Mercado Solidario?{<Link href={'/registrarse'}><label>Registrese Gratis!</label></Link>}</h3>
        <br></br>
        <form onSubmit={(el) => handleSubmit(el)}>
          <div>
            <input
              type="text"
              value={input.email}
              name={"email"}
              onChange={(el) => handleChange(el)}
              placeholder='Email'
            />
            <br />
            {errors.email ? <label>{errors.email}</label> : null}
          </div>
          <br></br>
          <div>
            <input
              type="password"
              value={input.password}
              name={"password"}
              onChange={(el) => handleChange(el)}
              placeholder='Contraseña'
            />
            <br />
            {errors.password ? <label>{errors.password}</label> : null}
          </div>
          <br></br>
          <div>
            <Link href={'/contraseña'}>
              <label>Olvido su contraseña?</label>
            </Link>
          </div>
          <br></br>
          <input type="submit" value={"Ingresar"} />
        </form>
        <br></br>
        <button>Ingresar con Google</button>
      </div>
    </div>
  );
}
