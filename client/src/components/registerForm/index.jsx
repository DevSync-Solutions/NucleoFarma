import { toast } from 'react-toastify'
import { useForm as useFormHook } from 'react-hook-form'
import { Button } from '../button'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../context/form'
import 'react-toastify/dist/ReactToastify.css'
import "./registerForm.css"
import { useEffect } from 'react'

function RegisterForm() {
  const notifySuccess = () => toast.success('Usuario registrado')
  const notifyError = (errorMessage) => toast.error(errorMessage)
  const { formRef, handleFormRef } = useForm()
  const { register, handleSubmit, reset } = useFormHook()
  const navigate = useNavigate()

  const handleCreate = (data) => {
    if (data.password !== data.password1) {
      notifyError('Las contraseñas no coinciden')
      return
    }

    fetch('http://localhost:3000/sesion/registro', {
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
          navigate('/ingreso')
        }, 2000)
      } else {
        notifyError(error.message)
      }
    })
    .catch(error => console.error('Error al registrar el usuario', error))
  }

  useEffect(() => {
    handleFormRef()
  }, [])

  return (
    <>
      <h1 id='title-form'>Registro</h1>
      <p>Completá el formulario para registrarte.</p>
      <form className="form-reg-log" onSubmit={handleSubmit(values => { handleCreate(values) })} ref={formRef}>
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
          <Button type="submit" className="btn-form" children="Crear" />
          <Link to="/ingreso">¿Ya tenés cuenta? Ingresá</Link>
        </div>
      </form>
    </>
  )
}

export default RegisterForm