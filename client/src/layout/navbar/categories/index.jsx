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

  const closeMenuExt = () => {
    setTimeout(() => {
      closeMenu()
    }, 800)
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
      closeMenuExt()
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
    sessionStorage.removeItem('userId')
    if (isMenuOpen) {
      closeMenu()
    }
  }

  return (
    <>
      <ul className={className ? `${className}` : "categories"}>
        {isHomePage ? <ScrollLink onClick={scrollToTop} smooth={true} duration={500} to="/"><li>Inicio</li></ScrollLink> : <Link to="/" onClick={() => handleLinkClick("nav")}><li>Inicio</li></Link>}
        {isHomePage ? <ScrollLink onClick={closeMenu} smooth={true} duration={500} to="quienes-somos" offset={-30}><li>¿Quiénes somos?</li></ScrollLink> : <Link to="/" onClick={() => handleLinkClick("quienes-somos")}><li>¿Quiénes somos?</li></Link>}
        {isHomePage ? <ScrollLink onClick={closeMenu} smooth={true} duration={500} to="servicios" offset={-105}><li>Servicios</li></ScrollLink> : <Link to="/" onClick={() => handleLinkClick("servicios")}><li>Servicios</li></Link>}
        {isHomePage ? <ScrollLink onClick={closeMenu} smooth={true} duration={500} to="distribucion" offset={-105}><li>Distribución</li></ScrollLink> : <Link to="/" onClick={() => handleLinkClick("distribucion")}><li>Distribución</li></Link>}
        {isHomePage ? <ScrollLink smooth={true} duration={500} to="contacto" offset={-110} onClick={handleTitleWork}><li>Trabajá en Nucleo</li></ScrollLink> : <Link to="/" onClick={() => { handleLinkClick("contacto"), onFormTitleChange("¿Querés trabajar") }}><li>Trabajá en Nucleo</li></Link>}
        {isHomePage ? <ScrollLink smooth={true} duration={500} to="contacto" offset={-110} onClick={handleTitleContact}><li>Contacto</li></ScrollLink> : <Link to="/" onClick={() => { handleLinkClick("contacto"), onFormTitleChange("¿Necesitás comunicarte") }}><li>Contacto</li></Link>}
        {token ? <a href="/" onClick={closeSession}><Button className="no-animation">Cerrar sesión</Button></a> : <Link to="/registro" onClick={scrollToTop}><Button>Proveedores</Button></Link>}
      </ul>
    </>
  )
}

export default Categories