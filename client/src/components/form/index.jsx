import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import 'react-toastify/dist/ReactToastify.css'
import "./form.css"

function ContactForm({ formTitle }) {
  const notifySuccess = () => toast.success('Enviado con éxito')
  const notifyError = () => toast.error('Error al enviar')
  const { register, handleSubmit, reset } = useForm()

  const handleCreate = (data) => {
    fetch('http://localhost:3000/', {
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
          window.location.href = '/'
        }, 2500)
      } else {
        notifyError()
      }
    })
    .catch(error => console.error('Error al enviar el correo', error))
  }

  return (
    <>
      <h2 id='title-form'>{formTitle} con nosotros?</h2>
      <p>Completá el formulario para que uno de nuestros representantes se ponga en contacto.</p>
      <form className="form-contact" onSubmit={handleSubmit(values => { handleCreate(values) })}>
        <div className='div-form'>
          <input type="hidden" {...register('contactType')} value={formTitle}></input>
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
        <Button type="submit" className="btn-form" children="Enviar" />
      </form>
    </>
  )
}

export default ContactForm