import Chatbot from "@/Components/Chatbot";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Router, useRouter } from "next/router";

export default function App({ Component, pageProps, session }) {
  const router = useRouter()

  if (router.pathname === '/dashboard' || /^\/dashboard\//.test(router.pathname))
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
  else
    return (
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <Chatbot></Chatbot>
        <Footer />
      </SessionProvider>
    );
}
