import Link from 'next/link'

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

      
    </div>
  )
}