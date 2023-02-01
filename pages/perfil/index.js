import Alert from "@/Components/Alert";
import { useRouter } from "next/router";

export default function Perfil() {

    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem('user');
        Alert({ title: 'Cuenta', text: 'Cerraste sesión satisfactoriamente.', icon: 'success' })
        router.push('/')
    }



    return (
        <button onClick={() => handleLogout()}>Deslogearse</button>
    )
}