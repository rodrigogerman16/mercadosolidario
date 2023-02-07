import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import QrCodeReader, { QRCode } from "react-qrcode-reader";
const RutaUser = () => {
  const [results, setResults] = useState();
  const [val, setVal] = React.useState("");
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
  const value = (val) => {
    console.log(val.chunks[0].text);
    return "hola";
  };

  return (
    <div>
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
      <QrCodeReader
        delay={5000}
        width={600}
        height={500}
        action={setVal}
        onRead={value}
      />
      <p>{val} hola</p>
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
