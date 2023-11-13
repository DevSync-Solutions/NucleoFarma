import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/home'
import Navbar from './layout/navbar'
import Footer from './layout/footer'
import { ToastContainer } from 'react-toastify'
import Condiciones from './pages/conditions'
import Privacidad from './pages/privacity'
import Docs from './pages/docs'
import Register from './pages/register'
import Login from './pages/login'
import { MenuProvider } from './context/menu'
import { FormProvider } from './context/form'

function App() {
  const [formTitle, setFormTitle] = useState("¿Necesitás comunicarte")

  const handleFormTitleChange = (newTitle) => {
    setFormTitle(newTitle)
  }

  const token = localStorage.getItem('token') || null
  const RedirectToLogin = () => <Navigate to="/ingreso" />

  return (
    <MenuProvider>
      <FormProvider>    
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
          <Navbar onFormTitleChange={handleFormTitleChange} />
          <Routes>
            <Route path='/' element={<Home formTitle={formTitle} onFormTitleChange={handleFormTitleChange} />} />
            <Route path='/condiciones' element={<Condiciones />} />
            <Route path='/privacidad' element={<Privacidad />} />
            <Route path='/documentacion' element={token ? <Docs /> : <RedirectToLogin />} />
            <Route path='/registro' element={<Register />} />
            <Route path='/ingreso' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FormProvider>
    </MenuProvider>
  )
}

export default App
