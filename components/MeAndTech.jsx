import cl from "../styles/MeAndTech.module.css" 
import Me from './Me'
import MyTechs from './MyTechs'  

function MeAndTech(props) {

    return (
      <div className={cl.meAndTech} id="aboutMe" >
           <Me/><MyTechs/>
      </div>
    );
  }
  
export default MeAndTech;