import { Link as ScrollLink } from "react-scroll"
import { Button } from "../../components/button"
import './main.css'

const Main = ({ onFormTitleChange, handleFormRef }) => {

  const handleContactClick = () => {
    onFormTitleChange('¿Necesitás comunicarte')
    handleFormRef()
  }

  return (
    <>
      <main className='main-section'>
        <h1 className="title-main">Droguería <span id="title">Nucleo Farma</span></h1>
        <h3>Al servicio de la salud</h3>
        <ScrollLink smooth={true} duration={500} offset={-110} to="contacto"><Button onClick={handleContactClick}>Contactanos</Button></ScrollLink>
      </main>
    </>
  )
}
  
export default Main