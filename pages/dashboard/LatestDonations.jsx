import React from 'react'

const LatestDonations = () => {
  return (
    <div className='grid grid-cols-3 gap-y-2'>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-700 font-medium'>Transacción</div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-700 font-medium'>Date</div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-700 font-medium'>Amount</div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-500'>
        <span>ejemplo@mail.com</span>
      </div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-500'>02/02/2003</div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-500'>$200</div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-500'>
        <span>ejemplo@mail.com</span>
      </div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-500'>02/02/2003</div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-500'>$200</div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-500'>
        <span>ejemplo@mail.com</span>
      </div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-500'>02/02/2003</div>
      <div className='bg-zinc-50 p-2 rounded-md text-gray-500'>$200</div>
    </div>
  )
}

export default LatestDonations