import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import './topPage.css'
import { Button } from "../button"
import { useMenuContext } from "../../context/menu"

const TopPage = () => {
  const { isMenuOpen, closeMenu } = useMenuContext()

  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
    if (isMenuOpen) {
      closeMenu()
    }
  }


  return (
    <>
      <ScrollLink onClick={scrollToTop} smooth={true} duration={500} to="/" id="scroll-Top"><Button className="scroll-top">↑</Button></ScrollLink>
    </>
  )
}

export default TopPage