import Head from 'next/head'
import ParticleBackground from '../components/Background';
import Section from '../components/Section';
import Nav from '../components/Nav';
import cl from '../styles/App.module.css'

export default function Home() {
  return (
    <>
      <Head>
      <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app"/>
    <script src="https://kit.fontawesome.com/87e51fd4dd.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap" rel="stylesheet"></link>
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    <title>Mi Portafolio</title>
      </Head>
      <div className={cl.app} >
       <div className={cl.background} > <ParticleBackground /> </div>
       <Section name={"meAndTech"}  title={"Santiago Alba, Web Developer"}/>
       <Section name={"MyProjects"} title={"Mis Proyectos"}/>
       <Section name={"Contact"}  title={"Formas de Contacto"}/>
       <Nav/>
      </div>
    </>
  )
}

/*
<ParticleBackground />
  <Section name={"meAndTech"}  title={"Santiago Alba, Web Developer"}/>
      <Section name={"MyProjects"} title={"Mis Proyectos"}/>
      <Section name={"Contact"}  title={"Formas de Contacto"}/>
      <Nav/>
*/

//import ParticleBackground from './components/Background';
//import Nav from './components/Nav';
//import Section from './components/Section';
//import cl from "./styles/App.module.css" 


