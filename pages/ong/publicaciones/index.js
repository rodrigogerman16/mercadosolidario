import { useUser } from "@/hooks/user"
import Card from "@/Components/Card"
import Link from "next/link"

export default function Publicaciones(props){
    const userStringify = useUser()
    const user = userStringify && JSON.parse(userStringify)
    const userFinded = user && props.ong.filter(item => item.email === user.email)
    
    
    return(
        <div className="w-3/4 m-auto mt-10">
            <h2 className="font-bold text-2xl text-center">Mis Iniciativas</h2>
            <div className="grid w-full col-span-3 grid w-full sm:grid-cols-2 xl:grid-cols-2 gap-4 mt-24">
            {userFinded && userFinded[0].posts.map(post => (
              <Link
              className="w-full"
              key={post.id}
              href={`/iniciativas/${post.id}`}
              >
              <Card
              key={post.id}
              title={post.title}
              image={post.image}
              description={post.description}
              province={post.province}
              isVolunteer={post.type_of_help}
              expirationDate={post.expirationDate}
            />
              </Link>
            ))}
            </div>
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