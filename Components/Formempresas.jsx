"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Alert from "./Alert";

function Validate(input) {
  let errors = {};
  if (input.name.length < 3 || input.name.length > 15) {
    errors.name = "Al menos 3 Caracteres";
  }
  if (input.lastName.length < 3 || input.lastName.length > 15) {
    errors.lastName = "Al menos 3 Caracteres";
  }
  if (!input.province){
    errors.province = "Seleccione una provincia"
  }
  if (input.cuit.length !== 11) {
    errors.cuit = "Ingrese su CUIT";
  }
  if (input.phone.length < 8) {
    errors.phone = "Ingrese su Telefono";
  }
  return errors;
}

export default function Formempresas(props) {
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
  const router = useRouter();

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    province: "",
    cuit: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const postCompany = async (props) => {
    let info = await axios.post(
      `https://pf-backend-mercadosolidario-production.up.railway.app/company/newcompany`,
      props,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );

    const aux = {
      name: info.data.name,
      lastName: info.data.lastName,
      email: info.data.email,
      type_of_user: info.data.type_of_user,
      id: info.data.id,
      cuit: info.data.cuit,
      rut: info.data.rut,
      address: info.data.address,
      province: info.data.province,
      phone: info.data.phone,
    };

    window.localStorage.setItem("user", JSON.stringify(aux));
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
        input.cuit !== "" &&
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
            method: "POST",
            body: formData2,
          }
        ).then((r) => r.json());

        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("lastName", input.lastName);
        formData.append("cuit", input.cuit);
        formData.append("rut", data.secure_url);
        formData.append("email", props.email);
        formData.append("password", props.password);
        formData.append("type_of_user", props.type_of_user);
        formData.append("province", input.province);
        formData.append("phone", input.phone);

        await postCompany(formData);       
        
        Alert({
          title: "Registro",
          text: "Empresa registrada con éxito!",
          icon: "success",
        });
        setInput({
          name: "",
          lastName: "",
          province: "",
          cuit: "",
          phone: "",
        });   

        window.localStorage.removeItem("user")
        window.location.href = '../';
        
      } else {
        Alert({
          title: "Registro",
          text: "Hay datos incorrectos o sin completar!",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error)
      const err = error.response.data.message? error.response.data : JSON.parse(error.response.data);
      setInput({
        email: "",
        password: "",
      });
      Alert({
        title: "Registro",
        text: err.message,
        icon: "error",
      });
    }
  }

  return (
    <form
      className="grid gap-4 justify-center items-center"
      onSubmit={(el) => handleSubmit(el, input)}
    >
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
        {errors.name ? (
          <label className="text-sm text-red-600">{errors.name}</label>
        ) : null}
      </div>
      <div className="">
        <label className="text-sm">Apellido</label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.lastName}
          name="lastName"
          onChange={(el) => handleChange(el)}
          placeholder=""
        />
        {errors.lastName ? (
          <label className="text-sm text-red-600">{errors.lastName}</label>
        ) : null}
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
        {errors.phone ? (
          <label className="text-sm text-red-600">{errors.phone}</label>
        ) : null}
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
          {provinces.map(item => <option value={item.value} key={item.value}>{item.label}</option>)}
        </select>
        {errors.province ? <label>{errors.province}</label> : null}
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
        {errors.cuit ? (
          <label className="text-sm text-red-600">{errors.cuit}</label>
        ) : null}
      </div>
      <div>
        <div className="">
          <label className="text-sm">Registro Unico Tributario</label>
          <input
            className="text-sm"
            type="file"
            name="file"
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
