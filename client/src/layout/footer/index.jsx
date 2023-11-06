import { Link } from "react-router-dom"
import "./footer.css"

function Footer() {
  return (
    <footer>
      <p>Sitio web desarrollado por <Link to="https://devsyncsolutions.vercel.app/" target="_blank">DevSync Solutions</Link></p>
    </footer>
  )
}

export default Footer