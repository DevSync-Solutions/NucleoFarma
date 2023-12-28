import Section from '../../layout/section'
import { useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import '../conditions/conditions.css'

const Privacity = () => {
  useEffect(() => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  }, [])

  return (
    <>
      <Section className='container conditions-privacity'>
        <h1>POLÍTICA DE PRIVACIDAD</h1>
        <div>
          <h3>1. Introducción</h3>
          <p>
            Droguería Nucleo Farma reconoce la importancia de la privacidad y se compromete a proteger la información de los usuarios de su Sitio Web www.nucleofarmadrogueria.com.
          </p>
        </div>
        <div>
          <h3>2. Recopilación de Datos</h3>
          <p>
            Droguería Nucleo Farma recopila ciertos datos personales y sensibles con el fin de brindar servicios personalizados y mejorar la experiencia del usuario. Estos datos se obtienen de manera voluntaria y se manejan con los estándares de seguridad y privacidad de la compañía.
          </p>
        </div>
        <div>
          <h3>3. Uso de Datos</h3>
          <p>
            La información recopilada se utiliza para cumplir con los pedidos de los usuarios y entender mejor sus necesidades. Nucleo Farma se compromete a mantener el control y la responsabilidad en el uso de esta información.
          </p>
        </div>
        <div>
          <h3>4. Derechos del Usuario</h3>
          <p>
            Los usuarios tienen derechos sobre sus datos personales, incluyendo el acceso, rectificación o supresión de los mismos. Nucleo Farma se compromete a respetar y facilitar el ejercicio de estos derechos.
          </p>
        </div>
        <div>
          <h3>5. Seguridad y Retención de Datos</h3>
          <p>
            Droguería Nucleo Farma implementa medidas de seguridad para proteger los datos personales y determina la duración del almacenamiento de acuerdo con las necesidades y regulaciones aplicables.
          </p>
        </div>
        <div>
          <h3>6. Cookies</h3>
          <p>
            El Sitio Web utiliza cookies y otras tecnologías de seguimiento para mejorar la experiencia del usuario.
          </p>
        </div>
        <div>
          <h3>7. Cambios en la Política de Privacidad</h3>
          <p>
            Esta política puede cambiar, y los usuarios serán notificados de tales cambios a través del Sitio Web o por otros medios. Se recomienda revisar periódicamente la Política de Privacidad.
          </p>
        </div>
        <small><strong>Fecha de última actualizacion</strong>: 28/12/2023</small>
        <p></p>
      </Section>
    </>
  )
}

export default Privacity