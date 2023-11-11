import { useEffect, useState } from "react";
import "./categories.css"
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { Button } from "../../../components/button";

const Categories = ({ className, onFormTitleChange, closeMenu, isMenuOpen, handleFormRef }) => {
  const [shouldScroll, setShouldScroll] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 })
    if (isMenuOpen) {
      closeMenu()
    }
  }

  useEffect(() => {
    if (shouldScroll) {
      scroll.scrollTo(document.getElementById(shouldScroll).offsetTop - 85)
      setShouldScroll(false)
    }
  }, [shouldScroll, onFormTitleChange])

  const handleLinkClick = (sectionId) => {
    setShouldScroll(sectionId)
    if (isMenuOpen) {
      closeMenu()
    }
  }

  const handleTitleWork = () => {
    onFormTitleChange("¿Querés trabajar")
    if (handleFormRef) {
      handleFormRef()
    }
    if (isMenuOpen) {
      closeMenu()
    }
  }

  const handleTitleContact = () => {
    onFormTitleChange("¿Necesitás comunicarte")
    if (handleFormRef) {
      handleFormRef()
    }
    if (isMenuOpen) {
      closeMenu()
    }
  }

  const isHomePage = window.location.pathname === '/'

  return (
    <>
      <ul className={className ? `${className}` : "categories"}>
        <li>{isHomePage ? <ScrollLink onClick={scrollToTop} smooth={true} duration={500} to="/">Inicio</ScrollLink> : <Link to="/" onClick={() => handleLinkClick("nav")}>Inicio</Link>}</li>
        <li>{isHomePage ? <ScrollLink onClick={closeMenu} smooth={true} duration={500} to="quienes-somos" offset={-85}>¿Quiénes somos?</ScrollLink> : <Link to="/" onClick={() => handleLinkClick("quienes-somos")}>¿Quiénes somos?</Link>}</li>
        <li>{isHomePage ? <ScrollLink onClick={closeMenu} smooth={true} duration={500} to="servicios" offset={-85}>Servicios</ScrollLink> : <Link to="/" onClick={() => handleLinkClick("servicios")}>Servicios</Link>}</li>
        <li>{isHomePage ? <ScrollLink onClick={closeMenu} smooth={true} duration={500} to="distribucion" offset={-85}>Distribución</ScrollLink> : <Link to="/" onClick={() => handleLinkClick("distribucion")}>Distribución</Link>}</li>
        <li>{isHomePage ? <ScrollLink smooth={true} duration={500} to="contacto" offset={-110} onClick={handleTitleWork}>Trabajá en Nucleo</ScrollLink> : <Link to="/" onClick={() => { handleLinkClick("contacto"), onFormTitleChange("¿Querés trabajar") }}>Trabajá en Nucleo</Link>}</li>
        <li>{isHomePage ? <ScrollLink smooth={true} duration={500} to="contacto" offset={-110} onClick={handleTitleContact}>Contacto</ScrollLink> : <Link to="/" onClick={() => { handleLinkClick("contacto"), onFormTitleChange("¿Necesitás comunicarte") }}>Contacto</Link>}</li>
        <li><Link to="/register"><Button>Ingresar</Button></Link></li>
      </ul>
    </>
  )
}

export default Categories