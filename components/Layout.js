import Link from 'next/link'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
                
            </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <Footer/>
    </div>
  )
}