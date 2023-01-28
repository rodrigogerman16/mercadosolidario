"use client";
import { useState } from "react";
import axios from "axios";

function Validate(input) {
  let errors = {};
  if (input.name.length < 3 || input.name.length > 15) {
    errors.name = "Al menos 3 Caracteres";
  }
  if (input.lastName.length < 3 || input.lastName.length > 15) {
    errors.lastName = "Al menos 3 Caracteres";
  }
  if (input.cuit.length !== 13) {
    errors.cuit = "Ingrese su CUIT";
  }
  return errors;
}

export default function Formempresas() {

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    cuit: "",
  });

  const [errors, setErrors] = useState({});

  const [image, setImage] = useState(null);

  const handleImage = (el) => {
    setImage(el.target.files[0]);
  };

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

  function handleSubmit(el, image) {
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
        input.cuit !== "" &&
        image
      ) {
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("lastName", input.lastName);
        formData.append("cuit", input.cuit);
        formData.append("rut", image);
        alert("Empresa Registrada con Exito!");
        setInput({
          name: "",
          lastName: "",
          cuit: "",
        });
        setImage(null);
      } else {
        alert("Hay datos incorrectos o sin completar!");
      }
    } catch (error) {
      //console.log(error)
    }
  }

  //console.log(input)
  //console.log(image)

  return (
    <form className="grid gap-4 justify-center items-center" onSubmit={(el) => handleSubmit(el, image, input)}>
      <div className="">
        <label className="text-sm">Nombre</label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.name}
          name={"name"}
          onChange={(el) => handleChange(el)}
          placeholder=""
        />
        {errors.name ? <label className="text-sm text-red-600">{errors.name}</label> : null}
      </div>
      <div className="">
        <label className="text-sm">
          Apellido
        </label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.lastName}
          name="lastName"
          onChange={(el) => handleChange(el)}
          placeholder=""
        />
        {errors.lastName ? <label className="text-sm text-red-600">{errors.lastName}</label> : null}
      </div>
      <div className="">
        <label className="text-sm">Cuit</label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.cuit}
          name="cuit"
          onChange={(el) => handleChange(el)}
          placeholder=""
        />
        {errors.cuit ? <label className="text-sm text-red-600">{errors.cuit}</label> : null}
      </div>
      <div>
        <div className="">
          <label className="text-sm">
            Registro Unico Tributario
          </label>
          <input
            className="text-sm"
            type="file"
            name="image"
            onChange={(el) => handleImage(el)}
          />
        </div>
      </div>
      <input
        type="submit"
        value={"Registrar Empresa"}
        className="w-full px-8 py-3 font-semibold  bg-black text-white hover:bg-zinc-800 transition-colors rounded my-4 cursor-pointer"
      />
    </form>
  );
}