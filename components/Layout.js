import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="layout">
      
      <div className="page-content">
        <Navbar/>
        { children }
        <Footer/>
      </div>

      
    </div>
  )
}