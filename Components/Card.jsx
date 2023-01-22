import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ id, title, description, location }) => {
  return (
    <Link href={`/iniciativas/${id}`}>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{location}</span>
    </Link>
  )
}

export default Card