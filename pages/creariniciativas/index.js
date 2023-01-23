"use client";
import Navbar from "@/Components/Navbar";
import axios from "axios";
import { Input } from "postcss";
import { useState } from "react";

function Validate(input) {
  let errors = {};
  if (input.ongId.length !== 24) {
    errors.ongId = "Ingrese la ID de su ONG";
  }
  if (input.title.length < 5 || input.title.length > 50) {
    errors.title = "Al menos 5 Caracteres";
  }
  if (input.description.length < 5 || input.description.length > 500) {
    errors.description = "Al menos 5 Caracteres";
  }
  if (input.location === '') {
    errors.location = "Ingrese la ubicación"
  }
  return errors;
}

export default function creariniciativa() {
  const [input, setInput] = useState({
    ongId: "",
    title: "",
    description: "",
    location: "",
    efectivo: 'off',
    especie: 'off',
    voluntarios: 'off',
  });

  const [errors, setErrors] = useState({});

  const postIniciatives = async(props) => {
    let info = await axios.post(`http://localhost:3001/posts/newpost`, props);
    return console.log(info.data)
  }

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
  
  function handleCheck(el) {
    if (el.target.checked) {
      setInput({
          ...input,
          [el.target.name]: el.target.value
      });        
    } else if (!el.target.checked) {
      setInput({
        ...input,
        [el.target.name]: 'off'
    }); 
    }
  }

  function handleSubmit(el) {
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
        input.ongId !== "" &&
        input.title !== "" &&
        input.description !== "" &&
        input.location !== ""
        
      ) {
        let post = {
          authorId: input.ongId,
          expirationDate: "2023-01-20T00:00:28.747Z",
          title: input.title,
          description: input.description,
          location: input.location,
          image: "https://messi.png",
          resultsAchieved: "Good results",
          type_of_donor: input.efectivo === 'on' ? "EFECTIVO" : null,
          type_of_volunteer: input.voluntarios === 'on' ? "VOLUNTARIO" : null
        }
        postIniciatives(post);
        setInput({
          ongId: "",
          title: "",
          description: "",
          location: "",
        });
      } else {
        alert("Hay datos incorrectos o sin completar!");
      }
    } catch (error) {
      //console.log(error)
    }
  }

  console.log(input);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Crear Iniciativa</h1>
        <form onSubmit={(el) => handleSubmit(el)}>
          <div>
            <input
              type="text"
              value={input.ongId}
              name={"ongId"}
              onChange={(el) => handleChange(el)}
              placeholder="ID de la ONG"
            />
            <br />
            {errors.ongId ? <label>{errors.ongId}</label> : null}
          </div>
          <div>
            <input
              type="text"
              value={input.title}
              name="title"
              onChange={(el) => handleChange(el)}
              placeholder="Titulo"
            />
            <br />
            {errors.title ? <label>{errors.title}</label> : null}
          </div>
          <div>
            <input
              type="text"
              value={input.description}
              name="description"
              onChange={(el) => handleChange(el)}
              placeholder="Descripción"
            />
            <br />
            {errors.description ? <label>{errors.description}</label> : null}
          </div>
          <div>
            <label>Elige una Ubicación</label>
            <select name="location" onChange={(el) => handleChange(el)}>
              <option value="">--Please choose an option--</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Catamarca">Catamarca</option>
              <option value="Chaco">Chaco</option>
              <option value="Chubut">Chubut</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Corrientes">Corrientes</option>
              <option value="Entre Ríos">Entre Ríos</option>
              <option value="Formosa">Formosa</option>
              <option value="Jujuy">Jujuy</option>
              <option value="La Pampa">La Pampa</option>
              <option value="La Rioja">La Rioja</option>
              <option value="Mendoza">Mendoza</option>
              <option value="Misiones">Misiones</option>
              <option value="Neuquén">Neuquén</option>
              <option value="Río Negro">Río Negro</option>
              <option value="Salta">Salta</option>
              <option value="San Juan">San Juan</option>
              <option value="San Luis">San Luis</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="Santiago del Estero">Santiago del Estero</option>
              <option value="Tierra del Fuego">Tierra del Fuego</option>
              <option value="Tucumán">Tucumán</option>
            </select>
            <br />
            {errors.location ? <label>{errors.location}</label> : null}
          </div>
          <br></br>
          <div>
            <label>Tipo de Ayudas/Donaciones</label>

            <div>
              <input type="checkbox" id="efectivo" name="efectivo" onClick={(el) => handleCheck(el)}/>
              <label>En Efectivo</label>
            </div>

            <div>
              <input type="checkbox" id="especie" name="especie" onClick={(el) => handleCheck(el)}/>
              <label>En Especie</label>
            </div>

            <div>
              <input type="checkbox" id="voluntarios" name="voluntarios" onClick={(el) => handleCheck(el)}/>
              <label>Voluntarios</label>
            </div>
          </div>
          {/* {errors.ayudas ? <label>{errors.ayudas}</label> : null} */}
          <br></br>
          <input type="submit" value={"Publicar"} />
        </form>
      </div>
    </div>
  );
}