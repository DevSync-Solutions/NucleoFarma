import Section from '../../layout/section'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Loader from '../../components/loader'
import './docs.css'

const Docs = ({ token }) => {
  const navigate = useNavigate()

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
      <Section className='container section-docs'>
        {token ? (
          <h1>DOCUMENTACION</h1>
          ) : (
            <>
              <h1>Acceso permitido unicamente a proveedores</h1>
              <h3>Redirigiendo a inicio de sesión...</h3>
              <Loader />
            </>
          )
        }
      </Section>
    </>
  )
}

export default Docs