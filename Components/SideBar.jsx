import Link from "next/link";
import {BiQrScan, BiDonateHeart} from "react-icons/bi"

export default function SideBar() {
  return (
    <div className="bg-gray-50 w-screen">
      <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 p-2.5 shadow-lg backdrop-blur-lg fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
        
        {/*Link a Perfil*/}
        <Link
          href="/perfilusuario"
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-gray-200 text-black-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <small className="text-center text-xs font-medium"> Perfil </small>
        </Link>

        {/*Link a iniciativas postuladas*/}
        <Link
          href="/perfilusuario/iniciativas"
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-gray-200 text-black-600"
        >
          <BiDonateHeart className="w-6 h-6 shrink-0"/>
          <small class="text-center text-xs font-medium"> Causas activas </small>
        </Link>
        
        {/*Link a Lector de QR*/}
        <Link
          href="/perfilusuario/qr"
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-gray-200 text-black-600"
        >          
          <BiQrScan className="w-6 h-6 shrink-0"/>
          <small className="text-center text-xs font-medium">Escanear QR</small>
        </Link>

        <hr className="dark:border-gray-700/60" />
      </nav>
    </div>
  );
}
