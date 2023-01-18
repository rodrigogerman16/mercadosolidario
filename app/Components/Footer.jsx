import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/mercado-solidario-logo.jpg"

export default function Footer(){
    return(
        <div>
            <div className="flex w-64">
                <div>
                    <Image src={logo} alt="logo" className="w-14 h-14"/>
                </div>
                <div>
                    <span>Síganos:</span>
                    <Link href="#">IG</Link>
                    <Link href="#">FC</Link>
                </div>
                <div>
                    <Link href="#">QUIENES SOMOS</Link>
                    <Link href="#">QUE HACEMOS</Link>
                    <Link href="#">ULTIMOS ANUNCIOS</Link>
                </div>
            </div>
            <hr/>
            <div>
                <div>
                    <span>@2023 Mercado Solidario - Organizacion sin fines de lucro</span>
                    <Link href="#">Política de privacidad</Link>
                    <Link href="#">Términos y condiciones</Link>
                </div>
                <div>
                    <Link href="#">Creditos</Link>
                </div>

            </div>
        </div>
    )
}