import "./navbar.css"
import Logo from "./logo"
import Categories from "./categories"
import { useEffect, useState } from "react"
import ToggleMenu from "./toggleMenu"

const Navbar = ({ onFormTitleChange, handleFormRef }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen)
  }

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
          <ToggleMenu onFormTitleChange={onFormTitleChange} onToggleMenu={handleToggleMenu} />
          <Categories onFormTitleChange={onFormTitleChange} handleFormRef={handleFormRef} />
        </nav>
      </header>
    </>
  )
}

export default Navbar