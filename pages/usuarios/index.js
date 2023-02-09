import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BsChevronDown,
  BsChevronUp,
  BsFunnelFill,
  BsSearch,
  BsX,
} from "react-icons/bs";
import Link from "next/link";
import CardUser from "../../Components/CardUser";

function Products({ data }) {
  //..Estados Globales...//
  const [provinceFilter, setProvinceFilter] = useState([]); //  Estado para filtrado de provincias.
  const [profesionFilter, setProfesionFilter] = useState([]); //  Estado para filtrado de Categorias.
  const [insigniasFilter, setInsigniasFilter] = useState([]); //  Estado para filtrado de Donaciones.
  const [order, setOrder] = useState("asc"); //  Estado para la dirección de ordenamiento.
  const [limit, setLimit] = useState(6); // Estado para el limite de paginado Infinity Scroll.
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la Searchbar.
  const [search, setSearch] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const provinces = [
    {
      id: "Provincias",
      name: "Provincias",
      options: [
        {
          value: "BuenosAires",
          label: "Buenos Aires",
          checked: provinceFilter.includes("BuenosAires") ? true : false,
        },
        {
          value: "Catamarca",
          label: "Catamarca",
          checked: provinceFilter.includes("Catamarca") ? true : false,
        },
        {
          value: "Chaco",
          label: "Chaco",
          checked: provinceFilter.includes("Chaco") ? true : false,
        },
        {
          value: "Chubut",
          label: "Chubut",
          checked: provinceFilter.includes("Chubut") ? true : false,
        },
        {
          value: "Cordoba",
          label: "Córdoba",
          checked: provinceFilter.includes("Cordoba") ? true : false,
        },
        {
          value: "Corrientes",
          label: "Corrientes",
          checked: provinceFilter.includes("Corrientes") ? true : false,
        },
        {
          value: "EntreRios",
          label: "Entre Ríos",
          checked: provinceFilter.includes("EntreRios") ? true : false,
        },
        {
          value: "Formosa",
          label: "Formosa",
          checked: provinceFilter.includes("Formosa") ? true : false,
        },
        {
          value: "Jujuy",
          label: "Jujuy",
          checked: provinceFilter.includes("Jujuy") ? true : false,
        },
        {
          value: "LaPampa",
          label: "La Pampa",
          checked: provinceFilter.includes("LaPampa") ? true : false,
        },
        {
          value: "LaRioja",
          label: "La Rioja",
          checked: provinceFilter.includes("LaRioja") ? true : false,
        },
        {
          value: "Mendoza",
          label: "Mendoza",
          checked: provinceFilter.includes("Mendoza") ? true : false,
        },
        {
          value: "Misiones",
          label: "Misiones",
          checked: provinceFilter.includes("Misiones") ? true : false,
        },
        {
          value: "Neuquen",
          label: "Neuquén",
          checked: provinceFilter.includes("Neuquen") ? true : false,
        },
        {
          value: "RioNegro",
          label: "Río Negro",
          checked: provinceFilter.includes("RioNegro") ? true : false,
        },
        {
          value: "Salta",
          label: "Salta",
          checked: provinceFilter.includes("Salta") ? true : false,
        },
        {
          value: "SanJuan",
          label: "San Juan",
          checked: provinceFilter.includes("SanJuan") ? true : false,
        },
        {
          value: "SanLuis",
          label: "San Luis",
          checked: provinceFilter.includes("SanLuis") ? true : false,
        },
        {
          value: "SantaCruz",
          label: "Santa Cruz",
          checked: provinceFilter.includes("SantaCruz") ? true : false,
        },
        {
          value: "SantaFe",
          label: "Santa Fé",
          checked: provinceFilter.includes("SantaFe") ? true : false,
        },
        {
          value: "SantiagoDelEstero",
          label: "Santiago del Estero",
          checked: provinceFilter.includes("SantiagoDelEstero") ? true : false,
        },
        {
          value: "TierraDelFuego",
          label: "Tierra del Fuego",
          checked: provinceFilter.includes("TierraDelFuego") ? true : false,
        },
        {
          value: "Tucuman",
          label: "Tucuman",
          checked: provinceFilter.includes("Tucuman") ? true : false,
        },
      ],
    },
  ];

  const profesiones = [
    {
      id: "Profesiones",
      name: "Profesiones",
      options: [
        {
          value: "Medico",
          label: "Medico",
          checked: profesionFilter.includes("Medico"),
        },
        {
          value: "Ingeniero",
          label: "Ingeniero",
          checked: profesionFilter.includes(""),
        },
        {
          value: "Profesor",
          label: "Profesor",
          checked: profesionFilter.includes("Profesor"),
        },
        {
          value: "Abogado",
          label: "Abogado",
          checked: profesionFilter.includes("Abogado"),
        },
        {
          value: "Contador",
          label: "Contador",
          checked: profesionFilter.includes("Contador"),
        },
        {
          value: "Enfermero",
          label: "Enfermero",
          checked: profesionFilter.includes("Enfermero"),
        },
        {
          value: "Arquitecto",
          label: "Arquitecto",
          checked: profesionFilter.includes("Arquitecto"),
        },
        {
          value: "Economista",
          label: "Economista",
          checked: profesionFilter.includes("Economista"),
        },
        {
          value: "Dentista",
          label: "Dentista",
          checked: profesionFilter.includes("Dentista"),
        },
        {
          value: "Veterinario",
          label: "Veterinario",
          checked: profesionFilter.includes("Veterinario"),
        },
        {
          value: "Psicologo",
          label: "Psicologo",
          checked: profesionFilter.includes("Psicologo"),
        },
        {
          value: "Farmaceutico",
          label: "Farmaceutico",
          checked: profesionFilter.includes("Farmaceutico"),
        },
        {
          value: "Cirujano",
          label: "Cirujano",
          checked: profesionFilter.includes("Cirujano"),
        },
        {
          value: "Optometrista",
          label: "Optometrista",
          checked: profesionFilter.includes("Optometrista"),
        },
        {
          value: "Entretenimiento",
          label: "Entretenimiento",
          checked: profesionFilter.includes("Entretenimiento"),
        },
        {
          value: "Fisioterapeuta",
          label: "Fisioterapeuta",
          checked: profesionFilter.includes("Fisioterapeuta"),
        },
        {
          value: "TerapeutaDelHabla",
          label: "TerapeutaDelHabla",
          checked: profesionFilter.includes("TerapeutaDelHabla"),
        },
        {
          value: "TrabajadorSocial",
          label: "TrabajadorSocial",
          checked: profesionFilter.includes("TrabajadorSocial"),
        },
        {
          value: "Policia",
          label: "Policia",
          checked: profesionFilter.includes("Policia"),
        },
        {
          value: "Bombero",
          label: "Bombero",
          checked: profesionFilter.includes("Bombero"),
        },
        {
          value: "Bombero",
          label: "Bombero",
          checked: profesionFilter.includes("Bombero"),
        },
        {
          value: "Militar",
          label: "Militar",
          checked: profesionFilter.includes("Militar"),
        },
        {
          value: "Otros",
          label: "Otros",
          checked: profesionFilter.includes("Otros"),
        },
      ],
    },
  ];

  const insignias = [
    {
      id: "Insignias",
      name: "Insignias",
      options: [
        {
          value: "participacion",
          label: "Participacion",
          checked: insigniasFilter.includes("participacion"),
        },
        {
          value: "servicio",
          label: "Servicio",
          checked: insigniasFilter.includes("servicio"),
        },
        {
          value: "especie",
          label: "Especie",
          checked: insigniasFilter.includes("especie"),
        },
        {
          value: "dinero",
          label: "Dinero",
          checked: insigniasFilter.includes("dinero"),
        },
      ],
    },
  ];

  //.. Filtrar data Provincias..//
  let filteredData = data.filter((item) => {
    //.. Filtramos "data".
    if (!provinceFilter.length) return true; //..  Si "!provinceFilter.length" ), devuelve "true" para todos los elementos en "data", y no se aplica ningún filtro adicional.
    return provinceFilter.includes(item.province); //.. //.. SI no está vacío,  se devuelve "true" y evalua la condicion.
  });
  //.. Entonces, filteredData" contiene solo aquellos elementos de "data" cuya "province" coincide con alguno de los valores en "provinceFilter".

  //.. Filtrar data Profesiones..//
  filteredData = filteredData.filter((item) => {
    if (!profesionFilter.length) return true;
    return profesionFilter.includes(item.profession);
  });

  //.. Filtrar data Insignias..//
  filteredData = filteredData.filter((item) => {
    if (!insigniasFilter.length) return true;
    return insigniasFilter.includes(item.type_of_insignia);
  });

  //.. Filtrar data Searchbar..//
  filteredData = filteredData.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //..Filtrar data asc-desc..//

  filteredData =
    order === "asc"
      ? filteredData.sort((a, b) => (a.name > b.name ? 1 : -1))
      : filteredData.sort((a, b) => (b.name > a.name ? 1 : -1));

  //..handler Pronvincias..//
  const handleProvinceFilter = (event) => {
    //..Se toma un evento como argumento.
    const { value } = event.target; //.. Se extrae su valor asociado.(valor de la provincia seleccionada)
    const newProvinceFilter = [...provinceFilter]; //.. Se crea una nueva variable utilizando una copia de la existente para no modificar la original.
    if (newProvinceFilter.includes(value)) {
      //Si el valor seleccionado está incluido en la variable :
      newProvinceFilter.splice(newProvinceFilter.indexOf(value), 1); //se elimina utilizando el método "splice()"
    } else {
      //.. Se hace mas que todo para permitir que el user seleccione y deseleccione el tipo de filtro en la lista.
      newProvinceFilter.push(value); //..De lo contrario, se agrega al final usando el método "push()".
    }
    setProvinceFilter(newProvinceFilter); //.. Seteamos la variable que provocará un re-render de la aplicación y aplicará los filtros actualizados. :D
  };

  //..handler categorias..//
  const handleProfesionFilter = (event) => {
    const { value } = event.target;
    const newProfesionFilter = [...profesionFilter];
    if (newProfesionFilter.includes(value)) {
      newProfesionFilter.splice(newProfesionFilter.indexOf(value), 1);
    } else {
      newProfesionFilter.push(value);
    }
    setProfesionFilter(newProfesionFilter);
  };

  //..handler Donaciones..//
  const handleInsigniasFilter = (event) => {
    const { value } = event.target;
    const newInsigniasFilter = [...insigniasFilter];
    if (newInsigniasFilter.includes(value)) {
      newInsigniasFilter.splice(newInsigniasFilter.indexOf(value), 1);
    } else {
      newInsigniasFilter.push(value);
    }
    setInsigniasFilter(newInsigniasFilter);
  };
  //..Handler limit infinity Srcoll..//
  const handleInfiniteScroll = () => {
    setLimit(limit + 6);
  };

  //..Handler order asc - desc.. //
  const handleOrder = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  //..Handler de barra de busqueda..//

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const offSearch = (e) => {
    if (e.target === e.currentTarget) setSearch(false);
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <BsX className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Profesiones</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    ></ul>

                    {provinces.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        onChange={handleProvinceFilter}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                      className="bi bi-dash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                      className="bi bi-plus"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      onChange={option.onChange}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                    {profesiones.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        onChange={handleProfesionFilter}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                      className="bi bi-dash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                      className="bi bi-plus"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      onChange={option.onChange}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                    {insignias.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        onChange={handleInsigniasFilter}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                      className="bi bi-dash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                      className="bi bi-plus"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      onChange={option.onChange}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-gray-200 pt-12 pb-6 justify-end">
            {/* -----------Todo DOM - Nada de logica-----------*/}
            <div className="flex items-center flex-wrap justify-center gap-4">
              {/*------------ Menu de ordenamientos ---------*/}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    {/* Botón para cambiar la dirección de ordenamiento */}
                    <button onClick={handleOrder}>
                      {order === "asc"
                        ? "Ordenar descendentemente"
                        : "Ordenar ascendentemente"}
                    </button>
                    {order === "asc" ? (
                      <BsChevronDown
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <BsChevronUp
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                  </Menu.Button>
                </div>
              </Menu>

              {/* ---------------SearchBar-------------- */}
              <div className=" text-gray-400 hover:text-gray-500">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Buscar iniciativa"
                    onChange={handleSearch}
                    className="rounded"
                  />
                  <BsSearch
                    id="icon"
                    className={`text-gray-400 hover:text-gray-500 h-5 w-5 cursor-pointer absolute top top-1/2 right-6 transform -translate-y-1/2 ${
                      search ? "visible" : "hidden"
                    }`}
                  ></BsSearch>
                </div>
              </div>
              {/* --------------Filtros Mobile-------------- */}
              <button
                type="button"
                className=" text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filtrar por:</span>
                <BsFunnelFill className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Provincias
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 justify-start items-start">
              <form className="hidden lg:block">
                <h3 className="sr-only">Categorias</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                ></ul>

                {/*------------------ Filters --------------*/}
                {provinces.map((section) => (
                  <Disclosure
                    as="div"
                    onChange={handleProvinceFilter}
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-dash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {profesiones.map((section) => (
                  <Disclosure
                    as="div"
                    onChange={handleProfesionFilter}
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-dash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {insignias.map((section) => (
                  <Disclosure
                    as="div"
                    onChange={handleInsigniasFilter}
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-dash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div
                className="grid w-full col-span-3 grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-4 "
                id="infiniteScroll"
              >
                {/*------- Scroll infinito y mapeado de cards -------*/}
                {filteredData
                  .slice(0, limit)
                  .sort((a, b) => {
                    if (order === "asc") return a.name.localeCompare(b.name);
                    return b.name.localeCompare(a.name);
                  })
                  .map((item) => (
                    <CardUser
                      key={item.id}
                      name={item.name}
                      lastName={item.lastName}
                      phone={item.phone}
                      user_linkedin={item.user_linkedin}
                      profession={item.profession}
                      province={item.province}
                      email={item.email}
                      image={item.image}
                      type_of_insignia={item.type_of_insignia}
                    />
                  ))}
                <div className="w-full flex sm:col-span-2 xl:col-span-3 m-auto my-8">
                  {/*------- Cargar mas Cards-------*/}

                  {limit < filteredData.length ? (
                    <button
                      className="w-full m-auto"
                      onClick={handleInfiniteScroll}
                    >
                      Mostrar más
                    </button>
                  ) : (
                    <p className="w-full text-center m-auto">
                      No hay más cartas para mostrar
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Products;
export function getStaticProps() {
  return fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/user"
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
