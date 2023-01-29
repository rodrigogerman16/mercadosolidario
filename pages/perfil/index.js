import { useRouter } from "next/router";

export default function Perfil() {

    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem('user');
        alert("Deslogeado Satisfactoriamente")
        router.push('/')
    }



    return(
        <button onClick={() => handleLogout()}>Deslogearse</button>
    )
}