'use client'

import Image from 'next/image'
import homeWelcome from './Assets/home1.jpg'
import moneda from './Assets/moneda.png'
import caja from './Assets/caja.png'
import musculo from './Assets/musculo.png'
import recomendacion from './Assets/recomendacion.jpeg'
import Link from 'next/link'
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

        {/*Seccion Tipo de donaciones*/}
        <div className='flex flex-col gap-8 m-auto mx-12'>   
          <h2 className='m-auto font-semibold text-2xl font-montserrat'>¿Qué puedes hacer?</h2>   
          <div className='flex flex-col gap-8 md:flex-row'>

            <div className="flex flex-col w-96 m-auto items-center border border-gray-200 shadow my-0">
              <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={homeWelcome} alt=""/>
              <div className="flex flex-col justify-between p-4 leading-normal bg-pink-50 w-full h-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ayudar con dinero</h5>
                <p className="mb-3 font-normal text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link href='#' className='self-end'><button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-pink-600 rounded-lg border border-pink-200 hover:bg-pink-800 focus:z-10 focus:ring-4 focus:ring-pink-200">Donar</button></Link>
              </div>
            </div>

            <div className="flex flex-col w-96 m-auto items-center border border-gray-200 shadow">
              <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={homeWelcome} alt=""/>
              <div className="flex flex-col justify-between p-4 leading-normal bg-pink-50 w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ayudar con mercaderia</h5>
                <p className="mb-3 font-normal text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link href='#' className='self-end'><button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-pink-600 rounded-lg border border-pink-200 hover:bg-pink-800 focus:z-10 focus:ring-4 focus:ring-pink-200">Donar</button></Link>
              </div>
            </div>

            <div className="flex flex-col w-96 m-auto items-center border border-gray-200 shadow">
              <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={homeWelcome} alt=""/>
              <div className="flex flex-col justify-between p-4 leading-normal bg-pink-50 w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Participa en voluntariados</h5>
                <p className="mb-3 font-normal text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link href='#' className='self-end'><button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-pink-600 rounded-lg border border-pink-200 hover:bg-pink-800 focus:z-10 focus:ring-4 focus:ring-pink-200">Participar</button></Link>
              </div>
            </div>
          </div>  
          
        </div>


        {/*Seccion Mejora Insignias*/}
        <div className='flex flex-col my-8 p-20 items-center gap-8'>
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
            <Link href='#' className='text-hide font-semibold flex gap-4 items-center text-xl hover:text-pink-700'><button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-600 rounded-lg border border-gray-200 hover:bg-gray-800 focus:z-10 focus:ring-4 focus:ring-gray-200">Mas info</button></Link>
          </div>
        </div>

        {/*Seccion Mejora Insignias*/}
        <div className='flex flex-col mb-8 py-8 items-center gap-8 bg-pink-50'>
          <div className='flex flex-col gap-4 text-center items-center'>
            <h4 className='font-montserrat text-3xl'>ONG colaboradoras</h4>
            <span className='font-lora text-xl text-gray-500 w-3/5'>Colaboramos con organizaciones sin ánimo de lucro que centran su actividad en el ámbito social, medioambiental y cultural. A continuación, puedes ver un listado con todas ellas e información sobre cómo realizar tu donación directa o ser voluntariado.</span>
          </div>
          <div>
            <Link href='#' className='text-hide font-semibold flex gap-4 items-center text-xl hover:text-pink-700'><button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-600 rounded-lg border border-gray-200 hover:bg-gray-800 focus:z-10 focus:ring-4 focus:ring-gray-200">Descubrir</button></Link>
          </div>
        </div>

        {/*Seccion Reseñas*/}
        <div className="min-w-screen min-h-screen bg-pink-50 flex items-center justify-center py-5">
          <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
              <div className="w-full max-w-6xl mx-auto">
                  <div className="text-center max-w-xl mx-auto">
                      <h1 className="text-3xl md:text-3xl font-bold mb-5 text-gray-600 font-montserrat">¿Qué dicen nuestros usuarios?</h1>
                      <h3 className="text-xl mb-5 font-lora">Descubre la experiencia que vivieron algunos de ellos</h3>
                      <div className="text-center mb-10">
                          <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
                          <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
                          <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
                          <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
                          <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
                      </div>
                  </div>
                  <div className="-mx-3 md:flex items-start">
                      <div className="px-3 md:w-1/3">
                          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                              <div className="w-full flex mb-4 items-center">
                                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                      <Image src={recomendacion} className="h-full object-cover" alt=""/>
                                  </div>
                                  <div className="flex-grow pl-3">
                                      <h6 className="font-bold text-sm uppercase text-gray-600">Fabian Carabajal.</h6>
                                  </div>
                              </div>
                              <div className="w-full">
                                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                              </div>
                          </div>
                          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                              <div className="w-full flex mb-4 items-center">
                                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                      <Image src={recomendacion} className="h-full object-cover" alt=""/>
                                  </div>
                                  <div className="flex-grow pl-3">
                                      <h6 className="font-bold text-sm uppercase text-gray-600">Bautista Pietraroia.</h6>
                                  </div>
                              </div>
                              <div className="w-full">
                                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                              </div>
                          </div>
                      </div>
                      <div className="px-3 md:w-1/3">
                          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                              <div className="w-full flex mb-4 items-center">
                                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                      <Image src={recomendacion} className="h-full object-cover" alt=""/>
                                  </div>
                                  <div className="flex-grow pl-3">
                                      <h6 className="font-bold text-sm uppercase text-gray-600">Julian Padua.</h6>
                                  </div>
                              </div>
                              <div className="w-full">
                                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                              </div>
                          </div>
                          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                              <div className="w-full flex mb-4 items-center">
                                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                      <Image src={recomendacion} className="h-full object-cover" alt=""/>
                                  </div>
                                  <div className="flex-grow pl-3">
                                      <h6 className="font-bold text-sm uppercase text-gray-600">Gustavo Ramos.</h6>
                                  </div>
                              </div>
                              <div className="w-full">
                                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                              </div>
                          </div>
                      </div>
                      <div className="px-3 md:w-1/3">
                          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                              <div className="w-full flex mb-4 items-center">
                                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                      <Image src={recomendacion} className="h-full object-cover" alt=""/>
                                  </div>
                                  <div className="flex-grow pl-3">
                                      <h6 className="font-bold text-sm uppercase text-gray-600">Frank Camarena.</h6>
                                  </div>
                              </div>
                              <div className="w-full">
                                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                              </div>
                          </div>
                          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                              <div className="w-full flex mb-4 items-center">
                                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                      <Image src={recomendacion} className="h-full object-cover" alt=""/>
                                  </div>
                                  <div className="flex-grow pl-3">
                                      <h6 className="font-bold text-sm uppercase text-gray-600">Delwin Hernandez.</h6>
                                  </div>
                              </div>
                              <div className="w-full">
                                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}
