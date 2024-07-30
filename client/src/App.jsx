import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import Navbar from './layout/navbar'
import Footer from './layout/footer'
import { ToastContainer } from 'react-toastify'
import Condiciones from './pages/conditions'
import Privacidad from './pages/privacity'
import Docs from './pages/docs'
// import Register from './pages/register'
import Login from './pages/login'
import { MenuProvider } from './context/menu'
import { FormProvider } from './context/form'
import PageResetPassContact from './pages/ResetPassContact'
//import PageResetPassForm from './pages/resetPassForm'
import { NotifyProvider } from './context/notify'

function App() {
  const [formTitle, setFormTitle] = useState("¿Necesitás contactarte")

  const handleFormTitleChange = (newTitle) => {
    setFormTitle(newTitle)
  }

  const token = sessionStorage.getItem('token') || null

  // const tokenPass = sessionStorage.getItem('tokenPass') || null

  return (
    <NotifyProvider>
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
              <Route path='/condiciones' element={<Condiciones onFormTitleChange={handleFormTitleChange} />} />
              <Route path='/privacidad' element={<Privacidad />} />
              <Route path='/documentacion' element={<Docs token={token} />} />
              {/* <Route path='/registro' element={<Register />} /> */}
              <Route path='/ingreso' element={<Login />} />
              <Route path='/solicitar-recuperacion' element={<PageResetPassContact />} />
              {/* <Route path='/restablecer/:tokenPass' element={<PageResetPassForm />} /> */}
            </Routes>
            <Footer />
          </BrowserRouter>
        </FormProvider>
      </MenuProvider>
    </NotifyProvider>
  )
}

export default App
