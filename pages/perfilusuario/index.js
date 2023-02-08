import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../hooks/user";
import SideBar from "@/Components/SideBar";
import profile from "../../Assets/profile.png";
import Image from "next/image";
import Alert from "@/Components/Alert";
export default function Perfilusuario() {
  //..Estados para Fomulario

  const [errorsForm, setErrorsForm] = useState({});
  const [formUsuario, setFormUsuario] = useState({
    name: "",
    lastName: "",
    phone: "",
    user_linkedin: "",
    image: "",
    birthDate: "",
    profession: "",
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
          user_linkedin: api.data.user_linkedin,
          birthDate: api.data.birthDate,
          profession: api.data.profession,
        });

      const aux = {
        ...usuarioJSON,
        name: api.data.name,
        lastName: api.data.lastName,
        image: api.data.image,
        phone: api.data.phone,
        user_linkedin: api.data.user_linkedin,
        profession: api.data.profession,
        birthDate: api.data.birthDate,
      };

      console.log(aux);

      window.localStorage.setItem("user", JSON.stringify(aux));
    }

    fetchData();
  }, []);

  const handlerVisible = () => {
    setVisible(visible ? false : true);
  };

  const validate = (formUsuario) => {
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

    if (!/^[0-9]*$/.test(formUsuario.phone)) {
      errors.phone = "No puede tener letras";
    }
    if (formUsuario.phone.length < 8) {
      errors.phone = "Ingrese un teléfono";
    }

    return errors;
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
    setErrorsForm(
      validate({
        ...formUsuario,
        [e.target.name]: e.target.value,
      })
    );
  };

  async function handlerSubmit(el) {
    el.preventDefault();
    setErrorsForm(validate(formUsuario));
    if (
      Object.values(errorsForm).length === 0 &&
      formUsuario.name !== "" &&
      formUsuario.lastName !== "" &&
      formUsuario.phone !== "" &&
      formUsuario.user_linkedin !== "" &&
      formUsuario.image !== "" &&
      formUsuario.birthDate !== "" &&
      formUsuario.profession !== ""
    ) {
      const date = new Date(formUsuario.birthDate);
      const mongoDbDate = date.toISOString();
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
        user_linkedin: formUsuario.user_linkedin,
        profession: formUsuario.profession,
        image: aux.secure_url,
        birthDate: mongoDbDate,
      };

      //console.log(obj);

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
        user_linkedin: "",
        birthDate: "",
        profession: "",
      });

      Alert({
        title: "Datos Actualizados",
        text: "Cambiado Satisfactoriamente",
        icon: "success",
      });

      window.location.reload();
    } else {
      Alert({
        title: "Actualización fallida",
        text: "Hay datos incorrectos o sin completar",
        icon: "error",
      });
      window.location.reload();
    }
  }

  console.log(formUsuario);

  const profesiones = [
    { value: "Medico", label: "Medico", checked: false },
    { value: "Ingeniero", label: "Ingeniero", checked: false },
    {
      value: "Profesor",
      label: "Profesor",
      checked: false,
    },
    {
      value: "Abogado",
      label: "Abogado",
      checked: false,
    },
    {
      value: "Contador",
      label: "Contador",
      checked: false,
    },
    { value: "Enfermero", label: "Enfermero", checked: false },
    {
      value: "Arquitecto",
      label: "Arquitecto",
      checked: false,
    },
    {
      value: "Economista",
      label: "Economista",
      checked: false,
    },
    { value: "Dentista", label: "Dentista", checked: false },
    { value: "Veterinario", label: "Veterinario", checked: false },
    {
      value: "Psicologo",
      label: "Psicologo",
      checked: false,
    },
    { value: "Farmaceutico", label: "Farmaceutico", checked: false },
    { value: "Cirujano", label: "Cirujano", checked: false },
    { value: "Optometrista", label: "Optometrista", checked: false },
    { value: "Entretenimiento", label: "Entretenimiento", checked: false },
    {
      value: "Fisioterapeuta",
      label: "Fisioterapeuta",
      checked: false,
    },
    { value: "TerapeutaDelHabla", label: "TerapeutaDelHabla", checked: false },
    {
      value: "TrabajadorSocial",
      label: "TrabajadorSocial",
      checked: false,
    },
    { value: "Policia", label: "Policia", checked: false },
    {
      value: "Bombero",
      label: "Bombero",
      checked: false,
    },
    { value: "Militar", label: "Militar", checked: false },
    { value: "Otros", label: "Otros", checked: false },
  ];

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
          {formUsuario.image ? (
            <img
              src={formUsuario.image}
              alt="imagen de perfil"
              className="self-center w-56"
            />
          ) : (
            <Image
              src={profile}
              alt="default image"
              className="self-center w-56"
            />
          )}
          <label className="text-sm">Cambiar imagen de perfil</label>
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
        <div className="flex flex-col">
          <label className="text-sm">Linkedin</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            name="user_linkedin"
            type="text"
            value={formUsuario.user_linkedin}
            onChange={formHandler}
          />
          {errorsForm.user_linkedin ? (
            <label>{errorsForm.user_linkedin}</label>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Fecha de Nacimiento</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="date"
            value={formUsuario.birthDate}
            name="birthDate"
            onChange={formHandler}
          />
          {/* {errorsForm.birthDate ? <p>{errorsForm.birthDate}</p> : ""} */}
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Profesion</label>
          <select
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="select"
            value={formUsuario.profession}
            name="profession"
            onChange={formHandler}
          >
            {profesiones.map((item) => (
              <option value={item.value} key={item.label}>
                {item.label}
              </option>
            ))}
          </select>
          {/* {errorsForm.profession ? <p>{errorsForm.profession}</p> : ""} */}
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
