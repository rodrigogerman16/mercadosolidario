import React, { useEffect, useState } from 'react'

const GetDonaciones = ({ latest }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getConfirmedDonations = async () => {
      const donations = await fetch(
        "https://pf-backend-mercadosolidario-production.up.railway.app/confirmed"
      ).then((res) => res.json());
      if (latest) setData(donations.slice(-3))
      else setData(donations)
    };
    getConfirmedDonations();
  }, [])

  return (!data.length ? <span>loading ... </span> : (
    <>
      {data.filter(d => d.type_of_help == 'efectivo').map((d) => (
        <tr class="border-b" key={d.id}>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {d.userIDs}
          </th>
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {d.dateConfirmed}
          </td>
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {d.amount}
          </td>
        </tr>
      ))}
    </>
  ))
}

export default GetDonaciones