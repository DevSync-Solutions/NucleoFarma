import { Link } from 'react-router-dom'
import './whatsapp.css'
import WhatsappImg from '../../assets/whatsapp-float.png'

const Whatsapp = () => {
  return (
    <Link id='whatsapp-float' to="https://api.whatsapp.com/send?phone=541136966253&text=¡Hola! Me contacto con Nucleo Farma para recibir más informacion sobre..." target="_blank">
      <img src={WhatsappImg} alt='Logo Whatsapp' />
    </Link>
  )
}

export default Whatsapp