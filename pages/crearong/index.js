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

export default function Crearong() {
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
      <div class="flex flex-col justify-center items-start m-auto min-h-full mt-16 bg-white w-3/5">
        <div className="text-2xl font-montserrat justify-items-start w-full">
          <h1 class="text-start">Registrar ONG</h1>
        </div>
        <form class="pt-7" onSubmit={(el) => handleSubmit(el)}>
          <div class="flex">
            <div class="flex flex-col font-medium">
              <div class="flex flex-col">
                <label class="font-hind text-lg">Nombre del titular</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.name}
                  name={"name"}
                  onChange={(el) => handleChange(el)}
                  placeholder=""
                />
                {errors.name ? <label>{errors.name}</label> : null}
              </div>
              <div class="flex flex-col">
                <label class="pt-3 font-hind text-lg">Apellido del titular</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.lastName}
                  name="lastName"
                  onChange={(el) => handleChange(el)}
                  placeholder=""
                />
                {errors.lastName ? <label>{errors.lastName}</label> : null}
              </div>
              <div class="flex flex-col">
                <label class="pt-3 font-hind text-lg">Cuit del titular</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.cuit}
                  name="cuit"
                  onChange={(el) => handleChange(el)}
                  placeholder=""
                />
                {errors.cuit ? <label>{errors.cuit}</label> : null}
              </div>
            </div>
            <div>
              <div class="flex flex-col">
                <label class="font-hind text-lg">Nombre de la ONG</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.ongName}
                  name="ongName"
                  onChange={(el) => handleChange(el)}
                  placeholder=""
                />
                {errors.ongName ? <label>{errors.ongName}</label> : null}
              </div>
              <div class="flex flex-col font-medium">
                <label class="pt-3 font-hind text-lg">Pais</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.country}
                  name="country"
                  onChange={(el) => handleChange(el)}
                  placeholder=""
                />
                {errors.country ? <label>{errors.country}</label> : null}
              </div>
              <div class="flex flex-col font-medium">
                <label class="pt-3 font-hind text-lg">Provincia</label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="text"
                  value={input.province}
                  name="province"
                  onChange={(el) => handleChange(el)}
                  placeholder=""
                />
                {errors.province ? <label>{errors.province}</label> : null}
              </div>
            </div>
          </div>
          <input type="submit" value={"Registrarse"} class="mt-8 w-52 h-10 bg-blue-600 rounded-md text-white font-hind" />
        </form>
      </div>
    </div>
  );
}
