import "./categories.css"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

const Categories = ({ onFormTitleChange }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  }

  return (
    <>
      <ul>
        <li><ScrollLink onClick={scrollToTop} smooth={true} duration={500}>Inicio</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="quienes-somos" offset={-85}>¿Quiéres somos?</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="servicios" offset={-85}>Servicios</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="distribucion" offset={-85}>Distribución</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="contacto" offset={-100} onClick={() => onFormTitleChange("¿Querés trabajar")}>Trabaja en Nucleo</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="contacto" offset={-100} onClick={() => onFormTitleChange("¿Necesitas comunicarte")}>Contacto</ScrollLink></li>
      </ul>
    </>
  )
}

export default Categories