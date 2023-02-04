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
  if (input.cuit.length !== 11) {
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

  const postCompany = async (props) => {
    let info = await axios.post(
      `http://localhost:3001/company/newcompany`,
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
        input.cuit !== ""
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

        postCompany(formData);       
        
        Alert({
          title: "Registro",
          text: "Empresa registrada con éxito!",
          icon: "success",
        });
        setInput({
          name: "",
          lastName: "",
          cuit: "",
        });
        window.location.href = '../';
        signOut()
      } else {
        Alert({
          title: "Registro",
          text: "Hay datos incorrectos o sin completar!",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error)
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
