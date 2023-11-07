import { Link as ScrollLink } from "react-scroll"
import Section from "../section"
import { Button } from "../../components/button"
import './main.css'

const Main = ({ onFormTitleChange }) => {
  return (
    <>
      <main className='container main'>
        <h1>Nucleo Farma Droguería</h1>
        <h3>Al servicio de la salud</h3>
        <ScrollLink smooth={true} duration={500} to="contacto"><Button onClick={() => onFormTitleChange("¿Necesitas comunicarte con nosotros?")}>Contactanos</Button></ScrollLink>
        <Section className='section-main'>
          <h1>SCROLL HORIZONTAL</h1>
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