import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function Validate(input) {
  let errors = {};
  if (!input.review) {
    errors.review = "Deje su Reseña por favor";
  }
  return errors;
}

export default function Review() {
  const router = useRouter();
  const [input, setInput] = useState({
    rating: "1",
    review: "",
  });

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

  const sendReview = async (props) => {
    let info = await axios.post(
      `https://pf-backend-mercadosolidario-production.up.railway.app/SENDREVIEW?`,
      props
    );
    return console.log(info.data);
  };

  const handleSubmit = async (el) => {
    try {
      el.preventDefault();
      setErrors(
        Validate({
          ...input,
          [el.target.name]: el.target.value,
        })
      );
      if (Object.values(errors).length === 0) {
        //Funcion post al back sendReview(input)
        //alert('Gracias por dejar tu Reseña')
        setInput({
          rating: "",
          review: "",
        });
        //router.push('/')
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(input);

  return (
    <div>
      <form onSubmit={(el) => handleSubmit(el)}>
        <label>Puntuacion:</label>
        <br></br>
        <input
          onChange={(el) => handleChange(el)}
          placeholder="1"
          type="number"
          max={5}
          min={1}
          name="rating"
          value={input.rating}
          style={{ height: 50, width: 200 }}
        />
        <br></br>
        <label>Reseña:</label>
        <br></br>
        <textarea
          placeholder="Deje aqui su Reseña"
          onChange={(el) => handleChange(el)}
          cols="30"
          rows="10"
          name="review"
          value={input.review}
          style={{ height: 100 }}
        ></textarea>
        <br></br>
        {errors.review && <span>{errors.review}</span>}
        <br></br>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
