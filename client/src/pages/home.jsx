import { Button } from '../components/button'
import ContactForm from '../components/form'
import Section from '../layout/section'
import { Link as ScrollLink } from "react-scroll"
import './home.css'

const Home = () => {
  return (
    <>
      <main className='container'>
        <h1>Nucleo Farma Droguería</h1>
        <h3>Al servicio de la salud</h3>
        <ScrollLink smooth={true} duration={500} to="contacto"><Button>Contactanos</Button></ScrollLink>
        <Section className='section-main'>
          <h1>SCROLL HORIZONTAL</h1>
        </Section>
      </main>
      <Section id='quienes-somos' className='container'>
        <br/>
        <h1>QUIENES SOMOS</h1>
        <br/>
      </Section>
      <Section id='servicios' className='container'>
        <br/>
        <h1>SERVICIOS</h1>
        <br/>
      </Section>
      <Section id='distribucion' className='container'>
        <br/>
        <h1>DISTRIBUCION</h1>
        <br/>
      </Section>
      <Section id='contacto' className='container'>
        <ContactForm />
      </Section>
    </>
  )
}

export { Home }