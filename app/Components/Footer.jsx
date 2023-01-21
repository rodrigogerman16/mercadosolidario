import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/logo-mercado-solidario-sintexto.png"
import { FiFacebook, FiInstagram } from "react-icons/fi"

export default function Footer(){
    return(
        <div className="bg-pink-50 text-black relative bottom-0 w-screen font-hind">
            <div className="flex justify-between m-auto py-12 w-11/12 content-center">
                <div className="flex flex-col self-center gap-4">
                    <Image src={logo} alt="logo" className="w-32"/>
                    <span className="w-64 text-gray-600">Mercado Solidario es una asociación, oficialmente registrada en Argentina en 2023.</span>
                </div>
                <div className="flex flex-col gap-8 self-center">
                    <div>
                        <span className="font-bold">Contacto:</span>
                        <p className="text-gray-600">Av. Argentina 122, 8300 Neuquen - Argentina</p>
                        <Link href="#" className="text-pink-800 font-semibold">contacto@mercadosolidario.com</Link>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold self-center">Síguenos:</span>
                        <div className="flex justify-between gap-4 items-center">
                            <Link href="#" className="text-3xl hover:text-pink-700"><FiInstagram/></Link>
                            <Link href="#" className="text-3xl hover:text-pink-700"><FiFacebook/></Link>
                        </div>
                    </div>
                </div> 
                <div className="flex flex-col text-right font-semibold">
                    <Link href="#" className="hover:text-pink-700">INICIO</Link>
                    <Link href="#" className="hover:text-pink-700">INICIATIVAS</Link>
                    <Link href="#" className="hover:text-pink-700">FAQ</Link>
                    <Link href="#" className="hover:text-pink-700">ENTRAR</Link>
                    <br/>
                    <Link href="#" className="hover:text-pink-700">QUIENES SOMOS</Link>
                    <Link href="#" className="hover:text-pink-700">QUE HACEMOS</Link>
                    <Link href="#" className="hover:text-pink-700">ULTIMAS NOTICIAS</Link>
                </div>
            </div>

            <hr className="w-11/12 m-auto bg-pink-600 h-2"/>

            <div className="flex justify-between m-auto w-11/12 py-6">
                <div className="flex gap-4 text-gray-600">
                    <span>@2023 Mercado Solidario - Organizacion sin fines de lucro</span>
                    <Link href="#" className="hover:text-pink-700">Política de privacidad</Link>
                    <Link href="#" className="hover:text-pink-700">Términos y condiciones</Link>
                </div>
                <div>
                    <Link href="#" className="hover:text-pink-700">Creditos</Link>
                </div>

            </div>
        </div>
    )
}