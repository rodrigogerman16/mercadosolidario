'use client'
import React from "react";

export default function Paginate({ publicationsPerPage, allPublications, paginado }) {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(allPublications / publicationsPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <nav>
      <div>
        {pageNumber &&
          pageNumber.map((number) => {
            return (
              <div key={number}>
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