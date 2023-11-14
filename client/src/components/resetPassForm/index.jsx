import { toast } from 'react-toastify'
import { useForm as useFormHook } from 'react-hook-form'
import { Button } from '../button'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../context/form'
import 'react-toastify/dist/ReactToastify.css'
import "./resetPassForm.css"
import { useEffect } from 'react'

function ResetPassForm() {
  const notifySuccess = () => toast.success('Contraseña actualizada')
  const notifyError = (errorMessage) => toast.error(errorMessage)
  const { formRef, handleFormRef } = useForm()
  const { register, handleSubmit, reset } = useFormHook()
  const navigate = useNavigate()

  const tokenPass = sessionStorage.getItem('tokenPass')

  const handleUpdate = async (data) => {
    fetch('http://localhost:3000/sesion/restablecer-contraseña', {
    // fetch('dominio host backend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resetToken: data.resetToken,
        newPassword: data.password,
      }),
    })
    .then(response => {
      if (response.ok) {
        notifySuccess()
        reset()
        setTimeout(() => {
          navigate('/ingreso')
        }, 2000)
      } else {
        notifyError('Error, por favor intente nuevamente')
      }
    })
    .catch(error => console.error('Error al actualizar contraseña', error))
  }

  useEffect(() => {
    handleFormRef()
  }, [])

  return (
    <>
      <h1 id='title-form'>Restablecer contraseña</h1>
      <p>Ingresa tu nueva contraseña.</p>
      <form className="form-reg-log" onSubmit={handleSubmit(values => { handleUpdate(values) })} ref={formRef}>
        <div className='div-form'>
        <div className='form-group'>
            <label>Nueva contraseña *</label>
            <input type="password" {...register('password', { required: true, maxLength: 50 })} placeholder="Ingresa tu nueva contraseña..."></input>
          </div>
          <div className='form-group'>
            <label>Repite tu nueva contraseña *</label>
            <input type="password" {...register('password1', { required: true, maxLength: 50 })} placeholder="Ingresa tu nueva contraseña..."></input>
          </div>
        </div>
        <div className="div-btn">
          <Button type="submit" className="btn-form" children="Enviar" />
        </div>
      </form>
    </>
  )
}

export default ResetPassForm