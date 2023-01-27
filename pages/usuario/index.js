import React from "react";
import {signOut, getSession } from "next-auth/react";
import Image from "next/image";

const Account = ({session}) =>{
    const {user} = session;
        return(
            <div>
                <div>Hola {user.name}</div>
                <Image src={user.image} width={50} height={50} className={"rounded-3xl"} alt=""/>                
                <button onClick={() => signOut()}>signOut</button>
            </div>
        );
}

export default Account;

export const getServerSideProps = async(context) => {
    const session = await getSession(context)
    if(!session){
        return {
            redirect: {
                destination: '/ingresar',
            },
        };
    }
    return{
        props:{session},
    }
}