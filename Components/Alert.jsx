import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Alert = ({ title, text, icon }) => {
  MySwal.fire({
    title: <h6>{title}</h6>,
    html: <p>{text}</p>,
    icon: icon,
    iconColor: '#f472b6',
    confirmButtonColor: '#f472b6',
  })
}

export default Alert