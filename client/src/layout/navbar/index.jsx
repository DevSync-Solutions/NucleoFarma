import "./navbar.css"
import Logo from "./logo"
import Categorias from "./categorias"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav className={isScrolled ? 'nav-color' : ''}>
        <Logo />
        <Categorias />
      </nav>
    </>
  )
}

export default Navbar