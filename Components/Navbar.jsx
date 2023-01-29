import {useSession} from "next-auth/react";
import UserNavbar from "./UserNavbar";
import OngNavbar from "./OngNavbar";
import DefaultNavbar from "./DefaultNavbar";
import CompaniesNavbar from "./CompaniesNavbar";


export default function Navbar() {
    const {data: session} = useSession()
    if(!session || !session.role){
        return (
            <DefaultNavbar/>
        )
    }
    
    if(session.role === 'user'){
        return (
           <UserNavbar/>
        )
    }
    if(session.role === 'ong'){
        return(
            <OngNavbar/>
        )
    }
    if(session.role === 'companies'){
        return(
            <CompaniesNavbar/>
        )
    }
}