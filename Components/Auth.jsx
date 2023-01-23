"use client"
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Auth(){
  const clientID = "83937004907-369gq7o4ocbnfb4u9v9md1dgg197uc2g.apps.googleusercontent.com"
  const [user, setUser] = useState({})
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const onSuccess = (response) => {
    setUser(response.profileObj)
  }

  const onFailure = () => {
    console.log("Algo salio mal (auth, linea 26)");
  }
  console.log(user);
  return(
    <div>
      <GoogleLogin clientId={clientID} onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={"single_host_policy"} />
      <div className={user? "profile" : "hidden"} ></div>
      {user.imageUrl && <Image src={user.imageUrl} width={30} height={30}  />}
      <h3>{user.name}</h3>
    </div>
  )
}