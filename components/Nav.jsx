import { Link, animateScroll as scroll } from "react-scroll";
import cl from "../styles/Nav.module.css" 


function Nav() {

    return (
      <nav className={cl.nav}>
          
          <Link
    activeClass={cl.active}
    className={cl.inactive}
    to="aboutMe"
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
    >Sobre Mi</Link>  
    <Link
    activeClass={cl.active}
    className={cl.inactive}
    to="projects"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    >Proyectos</Link>    
    <Link
    activeClass={cl.active}
    className={cl.inactive}
    to="contact"
    spy={true}
    smooth={true}
    offset={-87}
    duration={500}
    >Contacto</Link>      
   
      </nav>
    )
  }
  
  export default Nav;