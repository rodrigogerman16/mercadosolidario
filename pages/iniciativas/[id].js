import React from 'react'
import Paypal from '../../Components/Paypal'



const Detail = async ({ params }) => {
  const { id } = params
  let post = await fetchPosts()
  post = post.find(p => p.id == id)
  return (
    <div>
      <h1>Detail {id}</h1>
      <Paypal />
      <div>
        {post && <div>
          <h4>{post.title && post.title}</h4>
          <p>{post.description && post.description}</p>
          <span>{post.location && post.location}</span>
        </div>
        }
      </div>
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

export function getStaticProps() {
  return fetch(`https://pf-backend-mercadosolidario-production.up.railway.app/posts/${params.id}`)
  .then(res => res.json())
  .then(data => {
    return {
      props : {
        data
      }
    }
  }) 
}

export default Detail