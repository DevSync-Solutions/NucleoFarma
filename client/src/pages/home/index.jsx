import ContactForm from '../../components/contactForm'
import Section from '../../layout/section'
import Main from '../../layout/main'
import Maps from '../../components/maps'
import Whatsapp from '../../components/whatsapp'
import './home.css'

const Home = ({ formTitle, onFormTitleChange, formRef, handleFormRef }) => {
  return (
    <>
    <Main onFormTitleChange={onFormTitleChange} formRef={handleFormRef} />
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
        <ContactForm formTitle={formTitle} formRef={formRef} />
      </Section>
      <Section>
        <Maps />
      </Section>
      <Whatsapp />
    </>
  )
}

export { Home }