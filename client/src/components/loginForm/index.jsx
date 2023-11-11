import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import 'react-toastify/dist/ReactToastify.css'
import "./loginForm.css"

function LoginForm() {
  const notifySuccess = () => toast.success('Inicio de sesión con éxito')
  const notifyError = () => toast.error('Error al iniciar sesión')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const firstInputRef = useRef(null)

  useEffect(() => {
    firstInputRef.current && firstInputRef.current.focus()
  }, [])

  const handleCreate = (data) => {
    fetch('http://localhost:3000/login', {
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
    .catch(error => console.error('Error al iniciar sesión', error))
  }

  return (
    <>
      <h1 id='title-form'>Inicio de sesión</h1>
      <p>Completá el formulario para iniciar sesión.</p>
      <form className="form-contact" onSubmit={handleSubmit(values => { handleCreate(values) })}>
        <div className='div-form'>
          <div className='form-group'>
            <label>Correo *</label>
            <input type="email" {...register('email', { required: true, maxLength: 50 })} placeholder="Ingresa tu correo..."></input>
          </div>
          <div className='form-group'>
            <label>Contraseña *</label>
            <input type="password" {...register('password', { required: true, maxLength: 50 })} placeholder="Ingresa tu contraseña..."></input>
          </div>
        </div>
        <Button type="submit" className="btn-form" children="Enviar" />
        {errors.dataType && <p>{errors.dataType.message}</p>}
      </form>
    </>
  )
}

export default LoginForm