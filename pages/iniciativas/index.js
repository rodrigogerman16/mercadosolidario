"use client";
import Card from "../../Components/Card";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Paginate from "@/Components/Paginate";
const Initiative = ({ data }) => {
  let [info, setInfo] = useState(data);
  const [input, setInput] = useState();
  const [order, setOrder] = useState();

  const [currentPage, setCurrentPage] = React.useState(1);
  const publicationsPerPage = 8;
  const indexLastPublications = currentPage * publicationsPerPage;
  const indexFirstPublications = indexLastPublications - publicationsPerPage;
  const infoo = info.slice(indexFirstPublications, indexLastPublications)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterHandler = (e) => {
    const value = e.target.name;
    console.log(value);
    const info =
      value === "efectivo"
        ? data.filter((e) => e.type_of_donor === "EFECTIVO")
        : data.filter((e) => e.type_of_donor === "EN_ESPECIE");
    console.log(data);
    setInfo(value === "all" ? data : info);
    console.log(data);
  };

  const [hydrated, setHydrated] = React.useState(false);
  useEffect(() => {
    setHydrated(true);
    setInfo(info);
  }, [info]);
  if (!hydrated) {
    return null;
  }

  const filterProvinces = (e) => {

    const value = e.target.value;
    console.log(value);
    const filtros = data.filter((posts) => posts.location === value);
    setInfo(value === "all" ? data : filtros);
    setCurrentPage(1)
  };

  const filtroInput = async (e) => {
    setInput(e.target.value);
    const filterSearch = !input
      ? data
      : await data.filter((dato) =>
        dato.title.toLowerCase().includes(input.toLowerCase())
      );
    setInfo(filterSearch);
    console.log(e.target.value);
    setCurrentPage(1)
  };

  const orderHandler = async (e) => {
    if (e.target.value === "asc") {
      const order = await infoo.sort((a, b) => a.title.localeCompare(b.title));
      console.log(order);
      setInfo(order);
    } else if (e.target.value === "desc") {
      const order = await infoo.sort((a, b) => b.title.localeCompare(a.title));
      console.log(order);
      setInfo(order);
    } else if (e.target.value === "all") {
      const order = await infoo;
      setInfo(order);
    }
    setCurrentPage(1)
  };

  const Provincias = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fé",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucuman",
  ];

  console.log(info)

  return (
    <div class="font-hind text-lg">
      <div class="flex">
        <nav className="flex flex-col gap-8 bg-pink-300 py-4 justyfy-center items-center w-64 rounded">
          <div class="flex flex-col justyfy-center items-center font-hind mt-24">
            <label>Buscar</label>
          <input class="w-11/12 border border-gray-900 rounded" onChange={(e) => filtroInput(e)} />
          </div>
          <div>
            <ul class="flex flex-col items-center justify-between h-32">
              <li class="flex flex-col justyfy-center items-center cursor-pointer border border-gray-900 rounded h-8 w-36">
                <a onClick={(e) => filterHandler(e)} name="all">
                  All
                </a>
              </li>
              <li class="flex flex-col justyfy-center items-center cursor-pointer border border-gray-900 rounded h-8 w-36">
                <a onClick={(e) => filterHandler(e)} name="efectivo">
                  Efectivo
                </a>
              </li>
              <li class="flex flex-col justyfy-center items-center cursor-pointer border border-gray-900 rounded h-8 w-36">
                {" "}
                <a onClick={(e) => filterHandler(e)} name="especie">
                  En Especie
                </a>{" "}
              </li>
            </ul>
          </div>
          <div class="flex flex-col justyfy-center items-center gap-2">
            <h2>Provincia</h2>
            <select
            class="w-11/12 h-8 border border-gray-900 rounded"
              onChange={(e) => filterProvinces(e)}
              className="
          form-select appearance-none
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
            >
              <option value="all">Todos</option>
              {Provincias.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
          <div class="flex flex-col justyfy-center items-center gap-2">
            <select class="w-48 h-8" onChange={(e) => orderHandler(e)}>
              <option value="all">All</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>
        </nav>
        <div>
        </div>
        <div className="w-full grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4">
          {info.length !== 0
            ? infoo.map((e) => (
              <Link key={e.id} href={`/iniciativas/${e.id}`}>
                {" "}
                <Card
                  key={e.id}
                  title={e.title}
                  description={e.description}
                  location={e.location}
                />{" "}
              </Link>
            ))
            : "No hay cartas para mostrar"}
        </div>
      </div>
      <Paginate
        publicationsPerPage={publicationsPerPage}
        allPublications={info.length}
        paginado={paginado}
      />
    </div>
  );
};
export function getStaticProps() {
  return fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/posts"
  )
    .then((res) => res.json())
    .then((data) => {
      return {
        props: {
          data,
        },
      };
    });
}

export default Initiative;
