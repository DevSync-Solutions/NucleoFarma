import { useEffect, useState } from "react";
import "./categories.css"
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { Button } from "../../../components/button"
import { useForm } from '../../../context/form'

const Categories = ({ className, onFormTitleChange, isMenuOpen, closeMenu }) => {
  const [shouldScroll, setShouldScroll] = useState(false)
  const { formRef, handleFormRef } = useForm()
  const location = useLocation()

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
    if (isHomePage) {
      if (formRef) {
        handleFormRef()
      }
    }
    if (isMenuOpen) {
      closeMenu()
    }
  }

  const handleTitleContact = () => {
    onFormTitleChange("¿Necesitás comunicarte")
    if (isHomePage) {
      if (formRef) {
        handleFormRef()
      }
    }
    if (isMenuOpen) {
      closeMenu()
    }
  }

  const isHomePage = location.pathname === '/'

  const token = sessionStorage.getItem('token') || null

  const closeSession = () => {
    sessionStorage.removeItem('token')
    if (isMenuOpen) {
      closeMenu()
    }
  }

  return (
    <>
      <ul className={className ? `${className}` : "categories"}>
        <li>{isHomePage ? <ScrollLink onClick={scrollToTop} smooth={true} duration={500} to="/">Inicio</ScrollLink> : <Link to="/" onClick={() => handleLinkClick("nav")}>Inicio</Link>}</li>
        <li>{isHomePage ? <ScrollLink onClick={closeMenu} smooth={true} duration={500} to="quienes-somos" offset={-85}>¿Quiénes somos?</ScrollLink> : <Link to="/" onClick={() => handleLinkClick("quienes-somos")}>¿Quiénes somos?</Link>}</li>
        <li>{isHomePage ? <ScrollLink onClick={closeMenu} smooth={true} duration={500} to="servicios" offset={-85}>Servicios</ScrollLink> : <Link to="/" onClick={() => handleLinkClick("servicios")}>Servicios</Link>}</li>
        <li>{isHomePage ? <ScrollLink onClick={closeMenu} smooth={true} duration={500} to="distribucion" offset={-85}>Distribución</ScrollLink> : <Link to="/" onClick={() => handleLinkClick("distribucion")}>Distribución</Link>}</li>
        <li>{isHomePage ? <ScrollLink smooth={true} duration={500} to="contacto" offset={-110} onClick={handleTitleWork}>Trabajá en Nucleo</ScrollLink> : <Link to="/" onClick={() => { handleLinkClick("contacto"), onFormTitleChange("¿Querés trabajar") }}>Trabajá en Nucleo</Link>}</li>
        <li>{isHomePage ? <ScrollLink smooth={true} duration={500} to="contacto" offset={-110} onClick={handleTitleContact}>Contacto</ScrollLink> : <Link to="/" onClick={() => { handleLinkClick("contacto"), onFormTitleChange("¿Necesitás comunicarte") }}>Contacto</Link>}</li>
        <li>{token ? <a href="/" onClick={closeSession}><Button>Cerrar sesión</Button></a> : <Link to="/registro" onClick={isMenuOpen && closeMenu}><Button>Proveedores</Button></Link>}</li>
      </ul>
    </>
  )
}

export default Categories