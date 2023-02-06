import { useUser } from "@/hooks/user"

export default function Publicaciones(props){
    const userStringify = useUser()
    const user = userStringify && JSON.parse(userStringify)
    const userFinded = props.ong.filter(item => item.email === user.email)
    console.log(userFinded)
    return(
        <div>
            <h2>Mis Iniciativas</h2>
            {props.ong}
        </div>
    )
}


export async function getServerSideProps({req}){
    const posts = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/posts")
      .then((res) => res.json())
  
    const company = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/company")
      .then((res) => res.json())
  
    const ong = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/ong")
      .then((res) => res.json())
  
    const users = await fetch("https://pf-backend-mercadosolidario-production.up.railway.app/allusers")
      .then((res) => res.json())
    return{
      props: {
        posts,
        company,
        ong,
        users}
    }
  }