"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

function Validate(input) {
  let errors = {};
  if (input.title.length < 5 || input.title.length > 50) {
    errors.title = "Al menos 5 Caracteres";
  }
  if (input.description.length < 5 || input.description.length > 500) {
    errors.description = "Al menos 5 Caracteres";
  }
  if (input.location === "") {
    errors.location = "Ingrese la ubicación";
  }
  if (input.type_of_help === "") {
    errors.type_of_help = "Ingrese el tipo de ayuda";
  }
  if (input.expirationDate === "") {
    errors.expirationDate = "Ingrese la Fecha de Expiracion";
  }
  if (input.expirationDate.length < 10 || input.expirationDate.length > 10) {
    errors.expirationDate = "Respete el Formato AAAA/MM/DD";
  }
  return errors;
}

export default function Creariniciativa() {
  const router = useRouter();
  const [input, setInput] = React.useState({
    title: "",
    description: "",
    location: "",
    expirationDate: "",
    type_of_help: ""
  });

  const [errors, setErrors] = React.useState({});

  const [imageSrc, setImageSrc] = useState(null);

  const postIniciatives = async (props) => {
    let info = await axios.post(
      `https://pf-backend-mercadosolidario-production.up.railway.app/posts/newpost`,
      props,
      {headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }}   
    );
    return console.log(info.data);
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

  // function handleCheck(el) {
  //   if (el.target.checked) {
  //     setInput({
  //       ...input,
  //       [el.target.name]: el.target.id,
  //     });
  //   } else if (!el.target.checked) {
  //     setInput({
  //       ...input,
  //       [el.target.name]: "",
  //     });
  //   }
  // }

  async function handleSubmit(el) {
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
        input.title !== "" &&
        input.description !== "" &&
        input.location !== "" &&
        input.expirationDate !== "" &&
        input.type_of_help !== ""
      ) {
        const form = el.currentTarget;
        const fileInput = Array.from(form.elements).find(
          ({ name }) => name === "file"
        );

        const formData = new FormData();

        for (const file of fileInput.files) {
          formData.append("file", file);
        }

        formData.append("upload_preset", "my-uploads");
        //formData.append()

        const data = await fetch(
          "https://api.cloudinary.com/v1_1/dc9pehmoz/image/upload",
          {
            method: "POST",
            body: formData,
          }
        ).then((r) => r.json());

        setImageSrc(data.secure_url);
        //setUploadData(data);

        const formData2 = new FormData();

        formData2.append("authorId", "63d31dbace5c61728e7e5bd0")
        formData2.append("expirationDate", input.expirationDate)
        formData2.append("title", input.title)
        formData2.append("description", input.description)
        formData2.append("location", input.location)
        formData2.append("image", data.secure_url)
        formData2.append("resultsAchieved", "Buenos Resultados")
        formData2.append("type_of_help", input.type_of_help)
        
        postIniciatives(formData2);

        router.push("/iniciativas");
        
        setInput({
          expirationDate: "",
          title: "",
          description: "",
          location: "",
          type_of_help: ""
        });
        setImageSrc(null)
      } else {
        alert("Hay datos incorrectos o sin completar!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log(input);

  return (
    <div class="flex flex-col justify-center items-start m-auto min-h-full mt-16 bg-white w-3/5">
      <div>
        <div class="text-3xl font-montserrat justify-items-start w-full">
          <h1 class="text-start">Crear Iniciativa</h1>
        </div>
        <form onSubmit={(el) => handleSubmit(el)}>
          <div class="flex flex-col mt-2">
            <label class="font-hind text-lg">Titulo</label>
            <input
              class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
              type="text"
              value={input.title}
              name="title"
              onChange={(el) => handleChange(el)}
              placeholder=""
            />
            {errors.title ? <label>{errors.title}</label> : null}
          </div>
          <div class="flex flex-col mt-2">
            <label class="font-hind text-lg">Descripción</label>
            <input
              class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
              type="text"
              value={input.description}
              name="description"
              onChange={(el) => handleChange(el)}
              placeholder=""
            />
            {errors.description ? <label>{errors.description}</label> : null}
          </div>
          <div class="mt-6">
            <label class="font-hind text-lg">Elige una Ubicación</label>
            <select
              class="ml-2 cursor-pointer"
              name="location"
              onChange={(el) => handleChange(el)}
            >
              <option value="">Elige una Opcion</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Catamarca">Catamarca</option>
              <option value="Chaco">Chaco</option>
              <option value="Chubut">Chubut</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Corrientes">Corrientes</option>
              <option value="Entre Ríos">Entre Ríos</option>
              <option value="Formosa">Formosa</option>
              <option value="Jujuy">Jujuy</option>
              <option value="La Pampa">La Pampa</option>
              <option value="La Rioja">La Rioja</option>
              <option value="Mendoza">Mendoza</option>
              <option value="Misiones">Misiones</option>
              <option value="Neuquén">Neuquén</option>
              <option value="Río Negro">Río Negro</option>
              <option value="Salta">Salta</option>
              <option value="San Juan">San Juan</option>
              <option value="San Luis">San Luis</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="Santiago del Estero">Santiago del Estero</option>
              <option value="Tierra del Fuego">Tierra del Fuego</option>
              <option value="Tucumán">Tucumán</option>
            </select>
            {errors.location ? <label>{errors.location}</label> : null}
          </div>
          <div class="mt-6">
            <label class="font-hind text-lg">Tipo de Ayuda</label>
            <select
              class="ml-2 cursor-pointer"
              name="type_of_help"
              onChange={(el) => handleChange(el)}
            >
              <option value="">Elige una Opcion</option>
              <option value="efectivo">En Efectivo</option>
              <option value="especie">En Especie</option>
              <option value="servicio">Voluntariados</option>
            </select>
            {errors.type_of_help ? <label>{errors.type_of_help}</label> : null}
          </div>
          {/* <div class="mt-2 font-hind text-lg">
            <label>Tipo de Ayudas/Donaciones</label>

            <div class="mt-2 font-hind text-lg">
              <input
                class="cursor-pointer"
                type="checkbox"
                id="EFECTIVO"
                name="type_of_help"
                onClick={(el) => handleCheck(el)}
              />
              <label class="ml-2 hover:underline">En Efectivo</label>
            </div>
            <div class="mt-2 font-hind text-lg">
              <input
                class="cursor-pointer"
                type="checkbox"
                id="EN_ESPECIE"
                name="type_of_help"
                onClick={(el) => handleCheck(el)}
              />
              <label class="ml-2 hover:underline">En Especie</label>
            </div>
            <div class="mt-1 font-hind text-lg">
              <input
                class="cursor-pointer"
                type="checkbox"
                id="VOLUNTARIO"
                name="type_of_help"
                onClick={(el) => handleCheck(el)}
              />
              <label class="ml-2">Voluntarios</label>
            </div>
          </div> */}
          <div class="flex flex-col mt-2">
            <label class="font-hind text-lg">Fecha de Expiracion</label>
            <input
              class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
              type="text"
              value={input.expirationDate}
              name="expirationDate"
              onChange={(el) => handleChange(el)}
              placeholder="AAAA-MM-DD"
            />
            {errors.expirationDate ? <label>{errors.expirationDate}</label> : null}
          </div>
          <div class="flex flex-col">
                <label class="font-hind text-lg">
                  Imagen
                </label>
                <input
                  class="border border-slate-400 mr-9 mt-1 h-10 w-72 rounded"
                  type="file"
                  name="file"               
                />
                {/* {imageSrc === null ? <label>{'Ingrese el Archivo'}</label> : null} */}
              </div>
          <input
            type="submit"
            value={"Publicar"}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-6"
          />
        </form>
      </div>
    </div>
  );
}