import React from 'react'
import Paypal from 'app/Components/Paypal'

const fetchPosts = () => {
  return fetch('https://pf-backend-mercadosolidario-production.up.railway.app/posts/posts')
    .then(res => res.json())
}

const Detail = async ({ params }) => {
  const { id } = params
  let post = await fetchPosts()
  post = post.find(p => p.id == id)
  return (
    <div>
      <h1>Detail {id}</h1>
      <Paypal></Paypal>
      <div>
        <h4>{post.title}</h4>
        <p>{post.description}</p>
        <span>{post.location}</span>
      </div>
    </div>
  )
}

export default Detail