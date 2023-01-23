"use client"
import Card from '../../Components/Card'
import React, { useEffect ,useState } from 'react'
import Link from 'next/link'
const Initiative = ({ data }) => {
  let [info, setInfo] = useState(data)
  const [input, setInput] = useState()
  const [order, setOrder] = useState()
  const filterHandler = (e) => {
    const value = e.target.name
    console.log(value);
    const info = value === "efectivo" ? data.filter((e) => e.type_of_donor === "EFECTIVO") : data.filter((e) => e.type_of_donor === "EN_ESPECIE")
    console.log(data);
    setInfo(value === "all" ? data : info)
    console.log(data);
  }

  const [hydrated, setHydrated] = React.useState(false);
    useEffect(() => {
        setHydrated(true);
        setInfo(info)
    }, [info]);
    if (!hydrated) {
        return null;
    }

  const filterProvinces = (e) => {
    const value = e.target.value
    console.log(value);
    const filtros = data.filter(posts => posts.location === value)
    setInfo(value === "all" ? data : filtros)
  }

  const filtroInput = async (e) => {
    setInput(e.target.value)
  const filterSearch =  !input ? data : await data.filter((dato) => dato.title.toLowerCase().includes(input.toLowerCase()))
  setInfo(filterSearch)
  console.log(e.target.value);
  }

  const orderHandler = async (e) => {
    
    if (e.target.value === "asc") {
      const order = await info.sort((a,b)=>a.title.localeCompare(b.title));
      console.log(order);
      setInfo(order)

  } else if (e.target.value === "desc") {
    const order = await info.sort((a,b)=>b.title.localeCompare(a.title))
      console.log(order);
      setInfo(order)
  }
  else if (e.target.value === "all") {
   
    const order = await info 
      setInfo(order)
  }

  }


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
    "Tucuman"
  
]
  


  return (
    <div>
      <nav className='flex w-full align-middle justify-center text-center gap-8 bg-pink-300 py-4 items-center ' >
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
        <div>
          <select onChange={(e) => orderHandler(e)} >
            <option value='all' >All</option>
            <option value='asc' >A-Z</option>
            <option value='desc' >Z-A</option>
          </select>
          <input  onChange={(e) => filtroInput(e)} />
        </div>
      </nav>

      <div className='w-full grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4'>

        {
          info.length !== 0 ?
          info.map((e) => <Link key={e.id} href={`/iniciativas/${e.id}`} > <Card key={e.id} title={e.title} description={e.description} location={e.location} /> </Link>)
          : "No hay cartas para mostrar"
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