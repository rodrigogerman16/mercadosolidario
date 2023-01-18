import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/mercado-solidario-logo.jpg"

const links = [{
    label: 'Home',
    route: '/'
},
{
    label: 'Find initiatives',
    route: '/find'
},
{
    label: 'FAQ',
    route: '/faq'
},
{
    label: 'Login',
    route: '/login'
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