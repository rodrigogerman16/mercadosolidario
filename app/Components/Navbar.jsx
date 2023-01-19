import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/mercado-solidario-logo.jpg"

const links = [{
    label: 'Inicio',
    route: '/'
},
{
    label: 'Iniciativas',
    route: '/iniciativas'
},
{
    label: 'FAQ',
    route: '/faq'
},
{
    label: 'Ingresar',
    route: '/ingresar'
}]

export default function Navbar(){
    return(
        <nav className="bg-gray-900">
            <Image src={logo} alt='logo'/>
            <ul>
                {links.map(({label, route}) =>(
                    <li key={route}>
                    <Link href={route}>
                        {label}
                    </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}