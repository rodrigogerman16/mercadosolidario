"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Alert from "@/Components/Alert";

function Validate(input) {
  let errors = {};
  if (input.title.length < 5 || input.title.length > 50) {
    errors.title = "Al menos 5 Caracteres";
  }
  if (input.description.length < 5 || input.description.length > 500) {
    errors.description = "Al menos 5 Caracteres";
  }
  if (input.province === "") {
    errors.province = "Ingrese la ubicación";
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
  if (input.category === "") {
    errors.category = "Ingrese el tipo de ayuda";
  }
  return errors;
}

export default function Creariniciativa(props) {
  const router = useRouter();
  const [input, setInput] = React.useState({
    title: "",
    description: "",
    province: "",
    expirationDate: "",
    type_of_help: "",
    category: "",
  });

  const [errors, setErrors] = React.useState({});

  const [imageSrc, setImageSrc] = useState(null);

  const ongstorage = JSON.parse(window.localStorage.getItem("user"));

  const postIniciatives = async (props) => {
    let info = await axios.post(
      `https://pf-backend-mercadosolidario-production.up.railway.app/posts/newpost`,
      props,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
    console.log(info.data);
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
        input.province !== "" &&
        input.expirationDate !== "" &&
        input.type_of_help !== "" &&
        input.category !== ""
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

        formData2.append("authorId", ongstorage.id);
        formData2.append("expirationDate", input.expirationDate);
        formData2.append("title", input.title);
        formData2.append("description", input.description);
        formData2.append("province", input.province);
        formData2.append("image", data.secure_url);
        formData2.append("resultsAchieved", "Buenos Resultados");
        formData2.append("type_of_help", input.type_of_help);
        formData2.append("rubro", input.category);

        postIniciatives(formData2);

        router.push("/ong/publicaciones");

        setInput({
          expirationDate: "",
          title: "",
          description: "",
          province: "",
          type_of_help: "",
          category: "",
        });
        setImageSrc(null);
      } else {
        Alert({
          title: "Iniciativa",
          text: "Hay datos incorrectos o sin completar",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
      Alert({
        title: "Iniciativa",
        text:
          "Lo sentimos, hubo un error al crear su iniciativa, intente nuevamente en unos segundos, gracias.",
        icon: "error",
      });
    }
  }

  console.log(input);

  return (
    <div className="w-full max-w-md p-4 rounded-md sm:p-8 m-auto min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">
      <span className="block mb-2 text-xs font-semibold tracking-widest text-center uppercase dark:text-pink-400">
        Iniciativas
      </span>
      <h2 className="text-5xl font-bold text-center">Crear una iniciativa</h2>
      <div className="text-center mb-10">
        <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
        <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
      </div>
      <form onSubmit={(el) => handleSubmit(el)} className="grid gap-4 w-full">
        <label class="block text-sm">Titulo</label>
        <input
          class="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.title}
          name="title"
          onChange={(el) => handleChange(el)}
          placeholder=""
        />
        {errors.title ? (
          <label className="w-full text-red-600">{errors.title}</label>
        ) : null}
        <label class="block text-sm">Descripción</label>
        <input
          class="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.description}
          name="description"
          onChange={(el) => handleChange(el)}
          placeholder=""
        />
        {errors.description ? (
          <label className="w-full text-red-600">{errors.description}</label>
        ) : null}
        <label class="block text-sm">Elige una Ubicación</label>
        <select
          class="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          name="province"
          onChange={(el) => handleChange(el)}
        >
          <option value="">Elige una Opcion</option>
          <option value="BuenosAires">Buenos Aires</option>
          <option value="Catamarca">Catamarca</option>
          <option value="Chaco">Chaco</option>
          <option value="Chubut">Chubut</option>
          <option value="Cordoba">Córdoba</option>
          <option value="Corrientes">Corrientes</option>
          <option value="EntreRios">Entre Ríos</option>
          <option value="Formosa">Formosa</option>
          <option value="Jujuy">Jujuy</option>
          <option value="LaPampa">La Pampa</option>
          <option value="LaRioja">La Rioja</option>
          <option value="Mendoza">Mendoza</option>
          <option value="Misiones">Misiones</option>
          <option value="Neuquen">Neuquén</option>
          <option value="RioNegro">Río Negro</option>
          <option value="Salta">Salta</option>
          <option value="SanJuan">San Juan</option>
          <option value="SanLuis">San Luis</option>
          <option value="SantaCruz">Santa Cruz</option>
          <option value="SantaFe">Santa Fe</option>
          <option value="SantiagoDelEstero">Santiago del Estero</option>
          <option value="TierraDelFuego">Tierra del Fuego</option>
          <option value="Tucuman">Tucumán</option>
        </select>
        {errors.province ? (
          <label className="w-full text-red-600">{errors.province}</label>
        ) : null}
        <label class="block text-sm">Elige un Rubro</label>
        <select
          class="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          name="category"
          onChange={(el) => handleChange(el)}
        >
          <option value="">Elige una Opcion</option>
          <option value="Alimentacion">Alimentacion</option>
          <option value="Ayuda_a_refugiados">Ayuda a Refugiados</option>
          <option value="Ayuda_a_animales">Ayuda a Animales</option>
          <option value="Apoyo_a_comunidades_indigenas">
            Apoyo a Comunidades Indigenas
          </option>
          <option value="Apoyo_a_lgbt">Apoyo a LGBT</option>
          <option value="Apoyo_a_la_mujer">Apoyo a la Mujer</option>
          <option value="Construccion_obras">Construccion Obras</option>
          <option value="Cultura">Cultura</option>
          <option value="Deportes">Deportes</option>
          <option value="Derechos_humanos">Derechos Humanos</option>
          <option value="Discapacitados">Discapacitados</option>
          <option value="Educacion">Educacion</option>
          <option value="Medio_ambiente">Medio Ambiente</option>
          <option value="Entretenimiento">Entretenimiento</option>
          <option value="Gobierno_no_lucro">Gobierno no Lucro</option>
          <option value="Materia_prima">Materia Prima</option>
          <option value="Medios_de_comunicacion">Medios de Comunicacion</option>
          <option value="Salud_medicina">Salud Medicina</option>
          <option value="Servicio_comunitario">Servicio Comunitario</option>
          <option value="Transporte">Transporte</option>
        </select>
        {errors.category ? (
          <label className="w-full text-red-600">{errors.category}</label>
        ) : null}
        <label class="block text-sm">Fecha de Expiracion</label>
        <input
          class="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.expirationDate}
          name="expirationDate"
          onChange={(el) => handleChange(el)}
          placeholder="AAAA-MM-DD"
        />
        {errors.expirationDate ? (
          <label className="w-full text-red-600">{errors.expirationDate}</label>
        ) : null}
        <label class="block text-sm">Imagen</label>
        <input class="w-full " type="file" name="file" />
        {/* {imageSrc === null ? <label>{'Ingrese el Archivo'}</label> : null} */}
        <label class="block text-sm">Tipo de Ayuda</label>
        <select
          class="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          name="type_of_help"
          onChange={(el) => handleChange(el)}
        >
          <option value="">Elige una Opcion</option>
          <option value="efectivo">En Efectivo</option>
          <option value="especie">En Especie</option>
          <option value="servicio">Voluntariados</option>
        </select>
        {errors.type_of_help ? (
          <label className="w-full text-red-600">{errors.type_of_help}</label>
        ) : null}
        {/* {input.type_of_help === "efectivo" ? (
          <div>
            <label>CBU/Paypal/MP</label>
            <input
              type="text"
              value={input.cbu}
              name="cbu"
              onChange={(el) => handleChange(el)}
            ></input>
          </div>
        ) : null}
        {input.type_of_help === "especie" ? (
          <div>
            <label>Items Aceptados(Ej: Ropa, utiles, Arroz, Madera)</label>
            <input
              type="text"
              value={input.items_accepted}
              name="items_accepted"
              onChange={(el) => handleChange(el)}
            ></input>
          </div>
        ) : null} */}
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
        <input
          type="submit"
          value={"Publicar"}
          class="w-full px-8 py-3 font-semibold bg-black text-white hover:bg-zinc-800 transition-colors rounded"
        />
      </form>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const posts = await fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/posts"
  ).then((res) => res.json());

  const company = await fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/company"
  ).then((res) => res.json());

  const ong = await fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/ong"
  ).then((res) => res.json());

  const users = await fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/allusers"
  ).then((res) => res.json());
  return {
    props: {
      posts,
      company,
      ong,
      users,
    },
  };
}
