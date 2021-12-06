import cl from "../styles/MyProjects.module.css" 
import Project from "./Project" 
//import laRegina from "../Images/laRegina.png" 
//import verboom from "../Images/verboom.png" 
//import verJuntos from "../Images/verJuntos.png" 
//import urlive from "../Images/urlive.png" 

function MyProjects() {

    return (
      <div className={cl.myProjects} id="projects" >
              <Project 
  photo={"laRegina.jpg"} 
  description={'La Regina es una sencilla web informativa para el hotel de mi familia, consta de información básica, responsive design, enlaces hacia distintos médios de contacto y Google Maps para encontrar el lugar.'} 
  techs={"HTML, CSS, Javascript, Express"}
  link={"https://la-regina.herokuapp.com/index.html"}
 />
<Project 
  photo={"verJuntos.jpg"} 
  description={"Ver Juntos es una SPA para ver videos de YouTube con tus amigos o pareja en sincronía, todos pueden compartir videos, chatear y enviar audios, una verdadera sala de cine full responsive. Blog y catálogo de películas."} 
  techs={"React Hooks, Socket.io, Express"}
  link={"https://ver-juntos.herokuapp.com"}
 /> 

 <Project 
  photo={"urlive.jpg"} 
  description={"Sideshow es una web app para streamers. Comparte contenido como en cualquier red social, pero sincronizado contigo, para poder poner musica y videos paralelamente, sin penalizaciones de copyright por parte de twitch."} 
  techs={"React, Socket.io, Firebase, Express, Otros..."}
  link={"https://metalink-alpha.herokuapp.com/index.html"}
 />
      </div>
    );
  }
  
  export default MyProjects;



 