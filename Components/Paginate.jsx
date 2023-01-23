import React from "react";

export default function Paginate({ publicationsPerPage, allPublications, paginado }) {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(allPublications / publicationsPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <nav class="justify-center text-center items-center mt-10">
      <div class="inline-flex items-center -space-x-px gap-3">
        {pageNumber &&
          pageNumber.map((number) => {
            return (
              <div class="px-3 py-2 leading-tight text-black hover:text-white border bg-pink-300 hover:bg-gray-800 dark:border-gray-700 rounded" key={number}>
                <button onClick={() => paginado(number)}>
                  {number}
                </button>
              </div>
            );
          })}
      </div>
    </nav>
  );
}

/* Posible Logica para el home
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 6;
  const indexLastPublications = currentPage * PublicationsPerPage;
  const indexFirstPublications = indexLastPublications - publicationsPerPage;

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  <Paginate
          PublicationsPerPage={PublicationsPerPage}
          allIPublications={publications.length} <-- estado global?
          paginado={paginado}
  />
*/