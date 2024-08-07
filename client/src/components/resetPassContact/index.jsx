import { useForm as useFormHook } from 'react-hook-form'
import { Button } from '../button'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../context/form'
import { useEffect } from 'react'
import { useNotifyContext } from '../../context/notify'
import users from '../users/index.js'

function ResetPassContact() {
  const { notifySuccess, notifyError } = useNotifyContext()
  const { formRef, handleFormRef } = useForm()
  const { register, handleSubmit, reset, formState: { errors }, setError } = useFormHook()
  const navigate = useNavigate()

  const handleCreate = async (data) => {
    // const isEmailRegistered = await checkEmail(data.email)
    // if (!isEmailRegistered) {
    //   notifyError("El correo no pertenece a ningun usuario")
    //   return
    // }

    const user = users.find(user => user.email === data.email)

    if (!user)
    {
      notifyError("El correo no pertenece a ningun usuario")
      return
    }
    else 
    {
      //fetch('http://localhost:3000/sesion/solicitar-recuperacion', {
        fetch('https://nucleofarma-api.onrender.com/sesion/solicitar-recuperacion', {
    
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(async response => {
          if (response.ok) {
            await response.json()
            notifySuccess('Correo de recuperación enviado')
            reset()
            setTimeout(() => {
              navigate('/')
            }, 2000)
          } else {
            notifyError('Error, por favor intente nuevamente')
    
            const errorData = await response.json();
            Object.keys(errorData.errors).forEach((fieldName) => {
              setError(fieldName, {
                type: 'manual',
                message: errorData.errors[fieldName].message,
              })
            })
          }
        })
        .catch(error => console.error('Error al enviar el correo de recuperación', error))
    }
  }

  // const checkEmail = async (email) => {
  //   try {
  //     //const response = await fetch('http://localhost:3000/sesion/verificar-email', {
  //     const response = await fetch('https://nucleofarma-api.onrender.com/sesion/verificar-email', {

  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email }),
  //     })
  
  //     if (response.ok) {
  //       const data = await response.json()
  //       if (data.isEmailRegistered) {
  //         return 'email'
  //       } else {
  //         return null
  //       }
  //     } else {
  //       console.error('Error al verificar el correo:', response.status)
  //       return null
  //     }
  //   } catch (error) {
  //     console.error('Error al verificar el correo:', error)
  //     return null
  //   }
  // }

  useEffect(() => {
    handleFormRef()
  }, [])

  const hasErrors = !!errors.name || !!errors.email || !!errors.message

  return (
    <>
      <h1 id='title-form'>Recuperar contraseña</h1>
      <p>Ingresa tu Email para recuperar la contraseña.</p>
      <form className="form-reg-log" onSubmit={handleSubmit(values => { handleCreate(values) })} ref={formRef}>
        <div className='div-form'>
          <div className={`form-group ${errors.email ? 'input-error' : ''}`}>
            <label htmlFor='email'>Correo</label>
            <input id='email' type="email" {...register('email', { required: true, maxLength: 50 })} placeholder="Ingresa tu correo..." autoComplete='email'></input>
          </div>
        </div>
        <div className='errors'>
          {hasErrors && <p className="input-error">Por favor, completa todos los campos.</p>}
        </div>
        <div className="div-btn">
          <Button type="submit" className="btn-form" children="Enviar" />
        </div>
      </form>
    </>
  )
}

export default ResetPassContact