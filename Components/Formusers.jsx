"use client";
import { useState } from "react";

function Validate(input) {
  let errors = {};
  if (input.name.length < 3 || input.name.length > 15) {
    errors.name = "Al menos 3 Caracteres";
  }
  if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
    errors.name = "No puede contener numeros o caracteres especiales";
  }
  if (input.lastName.length < 3 || input.lastName.length > 15) {
    errors.lastName = "Al menos 3 Caracteres";
  }
  if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.lastName)) {
    errors.lastName = "No puede contener numeros o caracteres especiales";
  }
  if (input.phone.length < 8) {
    errors.phone = "Ingrese su Telefono";
  }
  if (input.cuil.length !== 13) {
    errors.cuil = "Ingrese su CUIL";
  }
  if (input.user_linkedin.length === 0) {
    errors.user_linkedin = "Ingrese su Linkedin"
  }
  return errors;
}

export default function Formusers() {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    phone: "",
    cuil: "",
    user_linkedin: "",
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

  function handleSubmit(el) {
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
        input.name !== "" &&
        input.lastName !== "" &&
        input.phone !== "" &&
        input.cuil !== "" &&
        input.user_linkedin !== ""
      ) {
        alert("Usuario creado!");
        setInput({
          name: "",
          lastName: "",
          phone: "",
          cuil: "",
          user_linkedin: "",
        });
      } else {
        alert("Hay datos incorrectos o sin completar!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  //console.log(input);

  return (
    <form className="grid justify-center items-center gap-4" onSubmit={(el) => handleSubmit(el, input)}>
      <div className="">
        <label className="text-sm">Nombre</label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.name}
          name={"name"}
          onChange={(el) => handleChange(el)}
          placeholder="Nombre"
        />
        {errors.name ? <label>{errors.name}</label> : null}
      </div>
      <div className="">
        <label className="text-sm">Apellido</label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.lastName}
          name="lastName"
          onChange={(el) => handleChange(el)}
          placeholder="Apellido"
        />
        {errors.lastName ? <label>{errors.lastName}</label> : null}
      </div>
      <div>
        <div className="">
          <label className="text-sm">Telefono</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="text"
            value={input.phone}
            name="phone"
            onChange={(el) => handleChange(el)}
            placeholder="+54 011 1234567"
          />
          {errors.phone ? <label>{errors.phone}</label> : null}
        </div>
      </div>
      <div className="">
        <label className="text-sm">{"Cuil (Opcional)"}</label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.cuil}
          name="cuil"
          onChange={(el) => handleChange(el)}
          placeholder="01-23456789-01"
        />
        {errors.cuil ? <label>{errors.cuil}</label> : null}
      </div>
      <div>
        <div className="">
          <label className="text-sm">{"Linkedin (Opcional)"}</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="text"
            value={input.user_linkedin}
            name="user_linkedin"
            onChange={(el) => handleChange(el)}
            placeholder="https://www.linkedin.com/in/ejemplo"
          />
          {errors.user_linkedin ? (
            <label>{errors.user_linkedin}</label>
          ) : null}
        </div>
      </div>
      <input
        type="submit"
        value={"Registrarse"}
        className="w-full px-8 py-3 font-semibold  bg-black text-white hover:bg-zinc-800 transition-colors rounded my-4 cursor-pointer"
      />
    </form>
  );
}