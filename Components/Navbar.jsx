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
        <nav className="flex justify-between m-auto w-11/12 h-24">
            <div className="flex items-center">                
                <Link href={'/'}>
                    <Image src={logo} alt='logo' className="w-32" />
                </Link>
            </div>
            <ul className="flex gap-8 items-center font-hind font-semibold text-lg">
                {links.map(({label, route}) =>(
                    <li key={route} className='hover:text-pink-500'>
                    <Link href={route}>
                        {label}
                    </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}