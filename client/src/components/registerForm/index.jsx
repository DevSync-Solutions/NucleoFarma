import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import { useEffect, useRef } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import "./registerForm.css"
import { Link } from 'react-router-dom'

function RegisterForm() {
  const notifySuccess = () => toast.success('Usuario registrado')
  const notifyError = () => toast.error('Error al registrar')
  const { register, handleSubmit, reset } = useForm()
  const firstInputRef = useRef(null)

  useEffect(() => {
    firstInputRef.current && firstInputRef.current.querySelector('input[name="name"]').focus()
  }, [])

  const handleCreate = (data) => {
    fetch('http://localhost:3000/register', {
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
          window.location.href = '/login'
        }, 2500)
      } else {
        notifyError()
      }
    })
    .catch(error => console.error('Error al registrar el usuario', error))
  }

  return (
    <>
      <h1 id='title-form'>Registro</h1>
      <p>Completá el formulario para registrarte.</p>
      <form className="form-reg-log" onSubmit={handleSubmit(values => { handleCreate(values) })} ref={firstInputRef}>
        <div className='div-form'>
          <div className='form-group'>
            <label>Nombre *</label>
            <input type="text" {...register('name', { required: true, maxLength: 50 })} placeholder="Ingresa tu nombre..."></input>
          </div>
          <div className='form-group'>
            <label>Correo *</label>
            <input type="email" {...register('email', { required: true, maxLength: 50 })} placeholder="Ingresa tu correo..."></input>
          </div>
          <div className='form-group'>
            <label>Empresa *</label>
            <input type="text" {...register('company', { required: true, maxLength: 50 })} placeholder="Ingresa tu empresa..."></input>
          </div>
          <div className='form-group'>
            <label>Contraseña *</label>
            <input type="password" {...register('password', { required: true, maxLength: 50 })} placeholder="Ingresa una contraseña..."></input>
          </div>
          <div className='form-group'>
            <label>Repita la contraseña *</label>
            <input type="password" {...register('password1', { required: true, maxLength: 50 })} placeholder="Repita su contraseña..."></input>
          </div>
        </div>
        <div className="div-btn">
          <Button type="submit" className="btn-form" children="Enviar" />
          <Link to="/login">¿Ya tenés cuenta?</Link>
        </div>
      </form>
    </>
  )
}

export default RegisterForm