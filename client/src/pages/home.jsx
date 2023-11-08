import ContactForm from '../components/form'
import Section from '../layout/section'
import Main from '../layout/main'
import Maps from '../components/maps'
import './home.css'
import Whatsapp from '../components/whatsapp'

const Home = ({ formTitle, onFormTitleChange }) => {
  return (
    <>
    <Main onFormTitleChange={onFormTitleChange} />
      <Section id='quienes-somos' className='container'>
        <br/>
        <h2>QUIENES SOMOS</h2>
        <br/>
      </Section>
      <Section id='servicios' className='container'>
        <br/>
        <h2>SERVICIOS</h2>
        <br/>
      </Section>
      <Section id='distribucion' className='container'>
        <br/>
        <h2>DISTRIBUCION</h2>
        <br/>
      </Section>
      <Section id='contacto' className='container'>
        <ContactForm formTitle={formTitle} />
      </Section>
      <Section>
        <Maps />
      </Section>
      <Whatsapp />
    </>
  )
}

export { Home }