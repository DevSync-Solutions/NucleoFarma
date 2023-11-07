import "./categorias.css"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

const Categorias = ({ onFormTitleChange }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  }

  return (
    <>
      <ul>
        <li><ScrollLink onClick={scrollToTop} smooth={true} duration={500}>Inicio</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="quienes-somos" offset={-70}>¿Quiéres somos?</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="servicios" offset={-70}>Servicios</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="distribucion">Distribución</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="contacto" offset={-70} onClick={() => onFormTitleChange("¿Querés trabajar con nosotros?")}>Trabaja en Nucleo</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="contacto" offset={-70} onClick={() => onFormTitleChange("¿Necesitas comunicarte con nosotros?")}>Contacto</ScrollLink></li>
      </ul>
    </>
  )
}

export default Categorias