import Link from "next/link";
import {BiQrScan} from "react-icons/bi"

export default function SideBar() {
  return (
    <div class="bg-gray-50 w-screen">
      <nav class="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 p-2.5 shadow-lg backdrop-blur-lg fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
        
        {/*Link a Perfil*/}
        <Link
          href="/perfilusuario"
          class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-gray-200 text-black-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <small class="text-center text-xs font-medium"> Perfil </small>
        </Link>

        {/*Link a iniciativas postuladas*/}
        <Link
          href="/perfilusuario/iniciativas"
          class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-gray-200 text-black-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>

          <small class="text-center text-xs font-medium"> Analytics </small>
        </Link>
        
        {/*Link a Lector de QR*/}
        <Link
          href="/perfilusuario/qr"
          class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-gray-200 text-black-600"
        >          
          <BiQrScan className="w-6 h-6 shrink-0"/>
          <small class="text-center text-xs font-medium">Escanear QR</small>
        </Link>

        <hr class="dark:border-gray-700/60" />
      </nav>
    </div>
  );
}
