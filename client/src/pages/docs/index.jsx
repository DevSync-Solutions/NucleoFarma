import Section from '../../layout/section'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Docs = ({ token }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      const timeoutId = setTimeout(() => {
        sessionStorage.setItem('docs', true)
        navigate('/ingreso')
      }, 2500)

      return () => clearTimeout(timeoutId)
    }
  }, [token, navigate])
  
  return (
    <>
      {token ? (
        <Section className='container'>
          <h1>DOCUMENTACION</h1>
        </Section>
        ) : (
          <>
            <Section className='container'>
              <h1>Acceso permitido unicamente a proveedores</h1>
              <h3>Redirigiendo a inicio de sesión...</h3>
            </Section>
          </>
        )
      }
    </>
  )
}

export default Docs