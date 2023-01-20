import Link from "next/link";
import logo from "../Assets/mercado-solidario-logo.jpg"

const links = [{
    label: 'Home',
    route: '/'
},
{
    label: 'Find initiatives',
    route: '/iniciativas'
},
{
    label: 'FAQ',
    route: '/faq'
},
{
    label: 'Login',
    route: '/login'
}]

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt='logo' />
            <ul>
                {links.map(({ label, route }) => (
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