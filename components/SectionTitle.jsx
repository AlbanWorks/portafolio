
import cl from "../styles/SectionTitle.module.css" 

function SectionTitle({title}) {

    return (
      <div className={cl.sectionTitle} >
         <h1>{title}</h1> 
      </div>
    );
  }
  
  export default SectionTitle;