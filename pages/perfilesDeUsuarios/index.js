import React, { Fragment, useEffect, useState } from "react";

import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BsChevronDown,
  BsFunnelFill,
  BsDash,
  BsPlus,
  BsSearch,
  BsX,
} from "react-icons/bs";
import Link from "next/link";
import CardUser from "../../Components/CardUser";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

export default function Products({ data }) {
  //Estados de estilos y generales
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [info, setInfo] = useState();
  const [input, setInput] = useState();

  //Estados de scroll infinito
  const [current, setCurrent] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 3;

  //Estado barra de busqueda
  const [search, setSearch] = useState(false);

  //UseEffect
  useEffect(() => {
    setInfo(data);
  }, []);

  //Handlers de DOM
  const offSearch = (e) => {
    if (e.target === e.currentTarget) setSearch(false);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const fetchData = () => {
    setTimeout(() => {
      setPage(page + 1);
      setCurrent([
        ...current,
        ...info.slice((page - 1) * perPage, page * perPage),
      ]);
      if (page * perPage >= data.length) {
        setHasMore(false);
      }
    }, 300);
  };

  //Handler de barra de busqueda
  const searchHandler = async (e) => {
    const value = e.target.value;
    setInput(value);
    !input
      ? info
      : setCurrent(
          info.filter((e) =>
            e.title.toLowerCase().includes(input.toLowerCase())
          )
        );
  };
  let filtersChecked = [];

  //Handlers de filtros
  const allfilters = (e) => {
    // setCheckedProvincias({
    //   ...checkedProvincias,
    //   [e.target.value]: e.target.checked,
    // });
    console.log(e.target.value);
    // console.log(checkedProvincias);

    if (e.target.checked) {
      const finder = filtersChecked.find((prov) => prov === e.target.value);
      if (!finder) {
        filtersChecked.push(e.target.value);
      }
    }

    if (!e.target.checked) {
      let elementoNoCheckeado = filtersChecked.findIndex(
        (elem) => elem == e.target.value
      );
      if (elementoNoCheckeado >= 0) {
        filtersChecked.splice(elementoNoCheckeado, 1);
      }
    }
    console.log(filtersChecked);
    // if (e.target.checked) {

    //   const value = e.target.value;
    //   const resultProvincia = data.filter(
    //     (e) => e.location.toLowerCase() === value.toLowerCase()
    //   );
    //   setCurrent([ ...resultProvincia]);
    // } else {
    //   const value = e.target.value;
    //   const resultadoLenguaje = datosFiltradosPaises.filter(
    //     (e) => e.location.toLowerCase() !== value.toLowerCase()
    //   );
    //   setCurrent([...resultadoLenguaje]);
    // }
    // if (current.length === 0) {
    //   setCurrent(data);
    // }
  };

  // Aplicacion de Filtros
  const applyFilters = (e) => {
    console.log(info);
    console.log(data);
    const resultFilters = info.filter((post) => {
      for (let checked of filtersChecked) {
        return (
          post.profession.toLowerCase().includes(checked.toLowerCase()) ||
          post.type_of_insignia.toLowerCase().includes(checked.toLowerCase())
        );
      }
    });
    setCurrent(resultFilters);
    console.log(resultFilters);
  };
  console.log(info);
  console.log(data);

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
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    ></ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
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
                                    <BsDash
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsX
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
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

        <button onClick={applyFilters}>Aplicar Filtros</button>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-gray-200 pt-12 pb-6 justify-end">
            {/* -----------Todo DOM - Nada de logica-----------*/}
            <div className="flex items-center">
              {/*------------ Menu de ordenamientos ---------*/}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Ordenamiento
                    <BsChevronDown
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item
                          key={option.name}
                          // onClick={(e) => option.onClick(e)}
                        >
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* ---------------SearchBar-------------- */}
              <div
                className={`h-[100%] w-full z-30 bg-black backdrop-blur-sm bg-opacity-60  top-0 left-0 ${
                  search ? "fixed" : "none"
                }`}
                onClick={offSearch}
              ></div>
              <div className=" text-gray-400 hover:text-gray-500 ">
                <div className="w-full">
                  <input
                    type={"search"}
                    id="search"
                    className={`rounded-full shadow border-gray-200 bg-gray-100 ml-4 text-black  text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200  
                        `}
                    placeholder="Buscar..."
                    onChange={searchHandler}
                  ></input>
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
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
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
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    onChange={allfilters}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          {/* ----------Boton para desplegar filtros------- */}
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
                                  class="bi bi-dash"
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
                                  class="bi bi-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        {/* ---------- Opciones de filtros ------- */}
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
                className="grid w-full col-span-3 grid w-full sm:grid-cols-2 xl:grid-cols-1 gap-4 "
                id="infiniteScroll"
              >
                {/*------- Scroll infinito y mapeado de cards -------*/}
                {console.log(current)}
                <InfiniteScroll
                  dataLength={current && current.length}
                  next={fetchData}
                  hasMore={hasMore}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      {current && current.length !== 0
                        ? "No hay más cartas para mostrar"
                        : "No hay cartas para mostrar"}
                    </p>
                  }
                >
                  <div className="grid w-full col-span-3 grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {current.length !== 0
                      ? current.map((e) => (
                          <Link
                            className="w-full"
                            key={e.id}
                            href={`/iniciativas/${e.id}`}
                          >
                            <CardUser
                              key={e.id}
                              name={e.name}
                              lastName={e.lastName}
                              phone={e.phone}
                              user_linkedin={e.user_linkedin}
                              profession={e.profession}
                              email={e.email}
                              province={e.province}
                            />
                          </Link>
                        ))
                      : "No hay cartas para mostrar"}
                  </div>
                </InfiniteScroll>
                <div className="w-full sm:col-span-2 xl:col-span-3 m-auto my-8"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

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
