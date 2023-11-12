import { createContext, useContext, useState } from 'react'

const MenuContext = createContext()

const useMenuContext = () => {
  return useContext(MenuContext)
}

const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 1000)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export { useMenuContext, MenuProvider }