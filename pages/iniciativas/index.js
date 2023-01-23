"use client"
import Card from '../../Components/Card'
import React, { useState } from 'react'
import Link from 'next/link'
import Provincias from './Provincias'
const Initiative = ({ data }) => {
  const [info, setInfo] = useState(data)
  const filterHandler = (e) => {
    const value = e.target.name
    console.log(value);
    const filtros = value === "efectivo" ? data.filter((e) => e.type_of_donor === "EFECTIVO") : data.filter((e) => e.type_of_donor !== "EFECTIVO")
    setInfo(value === "all" ? data : filtros)
    console.log(data);
  }

  const filterProvinces = (e) => {
    const value = e.target.value
    console.log(value);
    const filtros = data.filter(posts => posts.location === value)
    setInfo(value === "all" ? data : filtros)
  }


  return (
    <div>
      <nav className='flex w-full align-middle justify-center text-center gap-8 bg-pink-300 py-4'>
        <div>
          <ul>
            <li className='cursor-pointer'><a onClick={(e) => filterHandler(e)} name='all'  >All</a></li>
            <li className='cursor-pointer'><a onClick={(e) => filterHandler(e)} name='efectivo' >Efectivo</a></li>
            <li className='cursor-pointer'> <a onClick={(e) => filterHandler(e)} name='especie'  >En Especie</a> </li>
          </ul>
        </div>
        <div>
          <h2>Provincia</h2>
          <select onChange={(e) => filterProvinces(e)} className="
          form-select appearance-none
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          ">
            <option value='all'>Todos</option>
            {
              Provincias.map((e) => <option key={e} value={e} >{e}</option>)
            }
          </select>
        </div>
      </nav>

      <div className='w-full grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4'>

        {
          info.map((e) => <Link key={e.id} href={`/iniciativas/${e.id}`} > <Card key={e.id} title={e.title} description={e.description} location={e.location} /> </Link>)
        }

      </div>
    </div>
  )
}
export function getStaticProps() {
  return fetch("https://pf-backend-mercadosolidario-production.up.railway.app/posts")
    .then(res => res.json())
    .then(data => {
      return {
        props: {
          data
        }
      }
    })

}

export default Initiative