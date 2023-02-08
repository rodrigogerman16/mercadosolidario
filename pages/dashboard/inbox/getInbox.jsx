import React, { useEffect, useState } from 'react'
import { IoSend } from 'react-icons/io5'

const GetDonaciones = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getConfirmedDonations = async () => {
      const chats = await fetch(
        "https://pf-backend-mercadosolidario-production.up.railway.app/chat"
      ).then((res) => res.json());
      setData(chats)
    };
    getConfirmedDonations();
  }, [])

  const sendHandler = (email, id) => {
    window.open(`https://mailto:${email}`, 'popup', 'width=600,height=600')
    return fetch(`https://pf-backend-mercadosolidario-production.up.railway.app/chat/${id}`, {
      method: 'PUT',
    }).then(response => response.json())
  }

  return (!data.length ? <span>loading ... </span> : (
    <>
      {data.filter(d => d.answer == false).map((m) => (
        <div key={m.id} className='flex gap-4  rounded shadow p-4 items-center justify-between bg-white sm:gap-8 sm:p-8'>
          <div className='grid gap-4'>
            <span className='font-medium'>{m.email}</span>
            <p className='text-gray-700'>{m.question}</p>
          </div>
          <IoSend className=' cursor-pointer' onClick={() => sendHandler(m.email, m.id)}></IoSend>
        </div>
      ))}
    </>
  ))
}

export default GetDonaciones