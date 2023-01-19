import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <span>Hols</span>
      </div>
      <Footer/>
    </div>
  )
}
