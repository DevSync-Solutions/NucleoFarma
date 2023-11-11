import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import { useEffect, useRef } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import "./loginForm.css"
import { Link, useNavigate } from 'react-router-dom'
// import jwt from 'jsonwebtoken'

function LoginForm() {
  // const [token, setToken] = useState('')

  // const iniciarSesion = async () => {
  //   // solicitud para iniciar sesión y obtener token
  //   const response = await fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ /* ...credenciales */ }),
  //   })

  //   const data = await response.json()

  //   if (data.token) {
  //     setToken(data.token)
  //     localStorage.setItem('token', data.token)
  //   }
  // }

  // const obtenerRecursosProtegidos = async () => {
  //   const response = await fetch('http://localhost:3000/recurso_protegido', {
  //     headers: { 'Authorization': `Bearer ${token}` },
  //   })

  //   const data = await response.json()
  //   console.log(data)
  // }

  const notifySuccess = () => toast.success('Inicio de sesión con éxito')
  const notifyError = (errorMessage) => toast.error(errorMessage)
  const { register, handleSubmit, reset } = useForm()
  const firstInputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    firstInputRef.current && firstInputRef.current.focus()
  }, [])

  const handleCreate = (data) => {
    fetch('http://localhost:3000/session/login', {
    // fetch('dominio host backend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        notifySuccess()
        reset()
        setTimeout(() => {
          navigate('/')
        }, 2000)
      } else {
        notifyError(errorMessage)
      }
    })
    .catch(error => console.error('Error al iniciar sesión', error))
  }

  return (
    <>
      <h1 id='title-form'>Inicio de sesión</h1>
      <p>Completá el formulario para iniciar sesión.</p>
      <form className="form-reg-log" onSubmit={handleSubmit(values => { handleCreate(values) })} ref={firstInputRef}>
        <div className='div-form'>
          <div className='form-group'>
            <label>Correo *</label>
            <input type="email" {...register('email', { required: true, maxLength: 50 })} placeholder="Ingresa tu correo..."></input>
          </div>
          <div className='form-group'>
            <label>Contraseña *</label>
            <input type="password" {...register('password', { required: true, maxLength: 50 })} placeholder="Ingresa tu contraseña..."></input>
          </div>
        </div>
        <div className="div-btn">
          {/* <Button type="submit" className="btn-form" children="Ingresar" onClick={iniciarSesion}/> */}
          <Button type="submit" className="btn-form" children="Ingresar"/>
          <Link to="/register">¿No tenés cuenta? Registrate</Link>
        </div>
      </form>
    </>
  )
}

export default LoginForm