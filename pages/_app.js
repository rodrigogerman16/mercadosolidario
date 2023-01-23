import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <Footer></Footer>
  </div>
}
