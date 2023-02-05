import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../Assets/logo-mercado-solidario-sintexto.png";
import axios from "axios";

export default function IniciativasCards({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [iniciatives, setIniciatives] = useState(posts);

  {/*Borrado Logico*/}

  async function handleToggle(post) {
    console.log(post);
    await axios.put(`https://pf-backend-mercadosolidario-production.up.railway.app/posts/${post.id}`, {
      isActive: post.isActive ? false : true,
    });
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = iniciatives.filter((iniciative) =>
    iniciative.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-8">
      <div className=" text-gray-400 hover:text-gray-500 ">
        <div className="w-3/4 text-left">
          <input
            type={"search"}
            id="search"
            className={`rounded-full shadow border-gray-200 bg-gray-100 ml-4 text-black  text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200  
                    `}
            placeholder="Buscar..."
            onChange={handleSearch}
            value={searchTerm}
          ></input>          
        </div>
        {filteredPosts.map((post) => (
            <div className="justify-center mt-8 max-w-sm w-full lg:max-w-full lg:flex" key={post.id}>
              <Image
                className="border-b border-l border-gray-400 lg:border-t lg:border-gray-400 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                src={post.image === "undefined" ? Logo : post.image}
                width={400}
                height={400}
                alt="Imagen de iniciativa"
              />
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal lg:w-3/4">
                <div className="mb-4">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    {post.title}
                  </div>
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
                    <div className="flex">
                      <input
                        onChange={() => handleToggle(post)}
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900">
                        Desactivar/Activar
                      </span>
                    </div>
                  ) : (
                    <div className="flex">
                      <input
                        onChange={() => handleToggle(post)}
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        unchecked
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900">
                        Desactivar/Activar
                      </span>
                    </div>
                  )}
                </label>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
