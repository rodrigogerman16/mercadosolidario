import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/mercado-solidario-logo.jpg"

export default function Navbar(){
    return(        
        <nav className="px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <Image src={logo} className="h-6 mr-3 sm:h-9 w-auto" alt="Flowbite Logo" />
                </a>
                <div className="flex md:order-2">
                    <button type="button" className="text-white bg-pink-700 hover:bg-pink-900 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Ingresar</button>
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-pink-500" aria-current="page">Inicio</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-pink-500">Iniciativas</a>
                    </li>
                    <li>
                        <a href="#" className="className=block py-2 pl-3 pr-4 rounded md:p-0 hover:text-pink-500">FAQ</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-pink-500">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}