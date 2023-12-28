import "./navbar.css"
import Logo from "./logo"
import Categories from "./categories"
import { useEffect, useState } from "react"
import ToggleMenu from "./toggleMenu"
import { useMenuContext } from "../../context/menu"
import { MdEmail } from "react-icons/md"
import { IoMdPin } from "react-icons/io";
import { FaPhoneAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"

const Navbar = ({ onFormTitleChange }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMenuOpen, closeMenu } = useMenuContext()
  const location = useLocation()

  useEffect(() => {
    let scrollTimeout

    const handleScroll = () => {
      clearTimeout(scrollTimeout)

      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }, 150)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isHomePage = location.pathname === '/';
  
  return (
    <>
      {isHomePage && (
        <header>
          <div className="header">
            <div className="header-contact">
              <p><FaPhoneAlt /> +54 (011) 3696-6253</p>
              |
              <p><MdEmail /> info@nucleofarmaweb.com.ar</p>
              |
              <p><IoMdPin /> Habana 3336, Villa Devoto, Buenos Aires</p>
            </div>
            <div className="header-social">
              <Link to="https://www.linkedin.com/company/nucleofarma-sa" target="_blank"><FaLinkedinIn /></Link>
              <Link to="https://api.whatsapp.com/send?phone=541136966253&text=¡Hola! Me contacto con Nucleo Farma porque..." target="_blank"><FaWhatsapp /></Link>
            </div>
          </div>
        </header>
      )}
      <nav id="nav" className={`${isMenuOpen ? 'menu-open' : ''}`}>
        <Logo />
        <ToggleMenu onFormTitleChange={onFormTitleChange} />
        <Categories onFormTitleChange={onFormTitleChange} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      </nav>
    </>
  )
}

export default Navbar