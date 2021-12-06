import cl from "../styles/Section.module.css" 
import SectionTitle from './SectionTitle'
import MeAndTech from './MeAndTech'
import MyProjects from './MyProjects'
import Contact from './Contact'

function Section({name,title}) {

    return (
      <div className={cl.section} >
          <SectionTitle title={title}/>
           {name==="meAndTech"?(
                   <MeAndTech/>
           ):name==="MyProjects"?(
                   <MyProjects/>
           ):(
                    <Contact/>
           )}
      </div>
    );
  }
  
  export default Section;