import cl from "../styles/Project.module.css" 
import Image from 'next/image'

function Project({photo, description,techs, link}) {
  
   const photoDir =`/images/${photo}` 
   const dirprobe = "/images/laRegina.jpg"

    return (
      <div className={cl.project} >
          <div className={cl.imgContainer} >
              <Image
                src={photoDir}
                alt="myface"
                width={500}
                height={500}
                className={cl.image}
              />
          </div>
          <p className={cl.description} >{description}</p>
          <p className={cl.techs}>{techs}</p>
          <a href={link} className={cl.button} >Visitar</a>
      </div>
    );
  }
  
  export default Project;
