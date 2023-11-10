import { useState } from 'react'
import Categories from '../categories'
import { Button } from '../../../components/button'
import './toggleMenu.css'

const ToggleMenu = ({ onFormTitleChange, onToggleMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    onToggleMenu(!isMenuOpen)
  }

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false)
      onToggleMenu(false)      
    }, 1000)
  }

  return (
    <div className="menu-container">
      <Button className="btn-toggle-menu" onClick={toggleMenu}>
        <div className={`btn-line ${isMenuOpen ? 'open' : ''}`} />
        <div className={`btn-line ${isMenuOpen ? 'open' : ''}`} />
        <div className={`btn-line ${isMenuOpen ? 'open' : ''}`} />
      </Button>
      {isMenuOpen && (
        <Categories
          className="toggle-categories"
          onFormTitleChange={onFormTitleChange}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      )}
    </div>
  )
}

export default ToggleMenu