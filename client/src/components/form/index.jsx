import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import 'react-toastify/dist/ReactToastify.css'
import "./form.css"

function ContactForm() {
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
      } else {
        notifyError()
      }
    })
    .catch(error => console.error('Error al enviar el correo', error))
  }

  return (
    <form className="form-contact" onSubmit={handleSubmit(values => {
      handleCreate(values)
    })}>
      <input className="input-form" type="text" {...register('name', { required: true, maxLength: 50 })} placeholder="Nombre..."></input>
      <input className="input-form" type="email" {...register('email', { required: true, maxLength: 50 })} placeholder="Correo..."></input>
      <input className="input-form" type="text" {...register('message', { required: true, maxLength: 250 })} placeholder="Mensaje..."></input>
      <Button type="submit" className="btn" children="Enviar" />
    </form>
  )
}

export default ContactForm