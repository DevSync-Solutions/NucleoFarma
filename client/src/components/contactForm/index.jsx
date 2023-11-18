import { useForm } from 'react-hook-form'
import { Button } from '../button'
import { useNotifyContext } from '../../context/notify'
import "./contactForm.css"

function ContactForm({ formTitle, formRef }) {
  const { notifySuccess, notifyError } = useNotifyContext()
  const { register, handleSubmit, reset } = useForm()

  const userId = sessionStorage.getItem('userId') || null

  const handleCreate = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/contacto', {
        // fetch('dominio host backend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        if (response.ok) {
          notifySuccess('Enviado con éxito')
          reset()
          setTimeout(() => {
            window.location.href = '/'
          }, 2500)
        } else {
          notifyError('Error al enviar el mensaje')
        }
      } catch(error) { console.error('Error al enviar el correo', error)
    }
  }

  return (
    <>
      <h2 id='title-form'>{formTitle} con nosotros?</h2>
      <p>Completá el formulario para que uno de nuestros representantes se ponga en contacto.</p>
      <form className="form-contact" onSubmit={handleSubmit(values => { handleCreate(values) })} ref={formRef}>
        <div className='div-form'>
          <input type="hidden" {...register('contactType')} value={formTitle}></input>
          {userId && <input type="hidden" {...register('userId')} value={userId}></input>}
          <div className='form-group'>
            <label>Nombre *</label>
            <input type="text" {...register('name', { required: true, maxLength: 50 })} placeholder="Ingresa tu nombre..."></input>
          </div>
          <div className='form-group'>
            <label>Tu Correo *</label>
            <input type="email" {...register('email', { required: true, maxLength: 50 })} placeholder="Ingresa tu correo..."></input>
          </div>
          <div className='form-group'>
            <label>Mensaje *</label>
            <input type="text" {...register('message', { required: true, maxLength: 250 })} placeholder="Ingresa tu mensaje..."></input>
          </div>
        </div>
        <Button type="submit" className="btn-form" children="Enviar"/>
      </form>
    </>
  )
}

export default ContactForm