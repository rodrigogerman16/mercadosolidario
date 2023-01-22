"use client"
// import Card from 'app/Components/Card'
// import React from 'react'

async function fetchPosts() {
  const data = await fetch('https://pf-backend-mercadosolidario-production.up.railway.app/posts')
    .then(res => res.json())
    .catch(error =>{console.error(error)})
    return data
}

const Initiative =  () => {
  const posts = fetchPosts()
    .then()
  return (
    <div>
      <nav>
        <div>
            <ul >
              <li  >All</li>
              <li  >Efectivo</li>
              <li > En Especie </li>
            </ul>
        </div>
      </nav>
      
    </div>
  )
  }
  export function getStaticProps() {
    console.log("Hola")
      return {
        props : {}
      }
  }

export default Initiative