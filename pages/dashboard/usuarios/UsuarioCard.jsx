import React, {useState, useEffect} from "react";

export default function UsuarioCard({ users }) {

  function handleToggle(user) {
    //user.isActive ?
    //window.localStorage.setItem("isActive", false) :
    //window.localStorage.setItem("isActive", true)
  }

  {/*Ordenamiento Por Nombre*/}
  const [allUsers, setAllUsers] = useState([users]);

  const handleNameSort = () => {
    setAllUsers([...allUsers[0].data].sort((a, b) => (a.name > b.name ? 1 : -1)));
    console.log("name", allUsers)
  };

  {/*Ordenamiento Por Rubro */}
  const handleRoleSort = () => {
    setAllUsers([...allUsers[0].data].sort((a, b) => (a.type_of_user > b.type_of_user ? 1 : -1)));
    console.log("role", allUsers)
  };

  {/*Searchbar*/}  
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(allUsers)
  const filteredPosts = allUsers[0].data.filter((user) =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(()=>{
    console.log("Hola")
  },[allUsers])
  return (
    <div class="relative overflow-x-auto mt-20 ml-4 flex flex-col justify-center items-center">
      
      <div className="w-2/3 text-left mb-4">
          <input
            type={"search"}
            id="search"
            className={`rounded-full shadow border-gray-200 bg-gray-100 ml-4 text-black  text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200  
                    `}
            placeholder="Buscar..."
            onChange={handleSearch}
            value={searchTerm}
          ></input>          
        </div>
      <table class="w-2/3 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase border-b">
          <tr>
            <th scope="col" class="px-6 py-3">
              <buton onClick={handleNameSort}>Nombre</buton>
            </th>
            <th scope="col" class="px-6 py-3">
            <buton onClick={handleRoleSort}>Tipo</buton>
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
          {filteredPosts.map((user) => (
            <tr class="border-b">
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
                      onChange={handleToggle(user)}
                      checked
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
                      onChange={handleToggle(user)}
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
                <a href={user.rut} target="_blank">
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
