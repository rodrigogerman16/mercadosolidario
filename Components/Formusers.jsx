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
// reqiest de axios
// te devuelve user type
// lo metes al localstorage
        
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
    <div>
      <div class="">
        <div className="">
          <h1 class="">
            Formulario para Registro de Donantes/Voluntarios
          </h1>
        </div>
        <form class="" onSubmit={(el) => handleSubmit(el, input)}>
          <div class="">
            <div class="">
              <label class="">Nombre</label>
              <input
                class=""
                type="text"
                value={input.name}
                name={"name"}
                onChange={(el) => handleChange(el)}
                placeholder=""
              />
              {errors.name ? <label>{errors.name}</label> : null}
            </div>
            <div class="">
              <label class="">Apellido</label>
              <input
                class=""
                type="text"
                value={input.lastName}
                name="lastName"
                onChange={(el) => handleChange(el)}
                placeholder=""
              />
              {errors.lastName ? <label>{errors.lastName}</label> : null}
            </div>
            <div>
              <div class="">
                <label class="">Telefono</label>
                <input
                  class=""
                  type="text"
                  value={input.phone}
                  name="phone"
                  onChange={(el) => handleChange(el)}
                  placeholder=""
                />
                {errors.phone ? <label>{errors.phone}</label> : null}
              </div>
            </div>
            <div class="">
              <label class="">{"Cuil (Opcional)"}</label>
              <input
                class=""
                type="text"
                value={input.cuil}
                name="cuil"
                onChange={(el) => handleChange(el)}
                placeholder=""
              />
              {errors.cuil ? <label>{errors.cuil}</label> : null}
            </div>
            <div>
              <div class="">
                <label class="">{"Linkedin (Opcional)"}</label>
                <input
                  class=""
                  type="text"
                  value={input.user_linkedin}
                  name="user_linkedin"
                  onChange={(el) => handleChange(el)}
                  placeholder=""
                />
                {errors.user_linkedin ? (
                  <label>{errors.user_linkedin}</label>
                ) : null}
              </div>
            </div>
          </div>
          <input
            type="submit"
            value={"Registrarse"}
            class=""
          />
        </form>
      </div>
    </div>
  );
}