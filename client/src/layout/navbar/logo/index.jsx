import "./logo.css"
import LogoImage from '../../../assets/logo-nav.png'

const Logo = () => {
  return (
    <a href="/">
      <div className="logo">
        <img id="logo-nucleo" src={LogoImage} alt="Logo Nucleo Farma" />
      </div>
    </a>
  )
}

export default Logo