import { Link } from "react-router-dom"
import TopPage from "../../components/topPage"
import { useMenuContext } from "../../context/menu"
import { MdEmail } from "react-icons/md"
import { IoMdPin } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import "./footer.css"

function Footer() {
  const { isMenuOpen, closeMenu } = useMenuContext()

  return (
    <footer className="footer">
      <div className="footer-div">
        <div className="footer-contact">
          <h3>Droguería Nucleo Farma S.A.</h3>
          <p>C.U.I.T: 30-67582905-7</p>
          <Link to="/condiciones" onClick={isMenuOpen && closeMenu}><p>Términos y condiciones.</p></Link>
          <Link to="/privacidad" onClick={isMenuOpen && closeMenu}><p>Política de privacidad.</p></Link>
          <Link to="/documentacion" onClick={isMenuOpen && closeMenu}><p>Documentación</p></Link>
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p><IoMdPin /> Habana 3336, Villa Devoto, Buenos Aires</p>
          <p><FaPhoneAlt /> +54 (011) 3696-6253</p>
          <p><MdEmail /> info@nucleofarmaweb.com.ar</p>
          <p><IoTime /> Lunes a viernes de 8:00 a 16:00 hs.</p>
        </div>
        <div className="social">
          <Link to="https://www.linkedin.com/company/nucleofarma-sa" target="_blank"><img id="linkedin" src="../src/assets/linkedin.png" alt="Logo Linkedin"/></Link>
          <Link to="https://api.whatsapp.com/send?phone=541136966253&text=¡Hola! Me contacto con Nucleo Farma porque..." target="_blank"><img id="whatsapp" src='../src/assets/whatsapp.png' alt='Logo Whatsapp' /></Link>
        </div>
      </div>
      <TopPage />
      <div className="copyright">
        <p id="devsync">© 2023 Nucleo Farma S.A. | Desarrollado por <Link to="https://www.linkedin.com/company/devsync-solutions/" target="_blank"><strong>DevSync Solutions</strong></Link></p>
      </div>
    </footer>
  )
}

export default Footer