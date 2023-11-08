import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import './topPage.css'
import { Button } from "../button";

const TopPage = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  }

  return (
    <>
      <ScrollLink onClick={scrollToTop} smooth={true} duration={500} id="scroll-Top"><Button className="scroll-top">↑</Button></ScrollLink>
    </>
  )
}

export default TopPage