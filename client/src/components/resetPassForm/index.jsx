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
  const { register, handleSubmit, reset } = useFormHook()
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
              <input type="password" {...register('newPassword', { required: true, maxLength: 50 })} placeholder="Ingresa tu nueva contraseña..."></input>
            </div>
            <div className='form-group'>
              <label>Repite tu nueva contraseña *</label>
              <input type="password" {...register('password1', { required: true, maxLength: 50 })} placeholder="Repite tu nueva contraseña..."></input>
            </div>
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