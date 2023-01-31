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
import Card from "../../Components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

export default function Products({ data }) {
  const [info, setInfo] = useState();
  const [edit, setEdit] = useState();
  const [orden, setOrden] = useState();
  const [input, setInput] = useState();
  const [datosFiltradosPaises, setDatosFiltradosPaises] = useState([]);
  const [checkedPaises, setCheckedPaises] = useState({
    buenosAires: false,
    Catamarca: false,
    Chaco: false,
    Chubut: false,
    Cordoba: false,
    Corrientes: false,
    entreRios: false,
    Formosa: false,
    Jujuy: false,
    laPampa: false,
    laRioja: false,
    Mendoza: false,
    Misiones: false,
    Neuquen: false,
    rioNegro: false,
    Salta: false,
    sanJuan: false,
    sanLuis: false,
    santaCruz: false,
    santaFe: false,
    santiagoDelEstero: false,
    tierraDelFuego: false,
    Tucumán: false,
  });
  const [datosFiltradosCategorias, setDatosFiltradosCategorias] = useState([]);
  const [checkedCategorias, setCheckedCategorias] = useState({
    Alimentacion: false,
    asesoriaLegal: false,
    ayudaARefugiados: false,
    ayudaAAnimales: false,
    apoyoAComunidadesIndigenas: false,
    apoyoALgbt: false,
    apoyoALaMujer: false,
    construccionObras: false,
    cultura: false,
    deportes: false,
    derechosHumanos: false,
    discapacitados: false,
    educacion: false,
    medioAmbiente: false,
    entretenimiento: false,
    gobiernoNoLucro: false,
    materiaPrima: false,
    mediosDeComunicacion: false,
    saludMedicina: false,
    servicioComunitario: false,
    transporte: false,
  });

  let results = data;
  const [datosFiltradosDonaciones, setDatosFiltradosDonaciones] = useState([]);
  const [checkedDonaciones, setCheckedDonaciones] = useState({
    efectivo: false,
    especie: false,
    voluntario: false,
  });

  const handlerDonaciones = (e) => {
    setCheckedDonaciones({
      ...checkedDonaciones,
      [e.target.value]: e.target.checked,
    });
    if (e.target.checked) {
      const value = e.target.value;
      console.log(value);
      const resultadoLenguaje = edit.filter((e) => e.type_of_help === value);
      setDatosFiltradosDonaciones([
        ...datosFiltradosDonaciones,
        ...resultadoLenguaje,
      ]);
    } else {
      const value = e.target.value;
      const resultadoLenguaje = datosFiltradosCategorias.filter(
        (e) => e.type_of_help === value
      );
      setDatosFiltradosDonaciones([...resultadoLenguaje]);
    }
  };

  const handlerCategorias = (e) => {
    setCheckedCategorias({
      ...checkedCategorias,
      [e.target.value]: e.target.checked,
    });

    if (e.target.checked) {
      const value = e.target.value;
      const resultadoLenguaje = edit.filter((e) => e.type_of_help === value);
      setDatosFiltradosCategorias([
        ...datosFiltradosCategorias,
        ...resultadoLenguaje,
      ]);
    } else {
      const value = e.target.value;
      const resultadoLenguaje = datosFiltradosCategorias.filter(
        (e) => e.type_of_help !== value
      );
      setDatosFiltradosCategorias([...resultadoLenguaje]);
    }
  };

  const filterPaises = (e) => {
    setCheckedPaises({
      ...checkedPaises,
      [e.target.value]: e.target.checked,
    });
    console.log(e.target.value);
    if (e.target.checked) {
      const value = e.target.value;
      const resultadoLenguaje = edit.filter(
        (e) => e.location.toLowerCase() === value.toLowerCase()
      );
      setDatosFiltradosPaises([...datosFiltradosPaises, ...resultadoLenguaje]);
      results = datosFiltradosPaises;
    } else {
      const value = e.target.value;
      const resultadoLenguaje = datosFiltradosPaises.filter(
        (e) => e.location.toLowerCase() !== value.toLowerCase()
      );
      setDatosFiltradosPaises([...resultadoLenguaje]);
      results = datosFiltradosPaises;
    }
  };

  const searchHandler = async (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const filterOrder = async (e) => {
    setOrden(e.target.outerText);
    if (orden === "Titulo Desc") {
      results = datosFiltradosPaises.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      edit.sort((a, b) => a.title.localeCompare(b.title));
      console.log("Titulo asc :" + results);
    } else if (orden === "Titulo Asc") {
      results = datosFiltradosPaises.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      edit.sort((a, b) => b.title.localeCompare(a.title));
    }
  };

  const sortOptions = [
    { name: "Titulo Asc", href: "#", current: false, onClick: filterOrder },
    { name: "Titulo Desc", href: "#", current: false, onClick: filterOrder },
    { name: "Fecha Asc", href: "#", current: false, onClick: filterOrder },
    { name: "Fecha Desc", href: "#", current: false, onClick: filterOrder },
  ];

  const filters = [
    {
      id: "Provincias",
      name: "Provincias",
      options: [
        { value: "Buenos Aires", label: "Buenos Aires", checked: false },
        { value: "Catamarca", label: "Catamarca", checked: false },
        { value: "Chaco", label: "Chaco", checked: false },
        { value: "Chubut", label: "Chubut", checked: false },
        { value: "Cordoba", label: "Córdoba", checked: false },
        { value: "Corrientes", label: "Corrientes", checked: false },
        { value: "Entre Rios", label: "Entre Ríos", checked: false },
        { value: "Formosa", label: "Formosa", checked: false },
        { value: "Jujuy", label: "Jujuy", checked: false },
        { value: "La Pampa", label: "La Pampa", checked: false },
        { value: "La Rioja", label: "La Rioja", checked: false },
        { value: "Mendoza", label: "Mendoza", checked: false },
        { value: "Misiones", label: "Misiones", checked: false },
        { value: "Neuquen", label: "Neuquén", checked: false },
        { value: "Rio Negro", label: "Río Negro", checked: false },
        { value: "Salta", label: "Salta", checked: false },
        { value: "San Juan", label: "San Juan", checked: false },
        { value: "San Luis", label: "San Luis", checked: false },
        { value: "Santa Cruz", label: "Santa Cruz", checked: false },
        { value: "Santa Fe", label: "Santa Fé", checked: false },
        {
          value: "Santiago del Estero",
          label: "Santiago del Estero",
          checked: false,
        },
        {
          value: "Tierra del Fuego",
          label: "Tierra del Fuego",
          checked: false,
        },
        { value: "Tucuman", label: "Tucuman", checked: false },
      ],
    },
    {
      id: "Categorias",
      name: "Categorias",
      options: [
        { value: "Alimentacion", label: "Alimentacion", checked: false },
        { value: "Asesoria Legal", label: "Asesoria Legal", checked: false },
        {
          value: "Ayuda_a_refugiados",
          label: "Ayuda_a_refugiados",
          checked: false,
        },
        {
          value: "Ayuda_a_animales",
          label: "Ayuda_a_animales",
          checked: false,
        },
        {
          value: "Apoyo_a_comunidades_indigenas",
          label: "Apoyo_a_comunidades_indigenas",
          checked: false,
        },
        { value: "Apoyo_a_lgbt", label: "Apoyo_a_lgbt", checked: false },
        {
          value: "Apoyo_a_la_mujer",
          label: "Apoyo_a_la_mujer",
          checked: false,
        },
        {
          value: "Construccion_obras",
          label: "Construccion_obras",
          checked: false,
        },
        { value: "Cultura", label: "Cultura", checked: false },
        { value: "Deportes", label: "Deportes", checked: false },
        {
          value: "Derechos_humanos",
          label: "Derechos_humanos",
          checked: false,
        },
        { value: "Discapacitados", label: "Discapacitados", checked: false },
        { value: "Educacion", label: "Educacion", checked: false },
        { value: "Medio_ambiente", label: "Medio_ambiente", checked: false },
        { value: "Entretenimiento", label: "Entretenimiento", checked: false },
        {
          value: "Gobierno_no_lucro",
          label: "Gobierno_no_lucro",
          checked: false,
        },
        { value: "Materia_prima", label: "Materia_prima", checked: false },
        {
          value: "Medios_de_comunicacion",
          label: "Medios_de_comunicacion",
          checked: false,
        },
        { value: "Salud_medicina", label: "Salud_medicina", checked: false },
        {
          value: "Servicio_comunitario",
          label: "Servicio_comunitario",
          checked: false,
        },
        { value: "Transporte", label: "Transporte", checked: false },
      ],
    },
    {
      id: "Donaciones",
      name: "Donaciones",
      options: [
        {
          value: "efectivo",
          label: "Efectivo",
          checked: false,
          onChange: handlerDonaciones,
        },
        {
          value: "especie",
          label: "Especie",
          checked: false,
          onChange: handlerDonaciones,
        },
        {
          value: "servicio",
          label: "Voluntario",
          checked: false,
          onChange: handlerDonaciones,
        },
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [search, setSearch] = useState(false);

  const offSearch = (e) => {
    if (e.target === e.currentTarget) setSearch(false);
  };

  const onSearch = () => {
    setSearch(true);
    setTimeout(() => {
      document.querySelector("#search").focus();
    }, 1);
  };

  useEffect(() => {
    setInfo(data);
    results = info;
    setEdit(data);
    /* Disable scroll if search is open */
    if (search) {
      const scrollTop = window.pageYOffset;
      document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset;
      document.documentElement.scrollLeft;
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      window.onscroll = function () {};
    }
  }, [search]);
  // const [e, setE] = useState("");

  // const searchHandler = (ev) => {
  //   setE(ev.target.value);
  //   if (!e) {
  //     results = info;
  //     console.log(e);
  //     console.log(info);
  //   }
  // };

  // const searchLogic = (ev) => {
  //   if (ev.key == "Enter" || ev.key == "Escape" || ev.target.id == "icon") {
  //     setSearch(false);
  //   }
  //   if (e) {
  //     setEdit((prev) => prev.filter((p) => p.title.toLowerCase().includes(e)));
  //     setDatosFiltradosPaises(
  //       datosFiltradosPaises.filter((p) => p.title.toLowerCase().includes(e))
  //     );
  //   }
  // };

  datosFiltradosPaises.length === 0
    ? (results = edit)
    : (results = [...datosFiltradosPaises]);
  // results = datosFiltrados;

  !input
    ? data
    : (results = data.filter((e) =>
        e.title.toLowerCase().includes(input.toLowerCase())
      ));
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

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-end border-b border-gray-200 pt-12 pb-6">
            <div className="flex items-center">
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
                          onClick={(e) => option.onClick(e)}
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

              <div
                className={`h-[100%] w-full z-30 bg-black backdrop-blur-sm bg-opacity-60  top-0 left-0 ${
                  search ? "fixed" : "none"
                }`}
                onClick={offSearch}
              ></div>

              <div className=" text-gray-400 hover:text-gray-500 ">
                <div className="shadow w-full">
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
                    onChange={filterPaises}
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
                className="grid w-full col-span-3 grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-4 overflow-auto "
                id="infiniteScroll"
              >
                {results && results.length !== 0
                  ? results.map((e) => (
                      <Link
                        className="w-full"
                        key={e.id}
                        href={`/iniciativas/${e.id}`}
                      >
                        <Card
                          key={e.id}
                          title={e.title}
                          image={e.image}
                          description={e.description}
                          location={e.location}
                          isVolunteer={e.type_of_help}
                          expirationDate={e.expirationDate}
                        />
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
