import { Link } from 'react-router-dom'
import Section from '../../layout/section'
import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import './conditions.css'

const Conditions = ({ onFormTitleChange }) => {
  const [shouldScroll, setShouldScroll] = useState(false)

  useEffect(() => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  }, [])

  useEffect(() => {
    if (shouldScroll) {
      scroll.scrollTo(document.getElementById(shouldScroll).offsetTop - 85)
      setShouldScroll(false)
    }
  }, [shouldScroll, onFormTitleChange])

  const handleLinkClick = (sectionId) => {
    setShouldScroll(sectionId)
  }

  return (
    <>
      <Section className='container conditions-privacity'>
        <h1>TÉRMINOS Y CONDICIONES</h1>
        <div>
          <h3>1. Aceptación de Términos y Condiciones</h3>
          <p>Al acceder y/o visitar este Sitio Web, aceptas plenamente los términos y condiciones establecidos en este aviso legal. Si no estás de acuerdo con alguno de estos términos, te pedimos que no avances en la visita.</p>
        </div>
        <div>
          <h3>2. Modificaciones</h3>
          <p>Núcleo Farma se reserva el derecho de modificar los términos y condiciones de uso de este Sitio Web sin previo aviso. Dichos cambios entrarán en vigencia al ser publicados en el Sitio Web, por lo que te recomendamos revisar periódicamente este aviso legal.</p>
        </div>
        <div>
          <h3>3. Uso Informativo</h3>
          <p>La información contenida en nuestro Sitio Web se proporciona únicamente con fines informativos. No realizamos ventas directas a través del sitio; nuestro objetivo es brindarte información clara sobre nuestra empresa y servicios.</p>
        </div>
        <div>
          <h3>4. Responsabilidad y Garantías</h3>
          <p>Nos esforzamos por proporcionar información precisa y actualizada, pero no garantizamos la exactitud o integridad de la información suministrada. Núcleo Farma excluye cualquier responsabilidad por daños que puedan deberse al uso del Sitio Web.</p>
        </div>
        <div>
          <h3>5. Propiedad Intelectual e Industrial</h3>
          <p>Todos los contenidos, marcas y materiales en nuestro Sitio Web son propiedad exclusiva de Núcleo Farma. No podrán ser utilizados sin autorización expresa para fines distintos al objetivo informativo del sitio.</p>
        </div>
        <div>
          <h3>6. Uso de Datos Personales</h3>
          <p>Si decides proporcionarnos datos personales, garantizamos la confidencialidad y seguridad de la información. Para más detalles sobre el uso de datos personales, consulta nuestra <Link to='/privacidad'>política de privacidad</Link>.</p>
        </div>
        <div>
          <h3>7. Registro de Bases de Datos</h3>
          <p>Las bases de datos personales de Núcleo Farma están debidamente registradas conforme a las leyes y normativas aplicables.</p>
        </div>
        <div>
          <h3>8. Contacto y Consultas</h3>
          <p>Para cualquier pregunta o inquietud relacionada con estos términos y condiciones, comuniquese a través del <Link to="/" onClick={() => { handleLinkClick("contacto"), onFormTitleChange("¿Necesitás contactarte") }}>formulario de contacto</Link></p>
        </div>
        <small><strong>Fecha de última actualizacion</strong>: 28/12/2023</small>
        <p></p>
      </Section>
    </>
  )
}

export default Conditions