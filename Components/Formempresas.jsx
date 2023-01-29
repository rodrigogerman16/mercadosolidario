"use client";
import { useState } from "react";
import { useRouter } from "next/router";
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

export default function Formempresas(props) {

  const router = useRouter();

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
        router.push('/')
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
    <div>
      <div class="">
        <div className="">
          <h1 class="">Formulario para Registro de Empresas Great Place to Work</h1>
        </div>
        <form class="" onSubmit={(el) => handleSubmit(el, image, input)}>
          <div class="">
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
                <label class="">
                  Apellido
                </label>
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
              <div class="">
                <label class="">Cuit</label>
                <input
                  class=""
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
              <div class="">
                <label class="">
                  Registro Unico Tributario
                </label>
                <input
                  class=""
                  type="file"
                  name="image"               
                  onChange={(el) => handleImage(el)}
                />
                {image === null ? <label>{'Ingrese el Archivo'}</label> : null}
              </div>
            </div>
          </div>
          <input
            type="submit"
            value={"Registrar Empresa"}
            class=""
          />
        </form>
      </div>
    </div>
  );
}