import { Link } from "react-router-dom"
import "./footer.css"
import TopPage from "../../components/topPage"
import { useMenuContext } from "../../context/menu"

function Footer() {
  const { isMenuOpen, closeMenu } = useMenuContext()

  return (
    <footer className="footer">
      <div className="footer-div">
        <div className="footer-contact">
          <p>Droguería <strong>Nucleo Farma S.A.</strong></p>
          <p>C.U.I.T: 30-67582905-7</p>
          <Link to="/condiciones" onClick={isMenuOpen && closeMenu}><p>Términos y condiciones.</p></Link>
          <Link to="/privacidad" onClick={isMenuOpen && closeMenu}><p>Política de privacidad.</p></Link>
          <Link to="/documentacion" onClick={isMenuOpen && closeMenu}><p>Documentación</p></Link>
        </div>
        <div className="footer-contact">
          <p><strong>Dirección:</strong> Habana 3336, Villa Devoto, Buenos Aires</p>
          <p><strong>Horario de atención:</strong> Lunes a viernes de 8:00 a 16:00 hs.</p>
          <p><strong>Tel:</strong> +54 11 3696-6253</p>
          <p><strong>Email:</strong> info@nucleofarmaweb.com.ar</p>
        </div>
        <div className="social">
          <Link to="https://www.linkedin.com/company/nucleofarma-sa" target="_blank"><img id="linkedin" src="./src/assets/linkedin.png" alt="Logo Linkedin"/></Link>
          <Link to="https://api.whatsapp.com/send?phone=541136966253&text=¡Hola! Me contacto con Nucleo Farma porque..." target="_blank"><img id="whatsapp" src='./src/assets/whatsapp.png' alt='Logo Whatsapp' /></Link>
        </div>
        <p id="devsync">© 2023 Desarrollado por <Link to="https://devsyncsolutions.vercel.app/" target="_blank">DevSync Solutions</Link></p>
      </div>
      <TopPage />
    </footer>
  )
}

export default Footer