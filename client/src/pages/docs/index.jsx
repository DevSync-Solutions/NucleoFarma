import Section from '../../layout/section'
import { useNavigate } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import { useEffect } from 'react'
import Loader from '../../components/loader'
import certificadoBuenasPracticas from '../../assets/certificado-buenas-practicas.pdf'
import constanciaAfip from '../../assets/constancia-afip.pdf'
import transitoInterjuridiccional from '../../assets/transito-interjuridiccional.pdf'
import nombramientoDt from '../../assets/nombramiento-dt.pdf'
import habilitacionDrogueria from '../../assets/habilitacion-drogueria.pdf'
import './docs.css'

const Docs = ({ token }) => {
  const navigate = useNavigate()

  useEffect(() => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  }, [])

  useEffect(() => {
    if (!token) {
      const timeoutId = setTimeout(() => {
        sessionStorage.setItem('docs', true)
        navigate('/ingreso')
      }, 3000)

      return () => clearTimeout(timeoutId)
    }
  }, [token, navigate])
  
  return (
    <>
      <Section className='container'>
        {token ? (
          <div className='div-docs'>
            <h1>DOCUMENTACION Nucleo Farma</h1>
            <a href={habilitacionDrogueria} target="_blank">PDF Habilitación Droguería Nucleo Farma</a>
            <a href={constanciaAfip} target="_blank">PDF Constancia Afip</a>
            <a href={nombramientoDt} target="_blank">PDF Nombramiento Directora Técnica Nucleo Farma</a>
            <a href={certificadoBuenasPracticas} target="_blank">PDF Certificado buenas practicas</a>
            <a href={transitoInterjuridiccional} target="_blank">PDF Transito Interjuridiccional</a>
          </div>
          ) : (
            <div className='docs-redirect'>
              <h1>Acceso permitido unicamente a proveedores</h1>
              <h3>Redirigiendo a inicio de sesión...</h3>
              <Loader />
            </div>
          )
        }
      </Section>
    </>
  )
}

export default Docs