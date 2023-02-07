import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import axios from "axios";
import RutaUser from "@/Components/RutaUser";
import { useUser } from "../../hooks/user";
import HistorialPerfilUsuario from "../../Components/HistorialPerfilUsuario";
import SideBar from "@/Components/SideBar";
export default function Perfilusuario() {
  //.. Estados para el lector de codigo QR

  const [decodedText, setDecodedText] = useState(null);
  const [decodedResult, setDecodedResult] = useState(null);

  const onNewScanResult = (text, result) => {
    setDecodedText(text);
    setDecodedResult(result);
  };

  //..Estados para Fomulario

  const [errorsForm, setErrorsForm] = useState({});
  const [formUsuario, setFormUsuario] = useState({
    name: "",
    lastName: "",
    phone: "",
    user_linkedin: "",
    birthDate: "",
    profession: "",
  });
  console.log(formUsuario)
  const [infoUsuario, setInfoUsuario] = useState();

  useEffect(() => {
    async function fetchData() {
      const usuario = window.localStorage.getItem("user");
      const usuarioJSON = usuario && JSON.parse(usuario);
      const api = usuarioJSON && await axios(
        "https://pf-backend-mercadosolidario-production.up.railway.app/user/" +
          usuarioJSON.id
      );

      api && setInfoUsuario(api.data);
      console.log("actualizando");
      api && setFormUsuario({
        name: api.data.name,
        lastName: api.data.lastName,
        phone: api.data.phone,
        user_linkedin: api.data.user_linkedin,
        birthDate: api.data.birthDate,
        profession: api.data.profession,
      });
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
    console.log(formUsuario);
    setFormUsuario({
      ...formUsuario,
      [e.target.name]: e.target.value,
    });
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
  const handlerSubmit = async () => {
    setErrorsForm(validate(formUsuario));
    const info = await axios.put(
      "https://pf-backend-mercadosolidario-production.up.railway.app/user/update/" +
        user.id,
      formUsuario
    );
    const data = info.data;
    setFormUsuario({
      name: "",
      lastName: "",
      phone: "",
      user_linkedin: "",
      birthDate: "",
      profession: "",
    });
    console.log(info);
    return data;
  };

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
    { value: "Otros", label: "Otros", checked: false }
];

  return (
    <div>
      <SideBar/>
      {/*Cambiar info */}
      <h2 className="text-center font-semibold text-2xl mt-10">
        Editar datos de Perfil
      </h2>
      <form
        className="grid gap-4 mt-16 justify-center items-center"
        onSubmit={(el) => handlerSubmit(el)}
      >
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
            required
          />
          {errorsForm.phone ? <p>{errorsForm.phone}</p> : ""}
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Linkedin</label>
          <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            name="user_linkedin"
            type="url"
            value={formUsuario.user_linkedin}
            onChange={formHandler}
            required
          />
          {errorsForm.phone ? <label>{errorsForm.phone}</label> : null}
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Fecha de Nacimiento</label>
          <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="date"
            value={formUsuario.birthDate}
            name="birthDate"
            onChange={formHandler}
            required
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
          {profesiones.map(item => <option value={item.value} key={item.label}>{item.label}</option>)}
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
