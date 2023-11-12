import Categories from '../categories'
import { Button } from '../../../components/button'
import { useMenuContext } from '../../../context/menu'
import './toggleMenu.css'

const ToggleMenu = ({ onFormTitleChange }) => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuContext()

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
          closeMenu={closeMenu}
        />
      )}
    </div>
  )
}

export default ToggleMenu