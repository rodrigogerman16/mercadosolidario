import { useUser } from "@/hooks/user"
import Card from "@/Components/Card"
import Link from "next/link"
import OngSideBar from "@/Components/OngSideBar"
import React, { useState, useEffect } from "react";
import { useUser } from "@/hooks/user";
import Card from "@/Components/Card";
import Link from "next/link";

import QRCode from "qrcode";

export default function Publicaciones(props) {
  const userStringify = useUser();
  const user = userStringify && JSON.parse(userStringify);
  const userFinded =
    user && props.ong.filter((item) => item.email === user.email);

export default function Publicaciones(props){
    const userStringify = useUser()
    const user = userStringify && JSON.parse(userStringify)
    const userFinded = user && props.ong.filter(item => item.email === user.email)
    console.log(userFinded)
    
    return(
        <div className="w-3/4 m-auto mt-10">
          <OngSideBar/>
                      <h2 className="font-bold text-2xl text-center">Mis Causas</h2>
            <div className="grid w-full col-span-3 grid w-full sm:grid-cols-2 xl:grid-cols-2 gap-4 mt-24">

            {userFinded && userFinded.length ? userFinded[0]?.posts?.map(post => (

              post.isActive &&
              <Link
              className="w-full"
              key={post.id}
              href={`/iniciativas/${post.id}`}
              >
              <Card
              key={post.id}
              title={post.title}
              image={post.image}
              description={post.description}
              province={post.province}
              isVolunteer={post.type_of_help}
              expirationDate={post.expirationDate}
            />
              </Link>

            ))
          :
          <div className="h-64 flex items-center">
          <p className="font-semibold text-2xl">Actualmente no estas colaborando con ninguna Iniciativa</p>
        </div>}

            </div>
        </div>
    )
  const [qrCode, setQrCode] = useState({});

  const generateQRCode = async (id) => {
    const code = await QRCode.toDataURL(id);
    setQrCode(code);
  };

  return (
    <div className="w-3/4 m-auto mt-10">
      <h2 className="font-bold text-2xl text-center">Mis Iniciativas</h2>
      <div className="grid w-full col-span-3 grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-24">
        {userFinded &&
          userFinded[0].posts.map(
            (post) =>
              post.isActive && (
                <div>
                  <Card
                    key={post.id}
                    title={post.title}
                    image={post.image}
                    description={post.description}
                    province={post.province}
                    isVolunteer={post.type_of_help}
                    expirationDate={post.expirationDate}
                    render={() => (
                      <>
                        <button
                          onClick={() =>
                            generateQRCode(post.id, post.type_of_help)
                          }
                          type="button"
                          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          Generar QR
                        </button>
                        {console.log(qrCode)}
                        {qrCode ? (
                          <img src={qrCode} />
                        ) : (
                          <h3>Error al Generar QR</h3>
                        )}
                      </>
                    )}
                  />
                </div>
              )
          )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const posts = await fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/posts"
  ).then((res) => res.json());

  const company = await fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/company"
  ).then((res) => res.json());

  const ong = await fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/ong"
  ).then((res) => res.json());

  const users = await fetch(
    "https://pf-backend-mercadosolidario-production.up.railway.app/allusers"
  ).then((res) => res.json());
  return {
    props: {
      posts,
      company,
      ong,
      users,
    },
  };
}
