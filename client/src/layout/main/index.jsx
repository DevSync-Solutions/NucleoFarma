import { Link as ScrollLink } from "react-scroll"
import Section from "../section"
import { Button } from "../../components/button"
import './main.css'

const Main = ({ onFormTitleChange, handleFormRef }) => {

  const handleContactClick = () => {
    onFormTitleChange('¿Necesitás comunicarte')
    handleFormRef()
  }

  return (
    <>
      <main className='container main'>
        <h1 className="title-main">Droguería <span id="title">Nucleo Farma</span></h1>
        <h3>Al servicio de la salud</h3>
        <ScrollLink smooth={true} duration={500} offset={-110} to="contacto"><Button onClick={handleContactClick}>Contactanos</Button></ScrollLink>
        <Section className='section-main'>
          <h2>SCROLL HORIZONTAL</h2>
          <div className='div-main'>
            <h3>Al servicio de la salud</h3>
            <h3>Epoprostenol</h3>
            <h3>Uso compasivo</h3>
            <h3>Algo de distribucion</h3>
            <h3>Empresas B</h3>
          </div>
        </Section>
      </main>
    </>
  )
}
  
export default Main