import { createContext, useContext, useRef } from 'react'

const FormContext = createContext()

const useForm = () => {
  return useContext(FormContext)
}

const FormProvider = ({ children }) => {
  const formRef = useRef(null)

  const handleFormRef = () => {
    const formElement = formRef.current;

    if (formElement) {
      const namedInput = formElement.querySelector('input[name="name"]');

      if (namedInput) {
        namedInput.focus();
      } else {
        const firstInput = formElement.querySelector('input');
        if (firstInput) {
          firstInput.focus();
        }
      }
    }
  }

  return (
    <FormContext.Provider value={{ formRef, handleFormRef }}>
      {children}
    </FormContext.Provider>
  )
}

export { useForm, FormProvider }