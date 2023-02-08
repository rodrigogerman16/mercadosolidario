import React, {useState, useEffect } from "react";
import SideBar from "@/Components/SideBar";
import Html5QrcodePlugin from "../Html5QrcodePlugin"
import axios from "axios";
import Alert from "@/Components/Alert";
import QrCodeReader, { QRCode } from 'react-qrcode-reader';

export default function Qr(){
  /*Estos son los estados que venian por defecto con la libreria 'Html5QrcodePlugin' Delwin */
  const [decodedText, setDecodedText] = useState()
  const [decodedResult, setDecodedResult] = useState()

  const [val, setVal] = useState();
  const [idUser, setIdUser] = useState();
  const [emailUser, setEmailUser] = useState();

  useEffect(() => {
    async function fetchData(){ 
      const usuario = window.localStorage.getItem("user");
        const usuarioJSON = usuario && JSON.parse(usuario);
        console.log(usuarioJSON)
        setIdUser(usuarioJSON.id);
        setEmailUser(usuarioJSON.email);
    }

    fetchData();
  }, [])
  
  /*Este es el metodo que se ejecuta si lee la data codificada del codigo QR */
  // const onNewScanResult = async (text, result) => {
  //   setDecodedResult(result)
  //   setDecodedText(text)
  // };

  const onNewScanResult = async (text) => {
    try {
      const infoIniciativa = await axios('https://pf-backend-mercadosolidario-production.up.railway.app/posts/' + text.data, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        }
      })
      await axios.post('https://pf-backend-mercadosolidario-production.up.railway.app/confirmed/newconfirmed', {userIDs: idUser, postIDs: infoIniciativa.data.id, type_of_help: infoIniciativa.data.type_of_help, readQR: true})
      
      await axios.put('https://pf-backend-mercadosolidario-production.up.railway.app/user/update/insignia/' + idUser, {type_of_insignia: infoIniciativa.data.type_of_help},
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        }
      })

      await axios.post('https://pf-backend-mercadosolidario-production.up.railway.app/mailer/confirmed', {email: emailUser, type_of_help: infoIniciativa.data.type_of_help},
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        }
      })

      Alert({
        title: `${infoIniciativa.data.type_of_help.charAt(0).toUpperCase() + infoIniciativa.data.type_of_help.slice(1)} confirmado!`,
        text: "Muchas gracias por ser parte y hacer de este mundo un lugar mejor, con personas como tu la humanidad crece, te saludamos y deseamos lo mejor para ti.",
        icon: "success",
      });
  
      // window.location.href = '/perfilusuario/iniciativas'  
    } catch (error) {
      console.log(error)
      Alert({
        title: `Error en escaneo QR!`,
        text: "Lo sentimos, tuvimos un problema, intenta nuevamente!",
        icon: "error"
      });
      // window.location.reload()
    }
   
  };
  
    return(
    <div>
      <SideBar/>
      <div className="m-16 flex flex-col items-center justify-center h-96">
        <h1 className="font-semibold w-3/5 text-center text-2xl">Escanea aqui el código QR de la causa a la que estás ayudando!</h1>
        <div className="text-center mt-3 mb-16">
          <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
        </div>
        {/* <Html5QrcodePlugin
          fps={10}
          qrbox ={ 500 }
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        /> */}
        <QrCodeReader delay={5000} width={450} height={450} action={setVal} onRead = {onNewScanResult}/>
      </div>
    </div>
    )
}
