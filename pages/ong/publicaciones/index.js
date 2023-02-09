import { useUser } from "@/hooks/user";
import React, { useState } from "react";
import Card from "@/Components/Card";
import Link from "next/link";
import OngSideBar from "@/Components/OngSideBar";
import QRCode from "qrcode";

export default function Publicaciones(props) {
  const userStringify = useUser();
  const user = userStringify && JSON.parse(userStringify);
  const userFinded =
    user && props.ong.filter((item) => item.email === user.email);

  const [qrCode, setQrCode] = useState({});
  const generateQRCode = async (id) => {
    const $modal = document.getElementById("defaultModal");

    if ($modal.classList.contains("hidden")) {
      $modal.classList.remove("hidden");
    } else {
      $modal.classList.add("hidden");
      return;
    }
    const code = await QRCode.toDataURL(id);
    setQrCode(code);
  };

  return (
    <div className="w-3/4 m-auto mt-10">
      <OngSideBar />
      <h2 className="font-bold text-2xl text-center">Mis Causas</h2>
      <div className="grid w-full col-span-3 grid w-full sm:grid-cols-2 xl:grid-cols-2 gap-4 mt-24">
        {userFinded && userFinded.length ? (
          userFinded[0]?.posts?.map(
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
                  />
                  <>
                    <button
                      onClick={() => generateQRCode(post.id, post.type_of_help)}
                      type="button"
                      class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Generar QR
                    </button>
                    {console.log(qrCode)}
                    {qrCode ? (
                      <div
                        id="defaultModal"
                        tabindex="-1"
                        aria-hidden="true"
                        class="fixed top-0 left-0 right-0 hidden z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full absolute h-screen flex justify-center items-center"
                      >
                        <div class="relative w-full h-full max-w-2xl md:h-auto">
                          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                QR de Tu Iniciativa
                              </h3>
                              <button
                                type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal"
                                onClick={() => generateQRCode()}
                              >
                                <svg
                                  aria-hidden="true"
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                <span class="sr-only"></span>
                              </button>
                            </div>
                            <div class="p-6 space-y-6">
                              <img className="w-2/4 h-2/4" src={qrCode} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <h3>Error al Generar QR</h3>
                    )}
                  </>
                </div>
              )
          )
        ) : (
          <div className="h-64 flex items-center">
            <p className="font-semibold text-2xl">
              Actualmente no creaste ninguna Iniciativa
            </p>
          </div>
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
