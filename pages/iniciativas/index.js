import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { BsChevronDown, BsFunnelFill, BsDash, BsPlus, BsSearch, BsX } from 'react-icons/bs'
import Link from 'next/link'
import Card from '../../Components/Card'
import InfiniteScroll from 'react-infinite-scroll-component';

const sortOptions = [


  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [


  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [


  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Products({ data }) {
  const [newData, setNewData] = useState(data)

  const [search, setSearch] = useState(false)

  const offSearch = e => {
    if (e.target === e.currentTarget) setSearch(false)
  }

  const onSearch = () => {
    setSearch(true)
    setTimeout(() => {
      document.querySelector('#search').focus()
    }, 1);
  }

  useEffect(() => {
    /* Disable scroll if search is open */
    if (search) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      window.onscroll = function () { };
    }

  }, [search])


  const searchHandler = e => {
    const value = document.querySelector('#search').value.toLowerCase()
    if (e.key == "Enter" || e.target.id == 'icon') {
      setNewData(data.filter(p => p.title.toLowerCase().includes(value)))
      setSearch(false)
      document.querySelector('#search').value = ''
    }
    if (e.key == "Escape") {
      setSearch(false)
      document.querySelector('#search').value = ''
    }
  }

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [pagination, setPagination] = useState(1)


  const [hydrated, setHydrated] = React.useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  /* 
  ANTERIOR
  
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
  */

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
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
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
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
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <BsDash className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <BsX className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
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
          <div className="flex items-baseline justify-end border-b border-gray-200 pt-12 pb-6">

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
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
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

              <div className={`h-[100%] w-full z-30 bg-black bg-opacity-60  top-0 left-0 ${search ? "fixed" : "none"}`} onClick={offSearch}>
                <div className='absolute shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <input type={'search'} id='search' className={`rounded-full pr-16 w-full h-full shadow border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200  ${search ? "visible" : "hidden"}`} placeholder='Buscar...' onKeyDown={searchHandler}></input>
                  <BsSearch id='icon' className={`text-gray-400 hover:text-gray-500 h-5 w-5 cursor-pointer absolute top top-1/2 right-6 transform -translate-y-1/2 ${search ? "visible" : "hidden"}`} onClick={searchHandler}></BsSearch>
                </div>
              </div>

              <div className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <BsSearch className="h-5 w-5 cursor-pointer" aria-hidden="true" onClick={onSearch} />
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
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <BsDash className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <BsX className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
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
              <div className="grid w-full col-span-3" id='infiniteScroll'>
                {
                  newData.length && <InfiniteScroll
                    dataLength={newData.length}
                    next={() => setPagination(pagination + 1)}
                    hasMore={true}
                    loader={<h4>Loading..</h4>}
                    scrollableTarget="infiniteScroll"
                    className='grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-4 overflow-auto'
                  >
                    {newData.length !== 0
                      ? newData.map((e) => (
                        <Link className='w-full' key={e.id} href={`/iniciativas/${e.id}`}>
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
                  </InfiniteScroll>
                }
              </div>
            </div >
          </section >
        </main >
      </div >
    </div >
  )
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