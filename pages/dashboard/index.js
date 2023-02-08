import Image from 'next/image'
import React from 'react'
import Logo from '../../Assets/logo-mercado-solidario-sintexto.png'
import InitiativesChart from '@/pages/dashboard/InitiativesChart'
import LatestDonations from './LatestDonations'
import UsersChart from './UsersChart'
import RubroChart from './RubroChart'
import Link from 'next/link'
import { getSession, signOut } from 'next-auth/react'
import profile from "../../../Assets/profile.png"
import { Router } from "react-router-dom";


const index = ({ posts, users, company, ong, inbox }) => {
  function handleSignOut() {
    localStorage.removeItem("user");
    signOut()
    Router.push("/")
    window.location.reload()
  }

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                </svg>
              </button>
              <a href="/" className="flex ml-2 md:mr-24 gap-2">
                <Image src={Logo} className="h-8 object-contain w-auto" alt="Mercado Solidario Logo" />
                <span className="self-center text-xl text-gray-700 font-semibold sm:text-2xl whitespace-nowrap hidden md:block">Mercado Solidario</span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 " aria-expanded="false" data-dropdown-toggle="dropdown-user">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src={profile} alt="user photo" />
                  </button>
                </div>
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow " id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm font-medium text-gray-900 truncate" role="none">
                      contacto.mercadosolidario@gmail.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <button onClick={handleSignOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">Cerrar sesion</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 " aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/dashboard/inbox" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" /><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-pink-400 bg-pink-100 rounded-full d">{inbox.filter(m => m.answer == false).length}</span>
              </a>
            </li>
            <li>
              <Link href="/dashboard/iniciativas" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Iniciativas</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/usuarios" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 md:ml-64 bg-gray-50">
        <div className="p-4 rounded-lg mt-14">
          <div className="grid grid-cols-1 gap-8 mb-4 lg:grid-cols-8">

            <div className="flex flex-col gap-8 items-center justify-center h-24 rounded bg-white  p-8 pl-0 h-96 col-span-1 lg:col-span-5">
              <h2 className='font-bold text-gray-700 text-lg'>Iniciativas creadas</h2>
              <InitiativesChart posts={posts}></InitiativesChart>
            </div>

            <div className="flex flex-col gap-8 items-center justify-center h-24 rounded bg-white p-8 h-96 w-full col-span-1 lg:col-span-3">
              <div className='grid items-center text-center justify-center'>
                <h2 className='font-bold text-gray-700 text-lg'>ultimas donaciones</h2>
                <Link href='/dashboard/donaciones' className='text-pink-400 cursor-pointer w-fit m-auto'>Ver todas</Link>
              </div>
              <LatestDonations></LatestDonations>
            </div>

            <div className="flex flex-col gap-8 items-center justify-center h-24 rounded bg-white p-8 h-96 w-full col-span-1 lg:col-span-4">
              <h2 className='font-bold text-gray-700 text-lg'>Rubros de iniciativas</h2>
              <RubroChart posts={posts}></RubroChart>
            </div>

            <div className="flex flex-col items-center justify-center h-24 rounded bg-white p-8 h-96 w-full col-span-1 lg:col-span-4">
              <h2 className='font-bold text-gray-700 text-lg'>Tipos de usuario</h2>
              <UsersChart posts={posts} users={users.length} company={company.length} ong={ong.length}></UsersChart>
            </div>

          </div>
        </div>
      </div >
    </div>


  )
}

export default index

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  //if(!session){
  //  return {
  //    redirect:{
  //      destination: "/",
  //      permanent: false
  //    }
  //   }
  //}
  const posts = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/posts")
    .then((res) => res.json())

  const inbox = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/chat")
    .then((res) => res.json())

  const company = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/company")
    .then((res) => res.json())

  const ong = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/ong")
    .then((res) => res.json())

  const users = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/user")
    .then((res) => res.json())
  return {
    props: {
      session,
      posts,
      company,
      ong,
      users,
      inbox
    }
  }
}