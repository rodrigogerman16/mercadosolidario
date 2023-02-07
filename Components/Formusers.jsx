"use client";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Alert from "./Alert";
import profile from "../Assets/profile.png"

function Validate(input) {
  let errors = {};
  if (input.name.length < 3 || input.name.length > 15) {
    errors.name = "Al menos 3 Caracteres";
  }
  if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
    errors.name = "No puede contener numeros o caracteres especiales";
  }
  if (input.lastName.length < 3 || input.lastName.length > 15) {
    errors.lastName = "Al menos 3 Caracteres";
  }
  if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.lastName)) {
    errors.lastName = "No puede contener numeros o caracteres especiales";
  }
  if (input.phone.length < 8) {
    errors.phone = "Ingrese su Telefono";
  }
  if (!input.profession){
    errors.profession = "Seleccione una profesion"
  }
  if (input.cuil.length !== 11) {
    errors.cuil = "Ingrese su CUIL";
  }
  if (input.user_linkedin.length === 0) {
    errors.user_linkedin = "Ingrese su Linkedin";
  }
  //if (input.user_linkedin.includes("www.linkedin.com/in") === false) {
  //  errors.user_linkedin = "Ingrese bien la direccion URL";
  //}
  return errors;
}

export default function Formusers(props) {
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

  const { data: session } = useSession();

  const postUser = async (props) => {
    let info = await axios.post(
      `https://pf-backend-mercadosolidario-production.up.railway.app/user/newuser`,
      props
    );

    const aux = {
      name: info.data.name,
      lastName: info.data.lastName,
      email: info.data.email,
      type_of_user: info.data.type_of_user,
      id: info.data.id,
      cuil: info.data.cuil,
      phone: info.data.phone,
      user_linkedin: info.data.user_linkedin,
      image: info.data.image,
      profession: info.data.profession
    };

    window.localStorage.setItem("user", JSON.stringify(aux));
    return console.log(info.data, aux);
  };
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    phone: "",
    profession: "",
    cuil: "",
    user_linkedin: "",
  });
  console.log(input)

  //console.log(input.user_linkedin.includes("www.linkedin.com/in"))

  const [errors, setErrors] = useState({});

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
        input.phone !== "" &&
        input.profession !== "" &&
        input.cuil !== "" &&
        input.user_linkedin !== ""
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

        console.log(data.secure_url)

        const user = {
          name: input.name,
          lastName: input.lastName,
          phone: input.phone,
          email: props.email || session.user.email,
          password: props.password || "asdasdasd",
          type_of_user: props.type_of_user || "user",
          profession: input.profession,
          cuil: input.cuil,
          user_linkedin: input.user_linkedin,
          image: data.secure_url
        };
        console.log(user)
        postUser(user).then(() => {
          axios.post('https://pf-backend-mercadosolidario-production.up.railway.app/mailer/email', { email: user.email })
          setInput({
            name: "",
            lastName: "",
            phone: "",
            cuil: "",
            user_linkedin: "",
          });
          Alert({ title: 'Registro', text: 'Usuario creado con éxito!', icon: 'success' })
          window.location.href = '../';
        }).catch(error => {
          Alert({ title: 'Registro', text: 'Hubo un error al crear el usuario, si el error persiste, vuelve a intentarlo mas tarde.', icon: 'error' })
        });

      } else {
        Alert({ title: 'Registro', text: 'Hay datos incorrectos o sin completar!', icon: 'error' })
      }
    } catch (error) {
      Alert({ title: 'Registro', text: error, icon: 'error' })
    }
  }

  //console.log(input);

  return (
    <form className="grid justify-center items-center gap-4" onSubmit={(el) => handleSubmit(el, input)}>
      <div>
        <label>Imagen de Perfil (Opcional)</label>
        <input
          className="text-sm"
          type="file"
          name="file"
        />
      </div>
      <div className="">
        <label className="text-sm">Nombre</label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.name}
          name={"name"}
          onChange={(el) => handleChange(el)}
          placeholder="Nombre"
        />
        {errors.name ? <label>{errors.name}</label> : null}
      </div>
      <div className="">
        <label className="text-sm">Apellido</label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.lastName}
          name="lastName"
          onChange={(el) => handleChange(el)}
          placeholder="Apellido"
        />
        {errors.lastName ? <label>{errors.lastName}</label> : null}
      </div>
      <div>
        <div className="">
          <label className="text-sm">Telefono</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="text"
            value={input.phone}
            name="phone"
            onChange={(el) => handleChange(el)}
            placeholder="+54 011 1234567"
          />
          {errors.phone ? <label>{errors.phone}</label> : null}
        </div>
      </div>
      <div className="">
        <label className="text-sm">Profesion</label>
        <select
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="select"
          value={input.profession}
          name="profession"
          onChange={(el) => handleChange(el)}
        >
          {profesiones.map(item => <option value={item.value} key={item.label}>{item.label}</option>)}
        </select>
        {errors.profession ? <label>{errors.profession}</label> : null}
      </div>
      <div className="">
        <label className="text-sm">Cuil</label>
        <input
          className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
          type="text"
          value={input.cuil}
          name="cuil"
          onChange={(el) => handleChange(el)}
          placeholder="12345678901"
        />
        {errors.cuil ? <label>{errors.cuil}</label> : null}
      </div>
      <div>
        <div className="">
          <label className="text-sm">Linkedin</label>
          <input
            className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
            type="text"
            value={input.user_linkedin}
            name="user_linkedin"
            onChange={(el) => handleChange(el)}
            placeholder="https://www.linkedin.com/in/ejemplo"
          />
          {errors.user_linkedin ? (
            <label>{errors.user_linkedin}</label>
          ) : null}
        </div>
      </div>
      <input
        type="submit"
        value={"Registrarse"}
        className="w-full px-8 py-3 font-semibold  bg-black text-white hover:bg-zinc-800 transition-colors rounded my-4 cursor-pointer"
      />
    </form>
  );
}
