import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
const RutaUser = () => {

  const [results, setResults] = useState();
  useEffect(() => {
    const usuario = window.localStorage.getItem("user");
    const usuarioJSON = usuario ? JSON.parse(usuario) : "";
    const fetchData = async () => {
      const api = await axios(
        "https://pf-backend-mercadosolidario-production.up.railway.app/user/" +
          usuarioJSON.id
      );
      console.log(api.data);
      const promises = [];
      api.data.confirmed.forEach((e) => {
        promises.push(
          fetch(
            `https://pf-backend-mercadosolidario-production.up.railway.app/posts/${e.postIDs}`
          ).then((response) => response.json())
        );
      });

      Promise.all(promises).then((responses) => {
        const data = [];
        responses.forEach((response) => {
          data.push(response);
        });
        console.log(data);
        setResults(data);
      });
    };
    console.log("Llega hasta acá");
    fetchData();
  }, []);
  console.log(results);

  return (
    <div className="flex flex-wrap w-full flex-span-3 justify-center gap-4 mt-24">
      {results
        ? results.map((e) => (          
            <Card
              title={e.title}
              image={e.image}
              description={e.description}
              location={e.location}
              isVolunteer={e.type_of_help}
              expirationDate={e.expirationDate}
            />
          ))
        : "Loading"}
    </div>
  );
};

export async function getStaticProps() {
  const results = api.data;
  console.log(results);
  return {
    props: {
      results,
    },
  };
}
export default RutaUser;
