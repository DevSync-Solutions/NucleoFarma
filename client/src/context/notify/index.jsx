import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NotifyContext = createContext()

const useNotifyContext = () => {
  return useContext(NotifyContext)
}

const NotifyProvider = ({ children }) => {

  const notifySuccess = (message) => toast.success(message)
  const notifyError = (message) => toast.error(message)

  return (
    <NotifyContext.Provider value={{ notifyError, notifySuccess }}>
      {children}
    </NotifyContext.Provider>
  )
}

export { useNotifyContext, NotifyProvider }