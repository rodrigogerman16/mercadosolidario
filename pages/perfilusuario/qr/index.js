import React from "react";
import SideBar from "@/Components/SideBar";
import Html5QrcodePlugin from "../Html5QrcodePlugin"
import QrCodeReader, { QRCode } from "react-qrcode-reader";

export default function Qr(){
  
  const [val, setVal] = React.useState("");

  
  const value = (val) => {
    console.log(val.chunks[0].text);
    return "hola";
  };

    const onNewScanResult = (text, result) => {
        setDecodedText(text);
        setDecodedResult(result);
      };
    return(
    <div>
    <SideBar/>
    <div className="flex flex-col items-center justify-center h-96">

    <h1 className="font-semibold text-2xl my-8">Escanea aqui tu QR</h1>
    <Html5QrcodePlugin
      fps={10}
      qrbox={250}
      disableFlip={false}
      qrCodeSuccessCallback={onNewScanResult}
    />
    
    <QrCodeReader
        delay={5000}
        width={600}
        height={500}
        action={setVal}
        onRead={value}
      />
      <p>{val} hola</p>
    </div>

    </div>
    )
}
