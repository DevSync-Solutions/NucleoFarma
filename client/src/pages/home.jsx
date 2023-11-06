import ContactForm from '../components/form'
import './home.css'

const Home = () => {
  return (
    <>
      <main className='container'>
        <h1>Nucleo Farma</h1>
      </main>
      <section className='container'>
        <ContactForm />
      </section>
    </>
  )
}

export { Home }