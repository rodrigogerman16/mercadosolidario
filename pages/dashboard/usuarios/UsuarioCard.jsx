import React, {useState} from "react";
import {BsArrowUpShort, BsArrowDownShort} from "react-icons/bs"
import axios from "axios";

export default function UsuarioCard({ users }) {
  {/*Borrado Logico*/}
  async function handleToggle(user) {
    console.log(user.isActive)
    if(!user.isActive){
      user.isActive = true;
    }else{
      user.isActive = false;
    }
    console.log(user.isActive)
    const inf = await axios.put(`https://pf-backend-mercadosolidario-production.up.railway.app/${user.type_of_user}/${user.id}`, {
      isActive: user.isActive,
    })
    console.log(inf.data);
    console.log(user.isActive);
  }
  
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');  
  const [sortBy, setSortBy] = useState('name');

  const sortedData = users?.data
    .filter(user => user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if(sortBy === 'name'){
        if (sortOrder === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      }
      
      if (sortOrder === 'asc') {
        return a.type_of_user.localeCompare(b.type_of_user);
      } else {
        return b.type_of_user.localeCompare(a.type_of_user);
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
            <buton onClick={function(event){setSortBy("type_of_user"); setSortOrder( sortOrder === 'asc' ? 'desc' : 'asc')}} className="flex items-center gap-2">Tipo {(sortOrder === 'asc' && sortBy === 'type_of_user') ? <BsArrowUpShort/> : <BsArrowDownShort/>}</buton>
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Desactivar/Activar
            </th>
            <th scope="col" class="px-6 py-3">
              Registro Unico Tributario
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((user) => (
            <tr class="border-b" key={user.id}>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {user.name}
              </th>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {user.type_of_user}
              </td>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {user.email}
              </td>

              {/*Toggle para activar o desactivar usuario */}
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <label className="relative inline-flex items-center mr-5 cursor-pointer mt-4 w-fit">
                {user.isActive ? (
                  <div className="flex">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onChange={() => handleToggle(user)}
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      Desactivar/Activar
                    </span>
                  </div>
                ) : (
                  <div className="flex">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onChange={() =>handleToggle(user)}
                      unchecked
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      Desactivar/Activar
                    </span>
                  </div>
                )}
                </label>
              </td>
              {/*--------*/}

              {/*Registro Unico Tributario*/}
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {user.rut ?
                <a href={user.rut} target="_blank" rel="noreferrer">
                    Abrir
                </a>
                :
                '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
