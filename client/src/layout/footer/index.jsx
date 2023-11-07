import { Link } from "react-router-dom"
import "./footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <a href="/"><img id="logo" src="./src/assets/logo.png" alt="Logo Nucleo Farma"></img></a>
        <div className="footer-contact">
          <p>© 2023 <strong>Nucleo Farma</strong>. Todos los derechos reservados.</p>
          <p>Sitio web desarrollado por <Link to="https://devsyncsolutions.vercel.app/" target="_blank">DevSync Solutions</Link></p>
        </div>
        <div className="footer-contact">
          <p><strong>Dirección:</strong> Habana 3336, Villa Devoto, Buenos Aires</p>
          <p><strong>Tel:</strong> +54 11 4573-3636</p>
          <p><strong>Correo:</strong> correo@info.com.ar</p>
        </div>
        <Link to="https://www.linkedin.com/company/nucleofarma-sa" target="_blank"><img id="linkedin" src="./src/assets/linkedin.png" alt="Logo Linkedin"/></Link>
      </div>
    </footer>
  )
}

export default Footer