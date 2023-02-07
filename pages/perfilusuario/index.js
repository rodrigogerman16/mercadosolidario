import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import axios from "axios";
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
    cuil: "",
    user_linkedin: "",
    birthDate: "",
    profession: "",
  });

  const formHandler = (e) => {
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
    // if (formUsuario.cuil.length < 8) {
    //   errors.cuil = "Cuil incorrecto";
    // }

    // if (!formUsuario.user_linkedin.includes("linkedin.com/in")) {
    //   errors.user_linkedin = "No es un link de linkedin ";
    // }

    // if (formUsuario.birthDate.includes(letras)) {
    //   errors.birthDate = "No puede tener letras";
    // }

    // if (formUsuario.profession.includes(numeros)) {
    //   errors.profession = "no puede contener numeros";
    // }

    return errors;
  };
  const handlerSubmit = async () => {
    setErrorsForm(validate(formUsuario));
    const info = await axios.put(
      "https://pf-backend-mercadosolidario-production.up.railway.app/user/update/63d66dc72a682c3359dc5c92",
      formUsuario
    );
    const data = info.data;
    setFormUsuario({
      name: "",
      lastName: "",
      phone: "",
      cuil: "",
      user_linkedin: "",
      birthDate: "",
      profession: "",
    });
    console.log(info);
    return data;
  };

  return (
    <div className="w-full max-w-md p-4 rounded-md sm:p-8 m-auto min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">
      <span className="block mb-2 text-xs font-semibold tracking-widest text-center uppercase dark:text-pink-400">
        Editar mi Perfil
      </span>
      <span>Nombre:</span>
      <input
        name="name"
        value={formUsuario.name}
        onChange={formHandler}
        required
      />
      {errorsForm.name ? <p>{errorsForm.name}</p> : ""}
      <br />
      <span>Apellido:</span>
      <input
        name="lastName"
        value={formUsuario.lastName}
        onChange={formHandler}
        required
      />
      {errorsForm.lastName ? <p>{errorsForm.lastName}</p> : ""}
      <br />
      <span>Telefono:</span>
      <input
        type="tel"
        value={formUsuario.phone}
        name="phone"
        onChange={formHandler}
        required
      />
      {errorsForm.phone ? <p>{errorsForm.phone}</p> : ""}
      <br />
      <span>Cuil:</span>
      <input
        name="cuil"
        type="number"
        value={formUsuario.cuil}
        onChange={formHandler}
        required
      />
      {/* {errorsForm.cuil ? <p>{errorsForm.cuil}</p> : ""} */}
      <br />
      <span>Linkedin:</span>
      <input
        name="user_linkedin"
        type="url"
        value={formUsuario.user_linkedin}
        onChange={formHandler}
        required
      />
      {/* {errorsForm.user_linkedin ? <p>{errorsForm.user_linkedin}</p> : ""} */}
      <br />
      <span>Cumpleaños:</span>
      <input
        type="date"
        value={formUsuario.birthDate}
        name="birthDate"
        onChange={formHandler}
        required
      />
      {/* {errorsForm.birthDate ? <p>{errorsForm.birthDate}</p> : ""} */}
      <br />
      <span>Profesion:</span>
      <input
        name="profession"
        value={formUsuario.profession}
        onChange={formHandler}
        required
      />
      {/* {errorsForm.profession ? <p>{errorsForm.profession}</p> : ""} */}
      <button
        onClick={handlerSubmit}
        // disabled={
        //   !formUsuario.name ||
        //   formUsuario.name.length <= 2 ||
        //   !formUsuario.lastName ||
        //   formUsuario.name.length <= 2 ||
        //   !formUsuario.phone
        // }
      >
        Enviar
      </button>

      {/* Codigo QR */}
      <div>
        <h1>Escanea aqui tu QR</h1>
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </div>
    </div>
  );
}
