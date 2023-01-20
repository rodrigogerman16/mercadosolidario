import Paypal from 'app/Components/Paypal'
import React from 'react'

const Detail = ({ params }) => {
  const { id } = params
  return (
    <div>
      <h1>Detail {id}</h1>
      <Paypal></Paypal>
    </div>
  )
}

export default Detail