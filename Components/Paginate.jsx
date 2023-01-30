import React from "react";
const Paginado = ({ perPage, results, paginado, current }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(results / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="w-full text-center m-auto">
      <ul className="flex gap-4 justify-center">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button
              className={`${current == number && 'bg-zinc-200 rounded'}  p-2`}
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
