import cl from "../styles/Me.module.css" 
//import myFace from "../public/images/myFace.jpg" 
import Image from 'next/image'
function Me() {

    return (
      <div className={cl.me} >
           <div className={cl.photoContainer}>
             <Image
               src="/images/myFace.jpg"
               alt="myface"
               width={500}
               height={500}
               className={cl.photo}
             />
           </div>
           <p className={cl.aboutMe}>
                Soy Santiago, desde que descubrí la programación he encontrado en ella un medio perfecto para combinar técnica y arte. Me encanta crear nuevas soluciónes, profundizar en tecnologías conocidas e incorporar nuevas para trabajar en proyectos cada vez más grandes.
           </p>
      </div>
    );
  }
  
  export default Me;