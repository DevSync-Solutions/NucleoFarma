import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import Navbar from './layout/navbar'
import Footer from './layout/footer'
import { ToastContainer } from 'react-toastify'
import Condiciones from './pages/conditions'
import Privacidad from './pages/privacity'
import Docs from './pages/docs'
import { useRef } from 'react'
import Register from './pages/register'

function App() {
  const [formTitle, setFormTitle] = useState("¿Necesitás comunicarte")
  const formRef = useRef(null)

  const handleFormTitleChange = (newTitle) => {
    setFormTitle(newTitle)
  }

  const handleFormRef = () => {
    formRef.current && formRef.current.querySelector('input[name="name"]').focus()
  }

  return (
    <BrowserRouter>
      <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <Navbar onFormTitleChange={handleFormTitleChange} handleFormRef={handleFormRef} />
      <Routes>
        <Route path='/' element={<Home formTitle={formTitle} onFormTitleChange={handleFormTitleChange} formRef={formRef} handleFormRef={handleFormRef} />} />
        <Route path='/condiciones' element={<Condiciones />} />
        <Route path='/privacidad' element={<Privacidad />} />
        <Route path='/documentacion' element={<Docs />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/login' element={<Login />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
