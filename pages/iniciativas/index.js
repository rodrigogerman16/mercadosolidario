import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BsChevronDown,
  BsFunnelFill,
  BsDash,
  BsPlus,
  BsGridFill,
  BsX,
} from "react-icons/bs";
import Link from "next/link";
import Card from "../../Components/Card";
const sortOptions = [
  { name: "All", href: "#", current: true },
  { name: "Titulo Asc", href: "#", current: false },
  { name: "Titulo Desc", href: "#", current: false },
  { name: "Fecha Asc", href: "#", current: false },
  { name: "Fecha Desc", href: "#", current: false },
];
const filters = [
  {
    id: "Provincias",
    name: "Provincias",
    options: [
      { value: "Buenos Aires", label: "Buenos Aires", checked: false },
      { value: "Catamarca", label: "Catamarca", checked: false },
      { value: "Chaco", label: "Chaco", checked: false },
      { value: "Córdoba", label: "Córdoba", checked: false },
      { value: "Corrientes", label: "Corrientes", checked: false },
      { value: "Entre Rios", label: "Entre Rios", checked: false },
      { value: "Formosa", label: "Formosa", checked: false },
      { value: "Jujuy", label: "Jujuy", checked: false },
      { value: "La Pampa", label: "La Pampa", checked: false },
      { value: "La Rioja", label: "La Rioja", checked: false },
      { value: "Mendoza", label: "Mendoza", checked: false },
      { value: "Misiones", label: "Misiones", checked: false },
      { value: "Neuquén", label: "Neuquén", checked: false },
      { value: "Rio Negro", label: "Rio Negro", checked: false },
      { value: "Salta", label: "Salta", checked: false },
      { value: "San Juan", label: "San Juan", checked: false },
      { value: "San Luis", label: "San Luis", checked: false },
      { value: "Santa Cruz", label: "Santa Cruz", checked: false },
      { value: "Santa fé", label: "Santa fé", checked: false },
      {
        value: "Santiago del Estero",
        label: "Santiago del Estero",
        checked: false,
      },
      { value: "Tierra Del Fuego", label: "Tierra Del Fuego", checked: false },
      { value: "Tucumán", label: "Tucumán", checked: false },
    ],
  },
  {
    id: "Categorias",
    name: "Categorias",
    options: [
      { value: "Salud", label: "Salud", checked: false },
      { value: "Medicina", label: "Medicina", checked: false },
      { value: "Alimentos", label: "Alimentos", checked: true },
    ],
  },
  {
    id: "Donacion",
    name: "Donacion",
    options: [
      { value: "especie", label: "Especie", checked: false },
      { value: "efectivo", label: "Efectivo", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Products({ data }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [info, setInfo] = useState(data);
  const [input, setInput] = useState();
  const [order, setOrder] = useState();
  const [hydrated, setHydrated] = React.useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  /* 
  ANTERIOR



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

  */

  const filterPaises = (e) => {
    const value = e.target.value;
    const filtros = data.filter((posts) => posts.location === value);
    setInfo(value === "all" ? data : filtros);
    // setCurrentPage(1)
  };

  const filterDonacion = (e) => {
    const value = e.target.name;
    console.log(value);
    const info =
      value === "efectivo"
        ? data.filter((e) => e.type_of_help === "efectivo")
        : data.filter((e) => e.type_of_help === "especie");
    console.log(data);
    setInfo(value === "all" ? data : info);
  };

  const filterInput = async (e) => {
    const value = e.target.value;
    setInput(value);
    const filterSearch = !input
      ? data
      : await data.filter((dato) =>
          dato.title.toLowerCase().includes(input.toLowerCase())
        );
    setInfo(filterSearch);
    console.log(e.target.value);
  };

  const filterOrder = async (e) => {
    const value = e.target.outerText;
    if (value === "Titulo Asc") {
      const order = await info.sort((a, b) => a.title.localeCompare(b.title));
      console.log(order);
      setInfo(order);
    } else if (value === "Titulo Desc") {
      const order = await info.sort((a, b) => b.title.localeCompare(a.title));
      console.log(order);
      setInfo(order);
    } else if (value === "Fecha Asc") {
      const order = await info.sort((a, b) =>
        a.expirationDate.localeCompare(b.expirationDate)
      );
      setInfo(order);
    } else if (value === "Fecha Desc") {
      const order = await info.sort((a, b) =>
        b.expirationDate.localeCompare(a.expirationDate)
      );
      setInfo(order);
    } else if (value === "all") {
      const order = await info;
      setInfo(order);
    }
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
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Iniciativas
            </h1>

            <input
              type={"search"}
              className="rounded shadow"
              placeholder="Buscar..."
              onChange={(e) => filterInput(e)}
            ></input>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
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
                        <Menu.Item key={option.name} value={option.name}>
                          {({ active }) => (
                            <label
                              onClick={(e) => filterOrder(e)}
                              value={option.name}
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
                            </label>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <BsGridFill className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <BsFunnelFill className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                ></ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    value={section.value}
                    className="border-b border-gray-200 py-6"
                    onClick={(e) => filterPaises(e)}
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
                                <BsDash
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <BsX className="h-5 w-5" aria-hidden="true" />
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
                                  onClick={(e) => filterDonacion(e)}
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
              <div className="grid">
                {info.length !== 0
                  ? info.map((e) => (
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
          </section>
        </main>
      </div>
    </div>
  );
}

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
