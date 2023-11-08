import { Link } from 'react-router-dom'
import './whatsapp.css'

const Whatsapp = () => {
  return (
    <Link id='whatsapp-float' to="https://api.whatsapp.com/send?phone=541145733636&text=¡Hola! Me contacto con Nucleo Farma para recibir más informacion sobre..." target="_blank">
      <img src='./src/assets/whatsapp-float.png' alt='Logo Whatsapp' />
    </Link>
  )
}

export default Whatsapp