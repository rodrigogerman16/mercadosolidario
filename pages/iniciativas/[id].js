"use client"
import React from 'react'
import Paypal from '@/Components/Paypal';
import Image from 'next/image';
import moment from 'moment/moment';

const Detail = ({ data }) => {
  return (
    <div className='grid gap-8 max-w-3xl w-full m-auto gap-8 my-8 p-8'>
      <img className='rounded m-auto w-full aspect-video object-cover' src={data.image} alt={data.title}></img>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <span className="px-2 py-1 rounded bg-pink-400 text-white">{data.type_of_help[0].toUpperCase() + data.type_of_help.slice(1)}</span> {/* UpperCase first letter */}
          <span className="text-sm dark:text-gray-400">{moment().startOf(data.expirationDate).fromNow()}</span>
        </div>
        <h2 className="text-5xl font-bold">{data.title}</h2>
        <span className='text-gray-400'>📍{data.province}</span>
        <p className="mt-2">{data.description}</p>
        <Paypal postId={data.id}></Paypal>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/posts")
  const data = await res.json()
  const paths = data.map(({ id }) => ({ params: { id: `${id}` } }))
  return {
    paths,
    fallback: false
  }
}




export async function getStaticProps({ params }) {
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