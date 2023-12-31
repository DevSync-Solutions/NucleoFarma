import { useForm as useFormHook } from 'react-hook-form'
import { Button } from '../button'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../context/form'
import { useNotifyContext } from '../../context/notify'
import "./loginForm.css"

function LoginForm() {
  const { notifySuccess, notifyError } = useNotifyContext()
  const { formRef, handleFormRef } = useForm()
  const { register, handleSubmit, reset, formState: { errors } } = useFormHook()
  const [token, setToken] = useState('')

  const cameFromDocs = sessionStorage.getItem('docs') || null

  const handleCreate = async (data) => {
    try {
      // const response = await fetch('http://localhost:3000/sesion/ingreso', {
      const response = await fetch('https://nucleofarma-api.onrender.com/sesion/ingreso', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        const responseData = await response.json()
        const userId = responseData.userId
        sessionStorage.setItem('userId', userId)

        const authHeader = response.headers.get('Authorization')
        const token = authHeader ? authHeader.split(' ')[1] : null
        if (token) {
          // console.log('Token recibido:', token)
  
          setToken(token)
          sessionStorage.setItem('token', token)
  
          notifySuccess('Inicio de sesión con éxito')
          reset()
  
          setTimeout(() => {
            handleRedirect()
          }, 2500)
        } else {
          notifyError('Error, por favor intenta de nuevo')
        }
      } else {
        const errorData = await response.json()
        if (errorData.error === 'Contraseña incorrecta') {
          notifyError('La contraseña es incorrecta. Por favor, intenta de nuevo.')
        } else {
          notifyError(errorData.error)
        }
        Object.keys(errorData.errors).forEach((fieldName) => {
          setError(fieldName, {
            type: 'manual',
            message: errorData.errors[fieldName].message,
          })
        })
      }
    } catch (error) { console.error('Error al iniciar sesión', error)}
  }
  
  const handleRedirect = () => {
    if (cameFromDocs) {
      window.location.href = '/documentacion'
    } else {
      window.location.href = '/'
    }

    sessionStorage.removeItem('docs')
  }

  useEffect(() => {
    handleFormRef()
  }, [])

  const hasErrors = !!errors.cuit || !!errors.password

  return (
    <>
      <h1 id='title-form'>Inicio de sesión</h1>
      <p>Completá el formulario para iniciar sesión.</p>
      <form className="form-reg-log" onSubmit={handleSubmit(values => { handleCreate(values) })} ref={formRef}>
        <div className='div-form'>
          <div className={`form-group ${errors.cuit ? 'input-error' : ''}`}>
            <label htmlFor='cuit'>CUIT</label>
            <input id='cuit' type="text" {...register('cuit', {
              required: true,
              pattern: /^\d{11}$/,
            })}
            maxLength={11} 
            placeholder="Ingresa el CUIT..."></input>
          </div>
          <div className={`form-group ${errors.password ? 'input-error' : ''}`}>
            <label htmlFor='password'>Contraseña</label>
            <input id='password' type="password" {...register('password', { required: true, maxLength: 50 })} placeholder="Ingresa tu contraseña..."></input>
          </div>
        </div>
        <div className='errors'>
          {hasErrors && <p className="input-error">Por favor, completa todos los campos.</p>}
        </div>
        <Link to="/solicitar-recuperacion" >¿Olvidaste tu contraseña?</Link>
        <div className="div-btn">
          <Button type="submit" className="btn-form" children="Ingresar"/>
          <Link to="/registro">¿No tenés cuenta? <span>Registrate</span></Link>
        </div>
      </form>
    </>
  )
}

export default LoginForm