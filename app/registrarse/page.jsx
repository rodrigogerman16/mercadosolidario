'use client'
import Navbar from "app/Components/Navbar";
import Link from "next/link";
import { useState } from "react";

function Validate(input) {
    let errors = {};
    if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
      errors.name = "No puede contener numeros o caracteres especiales";
    } else if (input.name.length < 3 || input.name.length > 40) {
      errors.name = "Al menos 3 Caracteres";
    }
  
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
    }  else if (input.password.length < 6){
      errors.password = "Contraseña debe tener al menos 6 Caracteres"
    }
    return errors;
  }

  export default function CreateUser() {

    const [input, setInput] = useState({
        name: "",
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
          if (Object.values(errors).length === 0 && input.name !== '' && input.email !== '' && input.password !== '') {
    
            // window.localStorage.setItem(
            //   'name', JSON.stringify(input.name)
            // )
    
            // window.localStorage.setItem(
            //   'email', JSON.stringify(input.email)
            // )

            alert("Usuario Creado!");

            setInput({
              name: "",
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
        <div>
          <div>
            <h1>Registrarse</h1>
            <form onSubmit={(el) => handleSubmit(el)}>
              <div>
                <input
                  type="text"
                  value={input.name}
                  name={"name"}
                  onChange={(el) => handleChange(el)}
                  placeholder='Nombre'
                />
                <br />
                {errors.name ? <label>{errors.name}</label> : null}
              </div>
              <div>
                <input
                  type="text"
                  value={input.email}
                  name="email"
                  onChange={(el) => handleChange(el)}
                  placeholder='Email'
                />
                <br />
                {errors.email ? <label>{errors.email}</label> : null}
              </div>
              <div>
                <input
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={(el) => handleChange(el)}
                  placeholder='Contraseña'
                />
                <br />
                {errors.password ? <label>{errors.password}</label> : null}
              </div>
              <input
                type="submit"
                value={"Registrarse"}
              />
            <div>
              <Link href={'/ingresar'}>
                <label>Ya esta registrado? Click Aca!</label>
              </Link>
            </div>
            </form>
    
          </div>
        </div>
      );
  }