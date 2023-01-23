import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/mercado-solidario-logo.jpg"
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-white py-4">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex-shrink-0">
                                <Link href={'/'}>
                                    <Image src={logo} className="h-10 mr-3 sm:h-12 w-auto" alt="Mercado Solidario Logo" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4 gap-4">
                                    <Link
                                        href="/" //  hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium
                                        className="font-semibold text-black hover:text-pink-400"
                                    >
                                        Inicio
                                    </Link>

                                    <Link
                                        href="/iniciativas"
                                        className="font-semibold text-black hover:text-pink-400"
                                    >
                                        Iniciativas
                                    </Link>

                                    <Link
                                        href="/faq"
                                        className="font-semibold text-black hover:text-pink-400"
                                    >
                                        FAQ
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden gap-4 md:flex">
                                <Link
                                    href="/ingresar"
                                    className="font-semibold text-black bg-zinc-100 px-6 py-2 hover:bg-zinc-200 transition-colors"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/registrarse"
                                    className="font-semibold text-white bg-black px-6 py-2 hover:bg-zinc-800 transition-colors"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 text-black"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="flex flex-col items-center gap-4 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    href="/" //  hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium
                                    className="font-semibold text-black hover:text-pink-400"
                                >
                                    Inicio
                                </Link>

                                <Link
                                    href="/iniciativas"
                                    className="font-semibold text-black hover:text-pink-400"
                                >
                                    Iniciativas
                                </Link>

                                <Link
                                    href="/faq"
                                    className="font-semibold text-black hover:text-pink-400"
                                >
                                    FAQ
                                </Link>
                                <Link
                                    href="#"
                                    className="font-semibold text-black bg-zinc-100 px-6 py-2 hover:bg-zinc-200 transition-colors"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="#"
                                    className="font-semibold text-white bg-black px-6 py-2 hover:bg-zinc-800 transition-colors"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>

        /*         <nav className="px-2 sm:px-4 py-2.5 rounded">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="/" className="flex items-center">
                            <Image src={logo} className="h-6 mr-3 sm:h-9 w-auto" alt="Flowbite Logo" />
                        </a>
                        <div className="flex md:order-2">
                            <Link href="/ingresar"><button type="button" className="text-white bg-pink-700 hover:bg-pink-900 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Ingresar</button></Link>
                            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                                <li>
                                    <Link href="/" className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-pink-500" aria-current="page">Inicio</Link>
                                </li>
                                <li>
                                    <Link href="/iniciativas" className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-pink-500">Iniciativas</Link>
                                </li>
                                <li>
                                    <Link href="/creariniciativas" className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-pink-500">Crear iniciativas</Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="className=block py-2 pl-3 pr-4 rounded md:p-0 hover:text-pink-500">FAQ</Link>
                                </li>
                                <li>
                                    <a href="#footer" className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-pink-500">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */
    )
}