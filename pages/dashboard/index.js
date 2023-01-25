import React, { useState } from 'react'
import CardDashBoard from "../../Components/CardDashBoard";
import Paginate from "../../Components/Paginate";

export default function Dashboard({data}) {
  const [info, setInfo] = useState(data)
  const [currentPage, setCurrentPage] = React.useState(1);
  const publicationsPerPage = 8;
  const indexLastPublications = currentPage * publicationsPerPage;
  const indexFirstPublications = indexLastPublications - publicationsPerPage;
  const infoo = info.slice(indexFirstPublications, indexLastPublications)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const borrarHandler = async (id) => {
   const prueba = infoo.filter((e) => e !== id)
   console.log(prueba);
  }

  return(
    <div>
      <h1>{infoo.map((e) => <CardDashBoard id={e.id} key={e.id} title={e.title} description={e.description} location={e.location} borrar={borrarHandler}  />)}</h1>
      <Paginate
        publicationsPerPage={publicationsPerPage}
        allPublications={info.length}
        paginado={paginado}
      />
    </div>
  )
}

export function getStaticProps() {
  return fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/posts"
  )
    .then((res) => res.json())
    .then((data) => {
      return {
        props: {
          data,
        },
      };
    });
}