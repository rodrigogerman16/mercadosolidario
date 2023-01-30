"use client";
import UserNavbar from "./UserNavbar";
import OngNavbar from "./OngNavbar";
import DefaultNavbar from "./DefaultNavbar";
import CompaniesNavbar from "./CompaniesNavbar";
import { useUser } from "../hooks/user.js";

export default function Navbar() {
  const user = useUser();
  const userObject = user && JSON.parse(user)
  console.log(userObject)
  
  return(
    <div>
    {(user && userObject.type_of_user === "user") && <UserNavbar />}
    {(user && userObject.type_of_user === "ong") && <OngNavbar />}
    {(user && userObject.type_of_user === "company") && <CompaniesNavbar />}
    
    {(!user) && <DefaultNavbar/>}

    </div>
  )  
}
