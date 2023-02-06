import React, { useState } from "react";
import axios from "axios";
import Alert from "@/Components/Alert";

function Validate(input) {
  let errors = {};
  if (input.name.length < 3 || input.name.length > 15) {
    errors.name = "Al menos 3 Caracteres";
  }
  if (input.lastName.length < 3 || input.lastName.length > 15) {
    errors.lastName = "Al menos 3 Caracteres";
  }
  if (!input.province) {
    errors.province = "Seleccione una provincia";
  }
  if (input.phone.length < 8) {
    errors.phone = "Ingrese su Telefono";
  }
  return errors;
}

const Perfil = (props) => {
  const provinces = [
    { value: "BuenosAires", label: "Buenos Aires" },
    { value: "Catamarca", label: "Catamarca" },
    { value: "Chaco", label: "Chaco" },
    { value: "Chubut", label: "Chubut" },
    { value: "Cordoba", label: "Córdoba" },
    { value: "Corrientes", label: "Corrientes" },
    { value: "EntreRios", label: "Entre Ríos" },
    { value: "Formosa", label: "Formosa" },
    { value: "Jujuy", label: "Jujuy" },
    { value: "LaPampa", label: "La Pampa" },
    { value: "LaRioja", label: "La Rioja" },
    { value: "Mendoza", label: "Mendoza" },
    { value: "Misiones", label: "Misiones" },
    { value: "Neuquen", label: "Neuquén" },
    { value: "RioNegro", label: "Río Negro" },
    { value: "Salta", label: "Salta" },
    { value: "SanJuan", label: "San Juan" },
    { value: "SanLuis", label: "San Luis" },
    { value: "SantaCruz", label: "Santa Cruz" },
    { value: "SantaFe", label: "Santa Fé" },
    { value: "SantiagoDelEstero", label: "Santiago del Estero" },
    { value: "TierraDelFuego", label: "Tierra del Fuego" },
    { value: "Tucuman", label: "Tucuman" },
  ];

  const rubros = [
    { value: "Alimentacion", label: "Alimentacion" },
    { value: "Asesoria Legal", label: "Asesoria Legal" },
    { value: "Ayuda_a_refugiados", label: "Ayuda a refugiados" },
    { value: "Ayuda_a_animales", label: "Ayuda a animales" },
    {
      value: "Apoyo_a_comunidades_indigenas",
      label: "Apoyo a comunidades indigenas",
    },
    { value: "Apoyo_a_lgbt", label: "Apoyo a lgbt" },
    { value: "Apoyo_a_la_mujer", label: "Apoyo a la mujer" },
    { value: "Construccion_obras", label: "Construccion obras" },
    { value: "Cultura", label: "Cultura" },
    { value: "Deportes", label: "Deportes" },
    { value: "Derechos_humanos", label: "Derechos humanos" },
    { value: "Discapacitados", label: "Discapacitados" },
    { value: "Educacion", label: "Educacion" },
    { value: "Medio_ambiente", label: "Medio ambiente" },
    { value: "Entretenimiento", label: "Entretenimiento" },
    { value: "Gobierno_no_lucro", label: "Gobierno no lucro" },
    { value: "Materia_prima", label: "Materia prima" },
    { value: "Medios_de_comunicacion", label: "Medios de comunicacion" },
    { value: "Salud_medicina", label: "Salud medicina" },
    { value: "Servicio_comunitario", label: "Servicio comunitario" },
    { value: "Transporte", label: "Transporte" },
  ];

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    province: "",
    rubro: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const putONG = async (props) => {
    const user =  JSON.parse(window.localStorage.getItem("user"))   
   
    const aux = {
      name: input.name,
      lastName: input.lastName,
      province: input.province,
      rubro: input.rubro,
      phone: input.phone,
    };
    
    window.localStorage.setItem("user", JSON.stringify(aux));
    await axios.put(`https://pf-backend-mercadosolidario-production.up.railway.app/ong/update/${user.id}`, aux);
    return console.log(user);
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
        input.name !== "" &&
        input.lastName !== "" &&
        input.province !== "" &&
        input.rubro !== "" &&
        input.phone !== ""
      ) {
        const form = el.currentTarget;
        const fileInput = Array.from(form.elements).find(
          ({ name }) => name === "file"
        );

        const formData2 = new FormData();

        for (const file of fileInput.files) {
          formData2.append("file", file);
        }

        formData2.append("upload_preset", "my-uploads");

        const data = await fetch(
          "https://api.cloudinary.com/v1_1/dc9pehmoz/image/upload",
          {
            method: "PUT",
            body: formData2,
          }
        ).then((r) => r.json());

        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("lastName", input.lastName);
        formData.append("phone", input.phone);
        formData.append("password", props.password);
        formData.append("province", input.province);
        formData.append("rubro", input.rubro);
        formData.append("rut", data.secure_url);
        formData.append("type_of_user", props.type_of_user);
        await putONG(formData);

        Alert({
          title: "Registro",
          text: "ONG Registrada con éxito!",
          icon: "success",
        });
        setInput({
          name: "",
          lastName: "",
          province: "",
          rubro: "",
          phone: "",
        });
      } else {
        Alert({
          title: "Registro",
          text: "Hay datos incorrectos o sin completar",
          icon: "error",
        });
      }
    } catch (error) { console.log(error)}
  }
  
  return (
    <div>      
      {/*Cambiar info */}
      <h2 className="text-center font-semibold text-2xl mt-10">Editar datos de Perfil</h2>
      <form
        className="grid gap-4 mt-16 justify-center items-center"
        onSubmit={(el) => handleSubmit(el)}
      >
        <div className="">
          <label className="text-sm">Nombre del titular</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="text"
            value={input.name}
            name={"name"}
            onChange={(el) => handleChange(el)}
            placeholder=""
          />
          {errors.name ? <label>{errors.name}</label> : null}
        </div>
        <div className="">
          <label className="text-sm">Apellido del titular</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="text"
            value={input.lastName}
            name="lastName"
            onChange={(el) => handleChange(el)}
            placeholder=""
          />
          {errors.lastName ? <label>{errors.lastName}</label> : null}
        </div>
        <div className="">
          <label className="text-sm">Provincia</label>
          <select
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="select"
            value={input.province}
            name="province"
            onChange={(el) => handleChange(el)}
          >
            {provinces.map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          {errors.province ? <label>{errors.province}</label> : null}
        </div>
        <div className="">
          <label className="text-sm">Rubro</label>
          <select
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="select"
            value={input.rubro}
            name="rubro"
            onChange={(el) => handleChange(el)}
          >
            {rubros.map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          {errors.rubro ? <label>{errors.rubro}</label> : null}
        </div>
        <div className="">
          <label className="text-sm">Telefono</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="text"
            value={input.phone}
            name="phone"
            onChange={(el) => handleChange(el)}
            placeholder=""
          />
          {errors.phone ? <label>{errors.phone}</label> : null}
        </div>
        <div className="">
          <label className="text-sm">Registro Unico Tributario</label>
          <input className="text-sm" type="file" name="file" />
        </div>
        <input
          type="submit"
          value={"Editar"}
          className="w-full px-8 py-3 font-semibold  bg-black text-white hover:bg-zinc-800 transition-colors rounded my-4 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Perfil;


export async function getServerSideProps({req}){
  const posts = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/posts")
    .then((res) => res.json())

  const company = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/company")
    .then((res) => res.json())

  const ong = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/ong")
    .then((res) => res.json())

  const users = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/allusers")
    .then((res) => res.json())
  return{
    props: {
      posts,
      company,
      ong,
      users}
  }
}