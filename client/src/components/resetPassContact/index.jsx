import { toast } from 'react-toastify'
import { useForm as useFormHook } from 'react-hook-form'
import { Button } from '../button'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../context/form'
import 'react-toastify/dist/ReactToastify.css'
import "./resetPassContact.css"
import { useEffect } from 'react'

function ResetPassContact() {
  const notifySuccess = () => toast.success('Correo de recuperación enviado')
  const notifyError = (errorMessage) => toast.error(errorMessage)
  const { formRef, handleFormRef } = useForm()
  const { register, handleSubmit, reset } = useFormHook()
  const navigate = useNavigate()

  const handleCreate = async (data) => {
    const isEmailRegistered = await checkEmail(data.email)
    if (!isEmailRegistered) {
      notifyError("El correo no pertenece a ningun usuario")
      return
    }

    fetch('http://localhost:3000/sesion/solicitar-recuperacion', {
    // fetch('dominio host backend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(async response => {
      if (response.ok) {
        const responseData = await response.json()
        const { tokenPass } = responseData.data
        sessionStorage.setItem('tokenPass', tokenPass)
        notifySuccess()
        reset()
        setTimeout(() => {
          navigate('/restablecer-contraseña')
        }, 2000)
      } else {
        notifyError('Error, por favor intente nuevamente')
      }
    })
    .catch(error => console.error('Error al enviar el correo de recuperación', error))
  }

  const checkEmail = async (email) => {
    try {
      const response = await fetch('http://localhost:3000/sesion/verificar-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
  
      if (response.ok) {
        const data = await response.json()
        if (data.isEmailRegistered) {
          return 'email'
        } else {
          return null
        }
      } else {
        console.error('Error al verificar el correo:', response.status)
        return { isEmailRegistered: false }
      }
    } catch (error) {
      console.error('Error al verificar el correo:', response.status)
      return { isEmailRegistered: false }
    }
  }

  useEffect(() => {
    handleFormRef()
  }, [])

  return (
    <>
      <h1 id='title-form'>Recuperar contraseña</h1>
      <p>Ingresa tu Email para recuperar la contraseña.</p>
      <form className="form-reg-log" onSubmit={handleSubmit(values => { handleCreate(values) })} ref={formRef}>
        <div className='div-form'>
          <div className='form-group'>
            <label>Correo *</label>
            <input type="email" {...register('email', { required: true, maxLength: 50 })} placeholder="Ingresa tu correo..."></input>
          </div>
        </div>
        <div className="div-btn">
          <Button type="submit" className="btn-form" children="Enviar" />
        </div>
      </form>
    </>
  )
}

export default ResetPassContact