import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import Navbar from './layout/navbar'
import Footer from './layout/footer'
import { ToastContainer } from 'react-toastify'

function App() {
  const [formTitle, setFormTitle] = React.useState("¿Necesitas comunicarte")

  const handleFormTitleChange = (newTitle) => {
    setFormTitle(newTitle)
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
      <Navbar onFormTitleChange={handleFormTitleChange} />
      <Routes>
        <Route path='/' element={<Home formTitle={formTitle} onFormTitleChange={handleFormTitleChange} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
