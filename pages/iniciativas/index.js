"use client"
import Card from '../../Components/Card'
import React, {useState} from 'react'
const Initiative =  ({data}) => {

    const [info, setInfo] = useState(data)
    console.log(info);

    const filterHandler = (e) => {
      console.log(e.target.value);
      const filtros = e.target.value === "efectivo" ? info.filter((e) => e.type_of_donor === "EFECTIVO") : info.filter((e) => !e.type_of_donor === "EFECTIVO")
      e.target.value === "all" ? info : filtros
    }
  return (
    <div>
      <nav>
        <div>
            <ul  >
              <li onClick={filterHandler} value='all' >All</li>
              <li onClick={filterHandler} value='efectivo' >Efectivo</li>
              <li  onClick={filterHandler}  value='especie' > En Especie </li>
            </ul>
        </div>
      </nav>
    
      {
        info.map((e) => <Card  title={e.title}  description={e.description} location={e.location}  />)
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