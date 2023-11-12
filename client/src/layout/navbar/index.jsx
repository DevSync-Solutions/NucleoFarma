import "./navbar.css"
import Logo from "./logo"
import Categories from "./categories"
import { useEffect, useState } from "react"
import ToggleMenu from "./toggleMenu"
import { useMenuContext } from "../../context/menu"

const Navbar = ({ onFormTitleChange }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMenuOpen, closeMenu } = useMenuContext()

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
      <header>
        <nav id="nav" className={`${isScrolled ? 'nav-color' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
          <Logo />
          <ToggleMenu onFormTitleChange={onFormTitleChange} />
          <Categories onFormTitleChange={onFormTitleChange} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </nav>
      </header>
    </>
  )
}

export default Navbar