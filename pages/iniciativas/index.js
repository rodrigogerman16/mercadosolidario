"use client"
import Card from '../../Components/Card'
import React, {useState} from 'react'
const Initiative =  ({data}) => {
    const [info, setInfo] = useState(data)

    const filterHandler = (e) => {
      const value = e.target.name
      console.log(value);
      const filtros = value === "efectivo" ? data.filter((e) => e.type_of_donor === "EFECTIVO") : data.filter((e) => !e.type_of_donor === "EFECTIVO")
      setInfo(value === "all" ? info : filtros)
      console.log(data);
    }
  return (
    <div>
      <nav>
        <div>
            <ul  >
              <li   ><a onClick={(e) => filterHandler(e)}  name='all'  >All</a></li>
              <li   ><a onClick={(e) => filterHandler(e)}  name='efectivo' >Efectivo</a></li>
              <li     > <a onClick={(e) => filterHandler(e)}  name='especie'  >En Especie</a> </li>
            </ul>
        </div>
      </nav>
    
      {
        info.map((e) => <Card key={e.id} title={e.title}  description={e.description} location={e.location}  />)
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