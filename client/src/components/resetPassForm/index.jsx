import { useForm as useFormHook } from 'react-hook-form'
import { Button } from '../button'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../context/form'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNotifyContext } from '../../context/notify'
import "./resetPassForm.css"

function ResetPassForm() {
  const { notifySuccess, notifyError } = useNotifyContext()
  const { formRef, handleFormRef } = useForm()
  const { register, handleSubmit, reset, formState: { errors }, setError } = useFormHook()
  const navigate = useNavigate()

  const { tokenPass } = useParams()

  const handleUpdate = async (data) => {
    if (data.newPassword !== data.password1) {
      notifyError('Las contraseñas no coinciden')
      return
    }

    fetch(`http://localhost:3000/sesion/restablecer/${tokenPass}`, {
    // fetch('dominio host backend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // tokenPass: tokenPass,
        newPassword: data.newPassword,
      }),
    })
    .then(response => {
      if (response.ok) {
        notifySuccess('Contraseña actualizada')
        reset()
        setTimeout(() => {
          navigate('/ingreso')
        }, 2000)
      } else {
        notifyError('Error, por favor intente nuevamente')

        const errorData = response.json();
        Object.keys(errorData.errors).forEach((fieldName) => {
          setError(fieldName, {
            type: 'manual',
            message: errorData.errors[fieldName].message,
          })
        })
      }
    })
    .catch(error => console.error('Error al actualizar contraseña', error))
  }

  useEffect(() => {
    handleFormRef()
  }, [])

  const hasErrors = !!errors.name || !!errors.email || !!errors.message

  return (
    <>
      <h1 id='title-form'>Restablecer contraseña</h1>
      <p>Ingresa tu nueva contraseña.</p>
      <form className="form-reg-log" onSubmit={handleSubmit(values => { handleUpdate(values) })} ref={formRef}>
        <div className='div-form'>
          <div className={`form-group ${errors.newPassword ? 'input-error' : ''}`}>
              <label>Nueva contraseña *</label>
              <input type="password"
                {...register('newPassword', {
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
                placeholder="Ingresa tu nueva contraseña..."
              />
            </div>
            <div className={`form-group ${errors.password1 ? 'input-error' : ''}`}>
              <label>Confirmar contraseña *</label>
              <input type="password"
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
                placeholder="Repite tu nueva contraseña..."
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
          {/* <input type="hidden" {...register('tokenPass', { value: tokenPass })}></input> */}
          <Button type="submit" className="btn-form" children="Confirmar" />
        </div>
      </form>
    </>
  )
}

export default ResetPassForm