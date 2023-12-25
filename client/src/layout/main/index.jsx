import { Link as ScrollLink } from "react-scroll"
import { Button } from "../../components/button"
import { SlArrowDown } from "react-icons/sl";
import './main.css'

const Main = ({ onFormTitleChange, handleFormRef }) => {

  const handleContactClick = () => {
    onFormTitleChange('¿Necesitás contactarte')
    handleFormRef()
  }

  return (
    <>
      <main className='main-section'>
        <h1 className="title-main">Droguería <span id="title">Nucleo Farma</span></h1>
        <h3>Al servicio de la salud</h3>
        <ScrollLink smooth={true} duration={500} offset={-110} to="contacto"><Button className="btn-contact" onClick={handleContactClick}>Contactanos</Button></ScrollLink>
        <ScrollLink smooth={true} duration={500} offset={-120} to="servicios">
          <div className="scroll-down"><SlArrowDown /></div>
        </ScrollLink>
      </main>
    </>
  )
}
  
export default Main