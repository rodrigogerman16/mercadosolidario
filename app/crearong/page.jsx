"use client";
import Navbar from "app/Components/Navbar";
import { useState } from "react";

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
  if (input.ongName.length < 3 || input.ongName.length > 15) {
    errors.ongName = "Al menos 3 Caracteres";
  }
  if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.country)) {
    errors.country = "Ingrese un Pais Valido";
  }
  if (input.country.length === 0) {
    errors.country = "Ingrese un Pais";
  }
  if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.province)) {
    errors.province = "Ingrese una Provincia Valida";
  }
  if (input.province.length === 0) {
    errors.province = "Ingrese una Provincia";
  }
  return errors;
}

export default function crearong() {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    cuit: "",
    ongName: "",
    country: "",
    province: "",
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
        input.cuit !== "" &&
        input.ongName !== "" &&
        input.country !== "" &&
        input.province !== ""
      ) {
        setInput({
          name: "",
          lastName: "",
          cuit: "",
          ongName: "",
          country: "",
          province: "",
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
      <Navbar />
      <div>
        <h1>Registrar ONG</h1>
        <form onSubmit={(el) => handleSubmit(el)}>
          <div>
            <input
              type="text"
              value={input.name}
              name={"name"}
              onChange={(el) => handleChange(el)}
              placeholder="Nombre del Titular"
            />
            <br />
            {errors.name ? <label>{errors.name}</label> : null}
          </div>
          <div>
            <input
              type="text"
              value={input.lastName}
              name="lastName"
              onChange={(el) => handleChange(el)}
              placeholder="Apellido del Titular"
            />
            <br />
            {errors.lastName ? <label>{errors.lastName}</label> : null}
          </div>
          <div>
            <input
              type="text"
              value={input.cuit}
              name="cuit"
              onChange={(el) => handleChange(el)}
              placeholder="CUIT del Titular"
            />
            <br />
            {errors.cuit ? <label>{errors.cuit}</label> : null}
          </div>
          <div>
            <input
              type="text"
              value={input.ongName}
              name="ongName"
              onChange={(el) => handleChange(el)}
              placeholder="Nombre de la ONG"
            />
            <br />
            {errors.ongName ? <label>{errors.ongName}</label> : null}
          </div>
          <div>
            <input
              type="text"
              value={input.country}
              name="country"
              onChange={(el) => handleChange(el)}
              placeholder="Pais"
            />
            <br />
            {errors.country ? <label>{errors.country}</label> : null}
          </div>
          <div>
            <input
              type="text"
              value={input.province}
              name="province"
              onChange={(el) => handleChange(el)}
              placeholder="Provincia"
            />
            <br />
            {errors.province ? <label>{errors.province}</label> : null}
          </div>
          <input type="submit" value={"Registrarse"} />
        </form>
      </div>
    </div>
  );
}
