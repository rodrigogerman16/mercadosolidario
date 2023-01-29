"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDonateHeart, BiUser, BiBuildings } from 'react-icons/bi'
import emailPost from "@/Components/emailPost";
import CreateONG from '../../Components/createONG'
import Formusers from "@/Components/Formusers";
import Formempresas from "@/Components/Formempresas";

export default function Register() {

  let [user, setUser] = useState(null)

  const [errors, setErrors] = useState({
    email: null,
    password: null,
    type: null,
  })

  const [step, setStep] = useState(1)
  const backHandler = (num) => {
    setStep(num)
  }

  /* First Handler */

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const isValidateEmail = (email) => {
    const match = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    return match != null
  }

  const firstHandler = () => {
    console.log(isValidateEmail(credentials.email));
    const email = !isValidateEmail(credentials.email) && "Ingrese un mail valido"
    const password = (credentials.password.length < 6 || credentials.password.length > 15) ? "Ingrese password valido" : false

    setErrors({ ...errors, email, password })
    console.log(errors);

    if (!password && !email) {
      setStep(2);
    }

    
  }

  /* Second Handler */

  const [accountType, setAccountType] = useState(false)

  const accountTypeHandler = (num) => {
    setAccountType(num)
    setErrors((prev) => { return { ...prev, type: false } })
  }

  const secondHandler = () => {
    if (accountType) {
      if (accountType === 1) {
        user = {
          ...user,
          type_of_user: "user"
        }

        setUser(user)
      }
      if (accountType === 2) {
        user = {
          ...user,
          type_of_user: "ong"
        }

        setUser(user)
      }
      if (accountType === 3) {
        user = {
          ...user,
          type_of_user: "company"
        }

        setUser(user)
      }
      console.log(user.email)
      console.log(user.password)
      console.log(user.type_of_user)
      setStep(3)
    } else {
      setErrors({ ...errors, type: "Selecciona un tipo de cuenta" })
    }
  }

  /* Third Handler */

  const thirdHandler = () => {

  }

  return (
    <div className="w-full max-w-md p-4 rounded-md sm:p-8 m-auto min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">

      {/* Steps */}
      <div className="my-8">
        <h2 className="sr-only">Steps</h2>
        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
          <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
            <li className="flex items-center bg-white p-2">
              <span onClick={() => backHandler(1)} className={`h-6 w-6 rounded-full text-center text-[10px] font-bold leading-6 cursor-pointer ${step == 1 ? "bg-pink-400 text-white" : "bg-gray-100"}`}>
                1
              </span>
            </li>
            <li className="flex items-center bg-white p-2">
              <span onClick={() => step == 3 && backHandler(2)} className={`h-6 w-6 rounded-full text-center text-[10px] font-bold leading-6 ${step == 2 ? "bg-pink-400 text-white" : "bg-gray-100"} ${step > 1 ? "cursor-pointer" : "cursor-not-allowed"}`}>
                2
              </span>
            </li>
            <li className="flex items-center bg-white p-2">
              <span onClick={() => step == 3 && backHandler(3)} className={`h-6 w-6 rounded-full text-center text-[10px] font-bold leading-6 ${step == 3 ? "bg-pink-400 text-white" : "bg-gray-100"} ${step == 3 ? "cursor-pointer" : "cursor-not-allowed"}`}>
                3
              </span>
            </li>
          </ol>
        </div>
      </div>

      <div className="w-full">{
        step == 1 && <div>
          <span className="block mb-2 text-xs font-semibold tracking-widest text-center uppercase dark:text-pink-400">Register</span>
          <h2 className="text-5xl font-bold text-center">Crea un usuario</h2>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
          </div>
          <p className="text-sm text-center dark:text-gray-400">Ya estas registrado?&nbsp;
            <Link href="/ingresar" rel="noopener noreferrer" className="focus:underline hover:underline">Inicia sesión</Link>
          </p>
          <form noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid my-8 w-full">
            <div className="space-y-4 w-full">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">Email address</label>
                <input type="email" value={credentials.email} onChange={handleChange} name="email" id="email" placeholder="ejemplo@mail.com" className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200" />
                {errors.email && <span className="w-full text-red-600">{errors.email}</span>}
              </div>
              <div className="space-y-2">
                <label htmlFor="password" name={"password"} className="text-sm">Password</label>
                <input type="password" value={credentials.password} onChange={handleChange} name="password" id="password" placeholder="********" className="rounded w-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:ring-0 focus:border-gray-200 focus:bg-gray200" />
                {errors.password && <span className="w-full text-red-600">{errors.password}</span>}
              </div>
            </div>
            <button type="button" className="w-full px-8 py-3 font-semibold  bg-black text-white hover:bg-zinc-800 transition-colors rounded" onClick={() => firstHandler()}>Siguiente</button>
            <div className="flex items-center w-full my-4">
              <hr className="w-full dark:text-gray-400" />
              <p className="px-3 dark:text-gray-400">OR</p>
              <hr className="w-full dark:text-gray-400" />
            </div>
          </form>
          <div className="my-6 space-y-4 w-full">
            <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border shadow focus:ring-0 w-full rounded">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-pink-400">
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Registrarse con Google</p>
            </button>
          </div>
        </div>
      }</div>


      <div className="w-full">
        {
          step == 2 && <div>
            <span className="block mb-2 text-xs font-semibold tracking-widest text-center uppercase dark:text-pink-400">Account type</span>
            <h2 className="text-5xl font-bold text-center">Selecciona tu tipo de cuenta</h2>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
            </div>
            <form noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid my-8 w-full">

              <div onClick={() => accountTypeHandler(1)} className={`max-w-sm p-6 bg-white border rounded shadow ${accountType == 1 ? "border-pink-400" : "border-gray-200"}`}>
                <BiUser className="w-10 h-10 mb-2 text-pink-400 " ></BiUser>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Usuario</h5>
                <p className="mb-3 font-normal text-gray-500">Podrás participar de las iniciativas como voluntario o donador.</p>
              </div>

              <div onClick={() => accountTypeHandler(2)} className={`max-w-sm p-6 bg-white border rounded shadow ${accountType == 2 ? "border-pink-400" : "border-gray-200"}`}>
                <BiDonateHeart className="w-10 h-10 mb-2 text-pink-400 " ></BiDonateHeart>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">ONG</h5>
                <p className="mb-3 font-normal text-gray-500">Podrás iniciar recolecciones para distintas causas.</p>
              </div>

              <div onClick={() => accountTypeHandler(3)} className={`max-w-sm p-6 bg-white border rounded shadow ${accountType == 3 ? "border-pink-400" : "border-gray-200"}`}>
                <BiBuildings className="w-10 h-10 mb-2 text-pink-400 " ></BiBuildings>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Empresa</h5>
                <p className="mb-3 font-normal text-gray-500">Podrás contactar con personas espirituales para una propuesta laboral.</p>
              </div>

              {errors.password && <span className="w-full text-red-600">{errors.password}</span>}
              {errors.type && <span className="w-full text-red-600">{errors.type}</span>}

              <button type="button" className="w-full px-8 py-3 font-semibold  bg-black text-white hover:bg-zinc-800 transition-colors rounded" onClick={() => secondHandler()}>Siguiente</button>
            </form>
          </div>
        }
      </div>

      <div className="w-full">
        {
          step == 3 && accountType == 1 && <div>
            <span className="block mb-2 text-xs font-semibold tracking-widest text-center uppercase dark:text-pink-400">Create account</span>
            <h2 className="text-5xl font-bold text-center">Completa el formulario</h2>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
            </div>
            <Formusers email={user.email} password={user.password} type_of_user={user.type_of_user}/>
          </div>
        }
      </div>

      <div className="w-full">
        {
          step == 3 && accountType == 2 && <div>
            <span className="block mb-2 text-xs font-semibold tracking-widest text-center uppercase dark:text-pink-400">Create account</span>
            <h2 className="text-5xl font-bold text-center">Completa el formulario</h2>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
            </div>
            <CreateONG email={user.email} password={user.password} type_of_user={user.type_of_user}/>
          </div>
        }
      </div>

      <div className="w-full">
        {
          step == 3 && accountType == 3 && <div>
            <span className="block mb-2 text-xs font-semibold tracking-widest text-center uppercase dark:text-pink-400">Create account</span>
            <h2 className="text-5xl font-bold text-center">Completa el formulario</h2>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
            </div>
            <Formempresas email={user.email} password={user.password} type_of_user={user.type_of_user}/>
          </div>
        }
      </div>

    </div >
  )
}
