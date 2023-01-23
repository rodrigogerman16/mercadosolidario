"use client"
import Card from '../../Components/Card'
import React, {useState} from 'react'
import Link from 'next/link'
import Provincias from './Provincias'
const Initiative =  ({data}) => {
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
      <nav>
        <div>
            <ul  >
              <li key='Lista1'  ><a onClick={(e) => filterHandler(e)}  name='all'  >All</a></li>
              <li key='Lista2'  ><a onClick={(e) => filterHandler(e)}  name='efectivo' >Efectivo</a></li>
              <li key='Lista3'  > <a onClick={(e) => filterHandler(e)}  name='especie'  >En Especie</a> </li>
            </ul>
        </div>
        <div>
            <h2>Provincia</h2>
            <select onChange={(e) => filterProvinces(e)}>
            <option key='all' value='all'>Todos</option>
            {
                    Provincias.map((e) => <option  key={e} value={e} >{e}</option>)
                }
            </select>
        </div>
      </nav>
    
      {
        info.map((e) => <Link key={e.id}  href={`/iniciativas/${e.id}`} > <Card key={e.id} title={e.title}  description={e.description} location={e.location}  /> </Link>)
      }
    </div>
  )
  }
  export function getStaticProps() {
    return fetch("https://pf-backend-mercadosolidario-production.up.railway.app/posts")
    .then(res => res.json())
    .then(data => {
      return {
        props : {
          data
        }
      }
    })
   
  }

export default Initiative