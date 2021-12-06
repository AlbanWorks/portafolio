import cl from "../styles/MyTechs.module.css" 

function Me() {

    return (
      <div className={cl.myTechs} >
          <h2  className={cl.title} >Las Tecnologías Que Uso</h2>
          <div  className={cl.techList} >
            <div className={cl.tech} >
              <i class="fab fa-html5"></i>
              <p>HTML5</p>
            </div>
            <div className={cl.tech} >
              <i class="fab fa-css3-alt"></i>
              <p>CSS3</p>
            </div>
            <div className={cl.tech} >
              <i class="fab fa-js-square"></i>
              <p>Javascript</p>
            </div>
            <div className={cl.tech} >
              <i class="fab fa-node-js"></i>
              <p>Node js</p>
            </div>
            <div className={cl.tech} >
              <i class="fab fa-react"></i>
              <p>React js</p>
            </div>
            <div className={cl.tech} >
              <i class="fab fa-git-alt"></i>
              <p>Git</p>
            </div>
          </div>
          <div className={cl.services} >
            <h5>Además</h5>
             <> Next.js, Firebase, Express, Socket.io, Heroku</>
          </div>
      </div>
    );
  }
  
  export default Me;

 // 