import React from 'react'
import dynamic from 'next/dynamic';

const DynamicGetDonaciones = dynamic(() => import('./donaciones/getDonaciones'), {
  ssr: false
});

const LatestDonations = () => {
  return (
    <div class="relative overflow-x-scroll max-w-full  ml-4 flex flex-col justify-center items-center">

      <div className="w-2/3 text-left mb-4">
      </div>
      <table class="w-2/3 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase border-b">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              DATE
            </th>
            <th scope="col" class="px-6 py-3">
              Cantidad
            </th>
          </tr>
        </thead>
        <tbody>
          <DynamicGetDonaciones latest={true} />
        </tbody>
      </table>
    </div>
  )
}

export default LatestDonations