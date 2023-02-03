import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/mercado-solidario-logo.jpg";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import { useUser } from "../hooks/user.js";
import Router from "next/router";
import Alert from "./Alert";

export default function UserNavbar() {
  const { data: session } = useSession();
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    if (session) {
      await fetch("/auth/signout", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (response.status === 200) {
            signOut()
            localStorage.removeItem("user");
            Alert({
              title: "Cuenta",
              text: "Cerraste sesión satisfactoriamente",
              icon: "success",
            });
            Router.push("/");
            window.location.reload();
          } else {
            Alert({
              title: "Cuenta",
              text: "Error signing out of Google",
              icon: "error",
            });
          }
        })
        .catch((error) => {
          Alert({
            title: "Cuenta",
            text: "Error signing out of Google" + error,
            icon: "error",
          });
        });
    }
    localStorage.removeItem("user");
    Alert({
      title: "Cuenta",
      text: "Cerraste sesión satisfactoriamente",
      icon: "success",
    });
    Router.push("/");
    window.location.reload();
  };

  if (user) {
    console.log(user)
    return (
      <div>
        <nav className="bg-white py-4">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex w-full items-center justify-between">
                <div className="flex-shrink-0">
                  <Link href={"/"}>
                    <Image
                      src={logo}
                      className="h-10 mr-3 sm:h-12 w-auto"
                      alt="Mercado Solidario Logo"
                    />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 gap-4">
                    <Link
                      href="/" //  hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium
                      className="font-semibold text-black hover:text-pink-400"
                    >
                      Inicio
                    </Link>

                    <Link
                      href="/iniciativas"
                      className="font-semibold text-black hover:text-pink-400"
                    >
                      Iniciativas
                    </Link>

                    <Link
                      href="/faq"
                      className="font-semibold text-black hover:text-pink-400"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
                <div className="hidden gap-4 md:flex">
                  <button
                    onClick={() => handleSignOut()}
                    className="font-semibold px-6 py-2 hover:text-pink-400 transition-colors rounded"
                  >
                    Cerrar sesion
                  </button>
                  <Image
                    src={user.image ? user.image : logo}
                    width={50}
                    height={50}
                    className="rounded-3xl cursor-pointer object-contain"
                    alt="profile"
                  />
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-black"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <Image
                      className="block rounded-3xl"
                      src={user.image ? user.image : logo}
                      width={50}
                      height={50}
                      alt="profile"
                    />
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="flex flex-col items-center gap-4 px-2 pt-2 pb-3 space-y-1 sm:px-3"
                >
                  <Link
                    href="/" //  hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium
                    className="font-semibold text-black hover:text-pink-400"
                  >
                    Inicio
                  </Link>

                  <Link
                    href="/iniciativas"
                    className="font-semibold text-black hover:text-pink-400"
                  >
                    Iniciativas
                  </Link>

                  <Link
                    href="/faq"
                    className="font-semibold text-black hover:text-pink-400"
                  >
                    FAQ
                  </Link>
                  <Link
                    href=""
                    className="font-semibold text-black px-6 py-2 hover:text-pink-400"
                  >
                    Perfil
                  </Link>
                  <button
                    onClick={() => handleSignOut()}
                    className="font-semibold text-white bg-pink-400 px-6 py-2 hover:bg-pink-300 transition-colors rounded"
                  >
                    Cerrar sesion
                  </button>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    );
  }
}
