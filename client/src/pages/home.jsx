import ContactForm from '../components/form'
import Section from '../layout/section'
import Main from '../layout/main'
import './home.css'

const Home = ({ formTitle, onFormTitleChange }) => {
  return (
    <>
    <Main onFormTitleChange={onFormTitleChange} />
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
        <ContactForm formTitle={formTitle} />
      </Section>
    </>
  )
}

export { Home }