import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../hooks/user";
import SideBar from "@/Components/SideBar";
import profile from "../../Assets/profile.png";
import Image from "next/image";
import Alert from "@/Components/Alert";
export default function Perfilcompany() {
  //..Estados para Fomulario

  const [errorsForm, setErrorsForm] = useState({});
  const [formUsuario, setFormUsuario] = useState({
    name: "",
    lastName: "",
    phone: "",
    image: "",
  });
  console.log(formUsuario);

  useEffect(() => {
    async function fetchData() {
      const usuario = window.localStorage.getItem("user");
      const usuarioJSON = usuario && JSON.parse(usuario);
      const api =
        usuarioJSON &&
        (await axios(
          "https://pf-backend-mercadosolidario-production.up.railway.app/user/" +
            usuarioJSON.id
        ));

      console.log("actualizando");
      api &&
        setFormUsuario({
          name: api.data.name,
          lastName: api.data.lastName,
          image: api.data.image,
          phone: api.data.phone,
        });

      const aux = {
        ...usuarioJSON,
        name: api.data.name,
        lastName: api.data.lastName,
        image: api.data.image,
        phone: api.data.phone,
      };

      console.log(aux);

      window.localStorage.setItem("user", JSON.stringify(aux));
    }

    fetchData();
  }, []);

  const handlerVisible = () => {
    setVisible(visible ? false : true);
  };

  const usuario = useUser();
  let user = "";
  usuario ? (user = JSON.parse(usuario)) : "";
  const formHandler = (e) => {
    setFormUsuario({
      ...formUsuario,
      [e.target.name]: e.target.value,
    });
    console.log(formUsuario);
  };
  const validate = (formUsuario) => {
    const letras = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "1,2,3,4,5,6,7,8,9,0";
    let errors = {};
    if (!formUsuario.name) {
      errors.name = "falta name";
    } else if (formUsuario.name.length <= 2) {
      errors.name = "El nombre es muy corto";
    }
    if (!formUsuario.lastName) {
      errors.lastName = "falta apellido";
    } else if (formUsuario.name.length <= 2) {
      errors.lastName = "El apellido es muy corto";
    }
    if (!formUsuario.phone.includes(letras)) {
      errors.phone = "No puede tener letras";
    }

    return errors;
  };

  async function handlerSubmit(el) {
    el.preventDefault();
    setErrorsForm(validate(formUsuario));

    const form = el.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData2 = new FormData();

    for (const file of fileInput.files) {
      formData2.append("file", file);
    }

    formData2.append("upload_preset", "my-uploads");

    const aux = await fetch(
      "https://api.cloudinary.com/v1_1/dc9pehmoz/image/upload",
      {
        method: "POST",
        body: formData2,
      }
    ).then((r) => r.json());

    const obj = {
      name: formUsuario.name,
      lastName: formUsuario.lastName,
      phone: formUsuario.phone,
      image: aux.secure_url,
    };

    //console.log(obj);
    //CAMBIAR POR EL PUT DE COMPANY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const info = await axios.put(
      "https://pf-backend-mercadosolidario-production.up.railway.app/user/update/" +
        user.id,
      obj
    );

    const data = info.data;
    console.log(info);
    console.log(data);

    setFormUsuario({
      name: "",
      lastName: "",
      phone: "",
      image: "",
    });

    Alert({
      title: "Datos Actualizados",
      text: "Cambiado Satisfactoriamente",
      icon: "success",
    });

    window.location.reload();
  }

  console.log(formUsuario);

  return (
    <div>
      <SideBar />
      {/*Cambiar info */}
      <h2 className="text-center font-semibold text-2xl mt-10">
        Editar datos de Perfil
      </h2>
      <form
        className="grid gap-4 mt-16 justify-center items-center"
        onSubmit={(el) => handlerSubmit(el)}
      >
        <div className="flex flex-col">
          {/*---------- APLICAR CLOUDINARY ---------------*/}
          <label className="text-sm">Imagen de perfil</label>
          {formUsuario.image ? (
            <img src={formUsuario.image} alt="imagen de perfil" />
          ) : (
            <Image src={profile} alt="default image" />
          )}
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="file"
            name="file"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Nombre del titular</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="text"
            value={formUsuario.name}
            name={"name"}
            onChange={formHandler}
            required
          />
          {errorsForm.name ? <p>{errorsForm.name}</p> : ""}
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Apellido del titular</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            name="lastName"
            value={formUsuario.lastName}
            onChange={formHandler}
            required
          />
          {errorsForm.lastName ? <p>{errorsForm.lastName}</p> : ``}
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Telefono</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="tel"
            value={formUsuario.phone}
            name="phone"
            onChange={formHandler}
          />
          {errorsForm.phone ? <p>{errorsForm.phone}</p> : ""}
        </div>
        <input
          type="submit"
          value={"Editar"}
          className="w-full px-8 py-3 font-semibold  bg-black text-white hover:bg-zinc-800 transition-colors rounded my-4 cursor-pointer"
        />
      </form>
    </div>
  );
}