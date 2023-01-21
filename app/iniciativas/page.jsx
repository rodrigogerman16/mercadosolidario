import Card from 'app/Components/Card'
import React from 'react'

const fetchPosts = () => {
  return fetch('https://pf-backend-mercadosolidario-production.up.railway.app/posts/posts')
    .then(res => res.json())
}

const Initiative = async () => {
  const posts = await fetchPosts()
  return (
    <div>
      {posts.map(p => <Card id={p.id} key={p.id} title={p.title} description={p.description} location={p.location}></Card>)}
    </div>
  )
}

export default Initiative