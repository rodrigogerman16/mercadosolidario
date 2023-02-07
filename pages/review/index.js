import { useRouter } from "next/router";
import axios from "axios";
import React, { useState } from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { useUser } from "@/hooks/user";

function Validate(input) {
  let errors = {};
  if (!input.review) {
    errors.review = "Deje su Reseña por favor";
  }
  return errors;
}

export default function Review() {
  const user = useUser();
  const userObject = user && JSON.parse(user)
  const router = useRouter();
  const [rating, setRating] = useState(1);
  const [input, setInput] = useState({
    rating: rating,
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

  function handlerRating(value) {
    setRating(value)
    setInput({
      ...input,
      rating: value
    });
    setErrors(
      Validate({
        ...input,
      })
    );
  }

  const sendReview = async (props) => {
    let info = await axios.post(
      `https://pf-backend-mercadosolidario-production.up.railway.app/reviews/newreview`,
      props
    );
    return console.log(info.data);
  };

  console.log(userObject)

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
        let aux = {
          id: userObject.id,
          puntuacion: input.rating.toString(),
          comment: input.review,
        }
        console.log(aux)
        sendReview(aux)
        alert('Gracias por dejar tu Reseña')
        setInput({
          rating: "",
          review: "",
        });
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    }
  };


  console.log(input);

  return (
    <div class="w-full">
      <div class="mt-4">
        <span class="block mb-2 text-md font-semibold tracking-widest text-center uppercase dark:text-pink-400">
          Review
        </span>
        <h2 class="text-3xl font-bold text-center">Cual es tu experiencia en Mercado Solidario?</h2>
        <div class="text-center mb-10">
          <span class="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
          <span class="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
          <span class="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
        </div>
      </div>
      <form onSubmit={(el) => handleSubmit(el)}>
        <div class="flex flex-col justyfy-center items-center">
          <div class="flex flex-col justyfy-center items-center space-y-4 w-full">
            <div class="items-start mt-3">
              <label class="block text-md text-bold">Puntuacion:</label>
              <div class="rounded mt-2 pr-46 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200">
              <Rating
              className="text-yellow-300"
                emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                initialRating={rating}
                onClick={(el) => handlerRating(el)}
              />
              </div>
              {/* <input
              class="rounded w-full p-4 mt-2 pr-46 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
              onChange={(el) => handleChange(el)}
              placeholder="1"
              type="number"
              max={5}
              min={1}
              name="rating"
              value={input.rating}
              style={{ height: 60, width: 350 }}
            /> */}
            </div>
          </div>
          <div class="flex flex-col justyfy-center items-center space-y-4 w-full">
            <div class="items-start mt-3">
              <label class="block text-md text-bold">Reseña:</label>
              <textarea
                class="flex flex-col rounded w-full p-4 mt-2 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200"
                placeholder="Deja un comentario:"
                onChange={(el) => handleChange(el)}
                cols="30"
                rows="10"
                name="review"
                value={input.review}
                style={{ height: 140, width: 350 }}
              ></textarea>
              {errors.review && <span>{errors.review}</span>}
            </div>
            <div class="mt-5 items-center">
              <input class="w-64  px-8 py-3 font-semibold  bg-black text-white hover:bg-zinc-800 transition-colors rounded" type="submit" value="Enviar" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
