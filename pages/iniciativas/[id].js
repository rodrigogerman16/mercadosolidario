"use client"
import React from 'react'
import Paypal from '@/Components/Paypal';
const Detail =  ({data}) => {
  console.log("Esto es data" + data);
  return(
    <div>
      <Paypal />
      <h2>{data.id}</h2>
      <h1>{data.location}</h1>
      <p>{data.title}</p>

    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/posts")
  const data = await res.json()
  const paths = data.map(({id}) => ({params : {id: `${id}`}}))
  return {
    paths,
    fallback: false
  }
}
    



export async function getStaticProps({params}) {
  const all = await fetch(`https://pf-backend-mercadosolidario-production.up.railway.app/posts/${params.id}`)
  .then(res => res.json())
  .then(data => {
    return {
      props: {
        data
      }
    }
  })
  return all
}



export default Detail