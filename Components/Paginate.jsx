import React from "react";
const Paginado = ({ perPage, results, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(results / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button
              className="boton_paginado"
              key={number}
              onClick={() => paginado(number)}
            >
              {number}
            </button>
          ))}
      </ul>
    </nav>
  );
};

export default Paginado;
