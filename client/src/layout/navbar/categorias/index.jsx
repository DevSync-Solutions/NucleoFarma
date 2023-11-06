import "./categorias.css"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

const Categorias = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  }

  return (
    <>
      <ul>
        <li><ScrollLink onClick={scrollToTop} smooth={true} duration={500}>Inicio</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="quienes-somos">¿Quiéres somos?</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="servicios">Servicios</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="distribucion">Distribución</ScrollLink></li>
        <li><ScrollLink smooth={true} duration={500} to="contacto">Contacto</ScrollLink></li>
      </ul>
    </>
  )
}

export default Categorias