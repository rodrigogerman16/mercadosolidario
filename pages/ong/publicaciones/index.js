
export default function Publicaciones(props){
    
    return(
        <div>
            Ruta Publicaciones
            {console.log(props.ong)}
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