import Link from "next/link";

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
        <nav>
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