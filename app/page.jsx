import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Image from 'next/image'
import homeWelcome from './Assets/home1.png'
import moneda from './Assets/moneda.png'
import caja from './Assets/caja.png'
import musculo from './Assets/musculo.png'
import Link from 'next/link'
import {AiOutlineRight} from "react-icons/ai"
import {BsArrowRight, BsArrowLeft} from "react-icons/bs"

export default function Home() {
  return (
    <div>
      <div className='min-h-screen'>

        {/*Seccion Dienvenida*/}
        <div className='flex items-center justify-evenly py-20'>
          <div className='flex flex-col w-min gap-8 mt-auto mb-8'>
            <h1 className='font-montserrat text-3xl'>Algun texto de prueba para probar heigh</h1>
            <h4 className='font-lora text-xl w-96 text-gray-500'>Se parte de la asociacion mas grande de Argentina en ayudar a los que mas necesitan.</h4>
            <Link href='#' className='flex justify-end font-hind font-semibold items-center gap-1 hover:text-pink-500'>Descubrir <AiOutlineRight/></Link>
          </div>
          <div className='w-2/4'>
            <Image src={homeWelcome} className='float-right' alt='Foto bienvenida'/>
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
