import Image from "next/image";
import React from "react";
import Logo from "../../../Assets/logo-mercado-solidario-sintexto.png";
import axios from "axios";

export default function IniciativasCards({ posts }) {
  
  async function handleToggle(post){
    console.log(post.id)
    await axios.put(`http://localhost:3001/post/${post.id}`,{
      "isActive": post.isActive ? false : true
    })
    console.log(post)
  }

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-8">
      {posts.map((post) => (
        <div className="justify-center max-w-sm w-full lg:max-w-full lg:flex">
          <Image
            className="border-b border-l border-gray-400 lg:border-t lg:border-gray-400 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            src={post.image === "undefined" ? Logo : post.image}
            width={400}
            height={400}
            alt="Imagen de iniciativa"
          />
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal lg:w-1/2">
            <div className="mb-4">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {post.title}
              </div>
              <p className="text-gray-700 text-base">{post.description}</p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  Fecha de Expiracion: {post.expirationDate}
                </p>
                <p className="text-gray-600">
                  Tipo de Donacion: {post.type_of_help}
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center mr-5 cursor-pointer mt-4 w-fit">
              {post.isActive ? (
                <div className="flex" onClick={( ) =>handleToggle(post)}>
                  <input type="checkbox" value="" className="sr-only peer" checked/>
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    Desactivar/Activar
                  </span>
                </div>
              ):
              (
                <div  className="flex" onClick={handleToggle(post)}>
                  <input type="checkbox" value="" className="sr-only peer" unchecked/>
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    Desactivar/Activar
                  </span>
                </div>
              )
              }
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
