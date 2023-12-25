import { useForm as useFormHook } from 'react-hook-form'
import { Button } from '../button'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../context/form'
import { useNotifyContext } from '../../context/notify'
import { useEffect } from 'react'
import "./registerForm.css"

function RegisterForm() {
  const { notifySuccess, notifyError } = useNotifyContext()
  const { formRef, handleFormRef } = useForm()
  const { register, handleSubmit, reset, formState: { errors }, setError } = useFormHook()
  const navigate = useNavigate()

  const handleCreate = async (data) => {
    if (data.email !== data.email1) {
      notifyError('Los correos no coinciden')
      return
    }

    if (data.password !== data.password1) {
      notifyError('Las contraseñas no coinciden')
      return
    }

    const isAlreadyRegistered = await checkEmailCuit(data.email, data.cuit)
    if (isAlreadyRegistered) {
      notifyError(`El ${isAlreadyRegistered === 'email' ? 'correo' : 'CUIT'} ya se encuentra en uso`)
      return
    }

    // fetch('http://localhost:3000/sesion/registro', {
    fetch('https://api.nucleofarmadrogueria.com/sesion/registro', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        notifySuccess('Usuario registrado con éxito')
        reset()
        setTimeout(() => {
          navigate('/ingreso')
        }, 2000)
      } else {
        notifyError('Error, por favor intente nuevamente')
      }
    })
    .catch(error => console.error('Error al registrar el usuario', error))
  }

  const checkEmailCuit = async (email, cuit) => {
    try {
      // const response = await fetch('http://localhost:3000/sesion/verificar-email-cuit', {
      const response = await fetch('https://api.nucleofarmadrogueria.com/sesion/verificar-email-cuit', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, cuit }),
      })
  
      if (response.ok) {
        const data = await response.json()
        if (data.emailAlreadyRegistered) {
          return 'email'
        } else if (data.cuitAlreadyRegistered) {
          return 'cuit'
        } else {
          return null
        }
      } else {
        const errorData = await response.json();
        Object.keys(errorData.errors).forEach((fieldName) => {
          setError(fieldName, {
            type: 'manual',
            message: errorData.errors[fieldName].message,
          })
        })

        console.error('Error al verificar el correo y el CUIT:', response.status)
        return { emailAlreadyRegistered: false, cuitAlreadyRegistered: false }
      }
    } catch (error) {
      console.error('Error al verificar el correo y el CUIT', error)
      return { emailAlreadyRegistered: false, cuitAlreadyRegistered: false }
    }
  }

  useEffect(() => {
    handleFormRef()
  }, [])

  const hasErrors = !!errors.name || !!errors.email || !!errors.message

  return (
    <>
      <h1 id='title-form'>Registro</h1>
      <p>Completá el formulario para registrarte.</p>
      <form className="form-reg-log" onSubmit={handleSubmit(values => { handleCreate(values) })} ref={formRef}>
        <div className='div-form'>
          <div className={`form-group ${errors.name ? 'input-error' : ''}`}>
            <label htmlFor='name'>Nombre *</label>
            <input id='name' type="text" {...register('name', { required: true, maxLength: 50 })} placeholder="Ingresa tu nombre..." autoComplete='name'></input>
          </div>
          <div className={`form-group ${errors.email ? 'input-error' : ''}`}>
            <label htmlFor='email'>Correo *</label>
            <input id='email' type="email" {...register('email', { required: true, maxLength: 50 })} placeholder="Ingresa tu correo..." autoComplete='email'></input>
          </div>
          <div className={`form-group ${errors.email1 ? 'input-error' : ''}`}>
            <label htmlFor='email1'>Confirmar correo *</label>
            <input id='email1' type="email" {...register('email1', { required: true, maxLength: 50 })} placeholder="Repite tu correo..."></input>
          </div>
          <div className={`form-group ${errors.company ? 'input-error' : ''}`}>
            <label htmlFor='company'>Empresa *</label>
            <input id='company' type="text" {...register('company', { required: true, maxLength: 50 })} placeholder="Ingresa tu empresa..." autoComplete='company'></input>
          </div>
          <div className={`form-group ${errors.cuit ? 'input-error' : ''}`}>
            <label htmlFor='cuit'>CUIT de la empresa *</label>
            <input id='cuit' type="text" {...register('cuit', {
              required: true,
              pattern: /^\d{11}$/,
            })}
            maxLength={11} 
            placeholder="Ingresa el CUIT..."></input>
          </div>
          <div className={`form-group ${errors.password ? 'input-error' : ''}`}>
            <label htmlFor='password'>Contraseña *</label>
            <input id='password' type="password" 
              {...register('password', {
                required: true,
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres',
                },
                maxLength: {
                  value: 20,
                  message: 'La contraseña no debe tener más de 20 caracteres',
                },
              })}
              placeholder="Ingresa una contraseña..."
            />
          </div>
          <div className={`form-group ${errors.password1 ? 'input-error' : ''}`}>
            <label htmlFor='password1'>Confirmar contraseña *</label>
            <input id='password1' type="password" 
              {...register('password1', {
                required: true,
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres',
                },
                maxLength: {
                  value: 20,
                  message: 'La contraseña no debe tener más de 20 caracteres',
                },
              })}
              placeholder="Repite tu contraseña..."
            />
          </div>
          {errors.password || errors.password1 ? (
            <p className="input-error">
              {errors.password?.message || errors.password1?.message}
            </p>
          ) : null}
        </div>
        <div className='errors'>
          {hasErrors && <p className="input-error">Por favor, completa todos los campos.</p>}
        </div>
        <div className="div-btn">
          <Button type="submit" className="btn-form" children="Crear" />
          <Link to="/ingreso">¿Ya tenés cuenta? <span>Ingresá</span></Link>
        </div>
      </form>
    </>
  )
}

export default RegisterForm