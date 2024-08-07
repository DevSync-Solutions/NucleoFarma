import ContactForm from '../../components/contactForm'
import Section from '../../layout/section'
import Main from '../../layout/main'
import Maps from '../../components/maps'
import Whatsapp from '../../components/whatsapp'
import DistribucionImg from '../../assets/distribuciona.jpg'
import nucleoFarmaImg from '../../assets/frente-nucleo.jpg'
import { useForm } from '../../context/form'
import './home.css'

const Home = ({ formTitle, onFormTitleChange }) => {
  const { formRef, handleFormRef } = useForm()
  
  return (
    <>
    <Main onFormTitleChange={onFormTitleChange} handleFormRef={handleFormRef} />
      <Section id='servicios' className='container section-servicios'>
        <div className='div-texto-servicios'>
          <div className='title'>
            <h2>Nuestros servicios</h2>
            <hr id='hr-title' />
          </div>
          {/* <h3>Al servicio de la salud.</h3> */}
        </div>
        <div className='div-servicios'>
          <div className='card-servicios'>
            <h3>Logística</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect width="6.5" height="6.5" x="5.5" y="3" rx="1"/><path d="M4 12h7.61a1 1 0 0 1 .7.29l1.19 1.21M.5.5h1a1 1 0 0 1 1 1V10M4 11.75A2.11 2.11 0 0 1 4 12a1.74 1.74 0 1 1 0-.25ZM8.5 7h1"/></g></svg>
            <p>Equipo profesional en almacenamiento, logística y distribución de productos. </p>
          </div>
          <div className='card-servicios'>
            <h3>Epoprostenol</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth="4"><path strokeLinejoin="round" d="M34 10H14a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2Z"/><path strokeLinecap="round" d="M12 18h24"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v6m24-6v6"/><path strokeLinejoin="round" d="M32 4H16v6h16V4Z"/><path strokeLinecap="round" d="M20 31h8m-4-4v8"/></g></svg>
            <p>Distribuidores exclusivos de Epoprostenol Normon. </p>
          </div>
          <div className='card-servicios'>
            <h3>Uso compasivo</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 10.98a4 4 0 0 1 0 5.656l-5.657 5.657a1 1 0 0 1-1.414 0l-5.657-5.657a4 4 0 1 1 5.657-5.657l.707.707l.707-.707a4 4 0 0 1 5.657 0ZM7.051 12.392a2 2 0 0 0 0 2.829l4.95 4.95l4.95-4.95a2 2 0 1 0-2.83-2.827l-2.123 2.118l-2.119-2.12a2 2 0 0 0-2.828 0ZM12 1a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"/></svg>          
            <p>Gestionamos Medicamentos y tratamientos bajo la regulación de ANMAT. </p>
          </div>
          <div className='card-servicios'>
            <h3>Empresas B</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 24 24"><path fill="currentColor" d="m5.8 18l.9.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-2.6-2.6q-.3-.3-.3-.7t.3-.7l2.6-2.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-.9.9h12.4l-.9-.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l.9-.9H5.8ZM2 11v-.575q0-.6.325-1.1t.9-.75q.65-.275 1.338-.425T6 8q.75 0 1.438.15t1.337.425q.575.25.9.75t.325 1.1V11H2Zm12 0v-.575q0-.6.325-1.1t.9-.75q.65-.275 1.338-.425T18 8q.75 0 1.438.15t1.337.425q.575.25.9.75t.325 1.1V11h-8ZM6 7q-.825 0-1.413-.588T4 5q0-.825.588-1.413T6 3q.825 0 1.413.588T8 5q0 .825-.588 1.413T6 7Zm12 0q-.825 0-1.413-.588T16 5q0-.825.588-1.413T18 3q.825 0 1.413.588T20 5q0 .825-.588 1.413T18 7Z"/></svg>
            <p>Siguiendo los principios de las Empresas B, adoptamos un enfoque empresarial que equilibra el impacto social. </p>
          </div>
          <div className='card-servicios'>
            <h3>Trazabilidad</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 2048 2048"><path fill="currentColor" d="M2048 1280v768H1024v-768h256v-256h512v256h256zm-640 0h256v-128h-256v128zm512 384h-128v128h-128v-128h-256v128h-128v-128h-128v256h768v-256zm0-256h-768v128h768v-128zm-355-512q-54-61-128-94t-157-34q-80 0-149 30t-122 82t-83 123t-30 149q0 92-41 173t-116 136q45 23 84 53t73 68v338q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149H0q0-73 20-141t57-129t90-108t118-81q-74-54-115-135t-42-174q0-79 30-149t82-122t122-83t150-30q92 0 173 41t136 116q38-75 97-134t135-98q-74-54-115-135t-42-174q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 92-41 173t-116 136q68 34 123 85t93 118h-158zM512 1408q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20zm512-1024q0 53 20 99t55 82t81 55t100 20q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100z"/></svg>
            <p>Pioneros en el sistema dedicado a la traza de productos médicos. </p>
          </div>
        </div>
      </Section>
      <Section id='quienes-somos' className='container section-quienes-somos'>
        <div className='div-title-quienes-somos'>
          <div className='title'>
            <h2 id='title-quienes-somos'>Nucleo Farma</h2>
            <hr id='hr-title' />
          </div>
          <h3>Al servicio de la salud. </h3>
          <div className='div-text-title-quienes-somos'>
            <p id='title-text'>
              Somos <strong>Nucleo Farma</strong> una empresa dedicada a la salud desde 2004, durante todo este tiempo hemos llevado a cabo la distribución, logística y entrega de productos farmacéuticos, medicamentos de alto costo y siendo parte de tratamientos especiales.
            </p>
            <p>
              Llevamos a cabo esta actividad con el mayor ímpetu de brindar la excelencia en nuestro servicio. Es por esto que tanto en los ámbitos de <strong>comercio</strong>, como <strong>logística</strong> de entrega y <strong>distribución</strong> estamos enfocados a las continuas mejoras de cada área en su nivel general y específico.
            </p>
            <p>
              Toda actividad que se lleva a cabo cuanta con la rigurosidad respecto a las normas establecidas para el manejo comercial de medicamentos, junto a empresas que comparten esta visión y principios que refieren a un standard a la altura de lo que necesita una empresa referida a la salud.
            </p>
          </div>
        </div>
        <div className='div-quienes-somos'>
          <div className='img-quienes-somos'>
            <img src={nucleoFarmaImg} alt='Logo Empresa Nucleo Farma' />
          </div>
        </div>

      </Section>
      <Section id='distribucion' className='container section-distribucion'>
        <div className='title div-distribucion'>
          <h2>DISTRIBUCION</h2>
          <hr id='hr-title' />
        </div>
        <div className='div-text-distribucion'>
          <div>
            <p>La correcta y eficaz distribución de medicamentos e insumos es vital para el servicio de la salud, es por eso que contamos con un sistema de movilización de medicamentos que abarca el ancho y largo de la república Argentina.</p>
            <p>Junto con el correcto y desarrollado sistema abarcativo de distribución nos encargamos de la correcta entrega de la medicación e insumos.</p>
            <p>Formando parte del sistema Nacional de <strong>Trazabilidad</strong>, nos aseguramos del correcto estado ademas de la certificación legal de todo producto que se moviliza desde la empresa.</p>
          </div>
          <img src={DistribucionImg} alt='Nucleo farma medicamentos depósito'></img>
        </div>
      </Section>
      <hr />
      <Section id='contacto' className='container section-contact'>
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