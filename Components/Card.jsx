import React from 'react'

const Card = ({ title, description, location }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{location}</span>
      </div>
  )
}




export default Card