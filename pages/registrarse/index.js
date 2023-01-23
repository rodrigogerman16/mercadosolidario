'use client'
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
  } else if (input.password.length < 6) {
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
          lastname: "",
          cuil: "",
          linkedin: "",
          cumple: "",
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
    <div className="m-0 p-0">
      <div class="flex flex-col justify-center items-start m-auto min-h-full mt-12 bg-white w-3/5">
        <div className="text-2xl font-montserrat justify-items-start w-full">
          <h1 class="text-start">Registrarse</h1>
        </div>
        <form class="pt-7" onSubmit={(el) => handleSubmit(el)}>
          <div class="flex">
            <div class="flex flex-col font-medium">
              <div class="flex flex-col">
                <label class="font-hind text-lg">Nombre</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.name}
                  name={"name"}
                  onChange={(el) => handleChange(el)}
                  placeholder=''
                />
                {errors.name ? <label>{errors.name}</label> : null}
              </div>
              <div class="flex flex-col">
                <label class="pt-3 font-hind text-lg">Apellido</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.lastname}
                  name={"lastname"}
                  onChange={(el) => handleChange(el)}
                  placeholder=''
                />
              </div>
              <div class="flex flex-col">
                <label class="pt-3 font-hind text-lg">Cuil</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.cuil}
                  name={"cuil"}
                  onChange={(el) => handleChange(el)}
                  placeholder=''
                />
              </div>
              <div class="flex flex-col">
                <label class="pt-3 font-hind text-lg">Linkedin</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.linkedin}
                  name={"linkedin"}
                  onChange={(el) => handleChange(el)}
                  placeholder=''
                />
              </div>
            </div>
            <div class="flex flex-col font-medium">
              <div class="flex flex-col">
                <label class="font-hind text-lg">Fecha de nacimiento</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.cumple}
                  name={"cumple"}
                  onChange={(el) => handleChange(el)}
                  placeholder=''
                />
              </div>
              <div class="flex flex-col">
                <label class="pt-3 font-hind text-lg">Profesion</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.profesion}
                  name={"profesion"}
                  onChange={(el) => handleChange(el)}
                  placeholder=''
                />
              </div>
              <div class="flex flex-col">
                <label class="pt-3 font-hind text-lg">Email</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.email}
                  name="email"
                  onChange={(el) => handleChange(el)}
                  placeholder=''
                />
                {errors.email ? <label>{errors.email}</label> : null}
              </div>
              <div class="flex flex-col">
                <label class="pt-3 font-hind text-lg">Contraseña</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={(el) => handleChange(el)}
                  placeholder=''
                />
                {errors.password ? <label>{errors.password}</label> : null}
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start">
            <input
              class="mt-8 w-52 h-10 bg-blue-600 rounded-md text-white font-hind"
              type="submit"
              value={"Crear cuenta"}
            />
            <div class="flex text-black font-hind font-bold py-6">
              <h3>Ya esta registrado?</h3>
              <Link href={'/ingresar'}><label class="ml-1 font-hind text-blue-600">Click aca!</label></Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}