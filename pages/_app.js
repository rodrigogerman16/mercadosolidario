import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Router, useRouter } from "next/router";

export default function App({ Component, pageProps, session }) {
  const router = useRouter()

  if (router.pathname == '/dashboard')
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  else
    return (
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    );
}
