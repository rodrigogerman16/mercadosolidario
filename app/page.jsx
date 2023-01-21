'use client'

import Image from 'next/image'
import homeWelcome from './Assets/home1.jpg'
import moneda from './Assets/moneda.png'
import caja from './Assets/caja.png'
import musculo from './Assets/musculo.png'
import Link from 'next/link'
import {BsArrowRight, BsArrowLeft} from "react-icons/bs"
import 'flowbite'

export default function Home() {
  return (
    <div>
      <div className='min-h-screen'>

        {/*Seccion Dienvenida*/}
        <div className='flex items-center justify-around py-20 pl-20'>
          <div className='flex flex-col gap-8'>
            <h1 className='font-montserrat text-3xl'>Algun texto de prueba para probar heigh</h1>
            <h4 className='font-lora text-xl w-96 text-gray-500'>Se parte de la asociacion mas grande de Argentina en ayudar a los que mas necesitan.</h4>
            <Link href='#' className='self-end'><button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-600 rounded-lg border border-gray-200 hover:bg-gray-800 focus:z-10 focus:ring-4 focus:ring-gray-200">Descubrir</button></Link>
            
          </div>
          <div>
            <Image src={homeWelcome} className='w-full float-right relative left-12' alt='Foto bienvenida'/>
          </div>
        </div>

        {/*Seccion Mejora Insignias*/}
        <div className='flex flex-col bg-pink-200 my-8 p-20 items-center gap-8'>
          <div className='flex flex-col gap-4 text-center'>
            <h4 className='font-montserrat text-3xl'>Consigue y mejora insignias</h4>
            <span className='font-lora text-xl text-gray-500'>Al donar o realizar algun voluntariado recibiras puntos y subiras el nivel de tu insignia</span>
          </div>
          <div className='flex gap-8 w-1/2 justify-between py-8'>
            <Image src={moneda} className='w-32' alt='insignia donacion dinero'/>
            <Image src={caja} className='w-32' alt='insignia donacion en especie'/>
            <Image src={musculo} className='w-32' alt='insignia voluntariado'/>
          </div>
          <div>
            <Link href='#' className='text-hide font-semibold flex gap-4 items-center text-xl hover:text-white'><BsArrowRight/>Mas info<BsArrowLeft/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
