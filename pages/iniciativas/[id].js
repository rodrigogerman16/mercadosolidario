"use client"
import React from 'react'
import Paypal from '@/Components/Paypal';
import Image from 'next/image';
const Detail = ({ data }) => {
  console.log("Esto es data" + data);
  console.log(data);
  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-">
        <div className="space-y-6">
          <img src={'https://www.le7.info/media/cache/article/uploads/photos/630d9eee64fd3.jpeg'} className={'w-full h-full rounded'}></img>
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{data.title}</h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-cente">
            <div className="flex items-center md:space-x-2">
              <p className="text-sm text-zinc-500">NombreONG • {data.date}</p>
            </div>
            <p className="flex-shrink-0 mt-3  text-zinc-500 text-sm md:mt-0">4 min read • 1,570 views</p>
          </div>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
      </article>
      <div>
        <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed">
          <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-pink-500">#Causa1</a>
          <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-pink-500">#Causa2</a>
          <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-pink-500">#Causa3</a>
        </div>
      </div>
      <Paypal></Paypal>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/posts")
  const data = await res.json()
  const paths = data?.map(({ id }) => ({ params: { id: `${id}` } }))
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