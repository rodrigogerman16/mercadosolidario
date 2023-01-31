"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const {VERCEL_URL = 'http://localhost:3000/api/railway-backend'} = process.env

function Validate(input) {
  let errors = {};
  if (input.name.length < 3 || input.name.length > 15) {
    errors.name = "Al menos 3 Caracteres";
  }
  if (input.lastName.length < 3 || input.lastName.length > 15) {
    errors.lastName = "Al menos 3 Caracteres";
  }
  if (input.cuit.length !== 11) {
    errors.cuit = "Ingrese su CUIT";
  }
  if (input.phone.length < 8) {
    errors.phone = "Ingrese su Telefono";
  }
  return errors;
}

export default function Crearong(props) {
  const [imageSrc, setImageSrc] = useState(null);

  const router = useRouter();

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    cuit: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const [image, setImage] = useState(null);

  const postONG = async (props) => {
  
    let info = await axios.post(
      `https://pf-backend-mercadosolidario-production.up.railway.app/api/ong/newong`,
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
      province: info.data.province,
      rut: info.data.rut,
      address: info.data.address,
      phone: info.data.phone,
    }

    window.localStorage.setItem("user", JSON.stringify(aux));

    return console.log(info.data, aux);
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
        //formData.append()

        const data = await fetch(
          "https://api.cloudinary.com/v1_1/dc9pehmoz/image/upload",
          {
            method: "POST",
            body: formData2,
          }
        ).then((r) => r.json());

        // console.log(data.secure_url)
        // console.log(props)

        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("lastName", input.lastName);
        formData.append("phone", input.phone);
        formData.append("email", props.email);
        formData.append("password", props.password);
        formData.append("rut", data.secure_url);
        formData.append("cuit", input.cuit);
        formData.append("type_of_user", props.type_of_user);

        postONG(formData);

        alert("ONG Registrada con Exito!");
        setInput({
          name: "",
          lastName: "",
          cuit: "",
          phone: "",
        });
        router.push("/");
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
        <label className="text-sm">
          Apellido del titular
        </label>
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
        <label className="text-sm">Cuit de la ONG</label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.cuit}
          name="cuit"
          onChange={(el) => handleChange(el)}
          placeholder=""
        />
        {errors.cuit ? <label>{errors.cuit}</label> : null}
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
        <label className="text-sm">
          Registro Unico Tributario
        </label>
        <input
          className="text-sm"
          type="file"
          name="file"
        />
      </div>
      <input
        type="submit"
        value={"Registrar ONG"}
        className="w-full px-8 py-3 font-semibold  bg-black text-white hover:bg-zinc-800 transition-colors rounded my-4 cursor-pointer"
      />
    </form>
  );
}
