import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../hooks/user";
import HistorialPerfilUsuario from "../../Components/HistorialPerfilUsuario";
export default function Perfilusuario() {
  const [visible, setVisible] = useState(false);
  const [errorsForm, setErrorsForm] = useState({});
  const [formUsuario, setFormUsuario] = useState({
    name: "",
    lastName: "",
    phone: "",
    user_linkedin: "",
    birthDate: "",
    profession: "",
  });
  const [infoUsuario, setInfoUsuario] = useState()

  useEffect(() => {
    async function fetchData(){
      const usuario = window.localStorage.getItem("user");
      const usuarioJSON = usuario ? JSON.parse(usuario) : "";
      const api = await axios(
        "https://pf-backend-mercadosolidario-production.up.railway.app/user/" +
          usuarioJSON.id
      );

      setInfoUsuario(api.data);
      console.log('actualizando');
      setFormUsuario({
        name: api.data.name,
        lastName: api.data.lastName,
        phone: api.data.phone,
        user_linkedin: api.data.user_linkedin,
        birthDate: api.data.birthDate,
        profession: api.data.profession,
      });
    }

    fetchData()
  }, [])

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
  return (
    <div>
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
      {errorsForm.lastName ? <p>{errorsForm.lastName}</p> : ``}
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

      <button name={visible} onClick={handlerVisible}>
        Mostrar Historial
      </button>

      {visible == true ? <HistorialPerfilUsuario /> : ""}
    </div>
  );
}
