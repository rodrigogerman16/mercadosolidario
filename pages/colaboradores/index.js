import React, {useState} from "react";
import {BsArrowUpShort, BsArrowDownShort} from "react-icons/bs"
import Link from "next/link";

export default function UsuarioCard({ users }) {
    users && console.log(users.data)

  
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');  
  const [sortBy, setSortBy] = useState('name');

  const filterUsers = users && users.data.filter(user => user.type_of_user === "user")
console.log(filterUsers)
  const sortedData = filterUsers && filterUsers
  .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
    });


  return (
    <div class="relative overflow-x-auto mt-20 ml-4 flex flex-col justify-center items-center">
      
      <div className="w-2/3 text-left mb-4">
          <input
            type={"search"}
            id="search"
            className={`rounded-full shadow border-gray-200 bg-gray-100 ml-4 text-black  text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200  
                    `}
            placeholder="Buscar..."
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
          ></input>          
        </div>
      <table class="w-2/3 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase border-b">
          <tr>
            <th scope="col" class="px-6 py-3">
              <buton onClick={ function(){setSortBy("name"); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}} className="flex items-center gap-2">Nombre {(sortOrder === 'asc' && sortBy === 'name')? <BsArrowUpShort/> : <BsArrowDownShort/>}</buton>
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Linkedin
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData && sortedData.map((user) => (
            <tr class="border-b" key={user.id}>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {user.name}
              </th>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {user.email}
              </td>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <Link href="">
                {user.user_linkedin ? user.user_linkedin : "-"}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const getStaticProps = async () => {
    const company = await fetch(
      "https://pf-backend-mercadosolidario-production.up.railway.app/company"
    ).then((res) => res.json());
  
    const ong = await fetch(
      "https://pf-backend-mercadosolidario-production.up.railway.app/ong"
    ).then((res) => res.json());
  
    const users = await fetch(
      "https://pf-backend-mercadosolidario-production.up.railway.app/users"
    ).then((res) => res.json());
  
    return {
      props: {
        company,
        ong,
        users,
      },
    };
  };
  