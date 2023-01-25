import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import Image from "next/image";

const account = () =>{

    const {data: session, status} = useSession()
   

    if(status === 'authenticated'){
        return(
            <div>
                <div>Hola {session.user.name}</div>
                <Image src={session.user.image} width={50} height={50} className={"rounded-3xl"} alt=""/>                
                <button onClick={() => signOut()}>signOut</button>
            </div>
        );
    }
    else{
        return(
            <div>No estas logeado</div>
        );
    }
}

export default account;

export const getServerSideProps = async(context) => {
    const session = await getSession(context)

    return{
        props:{session},
    }
}