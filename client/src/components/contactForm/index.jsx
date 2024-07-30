import { useForm } from 'react-hook-form'
import { Button } from '../button'
import { useNotifyContext } from '../../context/notify'
// import nodemailer from 'nodemailer';
import "./contactForm.css"

function ContactForm({ formTitle, formRef }) {
  const { notifySuccess, notifyError } = useNotifyContext()
  const { register, handleSubmit, reset, formState: { errors }, setError } = useForm()

  const userId = sessionStorage.getItem('userId') || null

  const handleCreate = async (data) => {
    try {
      notifySuccess('Enviado con éxito')
      //const response = await fetch('http://localhost:3000/contacto', {
        const response = await fetch('https://nucleofarma-api.onrender.com/contacto', {
        
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        if (response.ok) {
          // notifySuccess('Enviado con éxito')
          reset()
          setTimeout(() => {
            window.location.href = '/'
          }, 2500)
        } else {
          notifyError('Error al enviar el mensaje')

          const errorData = await response.json();
          Object.keys(errorData.errors).forEach((fieldName) => {
            setError(fieldName, {
              type: 'manual',
              message: errorData.errors[fieldName].message,
            })
          })
        }
      } catch(error) { console.error('Error al enviar el correo', error)
    }
  }

  const hasErrors = !!errors.name || !!errors.email || !!errors.message

  return (
    <>
      <h2 id='title-form'>{formTitle} con nosotros?</h2>
      <p>Completá el formulario para que uno de nuestros representantes se ponga en contacto.</p>
      <form className="form-contact" onSubmit={handleSubmit(values => { handleCreate(values) })} ref={formRef}>
        <input type="hidden" {...register('contactType')} value={formTitle}></input>
        {userId && <input type="hidden" {...register('userId')} value={userId}></input>}
        <div className={`form-group ${errors.name ? 'input-error' : ''}`}>
          <label htmlFor="name">Nombre *</label>
          <input id='name' type="text" {...register('name', { required: true, maxLength: 50 })} placeholder="Ingresa tu nombre..." autoComplete="name"></input>
        </div>
        <div className={`form-group ${errors.email ? 'input-error' : ''}`}>
          <label htmlFor="email">Correo *</label>
          <input id='email' type="email" {...register('email', { required: true, maxLength: 50 })} placeholder="Ingresa tu correo..." autoComplete="email"></input>
        </div>
        <div className={`form-group ${errors.message ? 'input-error' : ''}`}>
          <label htmlFor="message">Mensaje *</label>
          <input id='message' type="text" {...register('message', { required: true, maxLength: 250 })} placeholder="Ingresa tu mensaje..."></input>
        </div>
        <Button type="submit" className="btn-form" children="Enviar"/>
      </form>
      <div className='errors'>
        {hasErrors && <p className="input-error">Por favor, completa todos los campos.</p>}
      </div>
    </>
  )
}

export default ContactForm