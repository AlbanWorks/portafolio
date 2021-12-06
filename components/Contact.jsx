import cl from "../styles/Contact.module.css" 
import Email from "./Email" 

function Contact() {

    return (
      <div className={cl.contact} id="contact" >
           <div className={cl.side} >
                    <Email/>
           </div>
           <div className={cl.side} >
                <a href="https://www.linkedin.com/in/santiago-nicol%C3%A1s-lizardo-alba-498b641b4/" className={cl.linkedIn} >   
                  <i class="fab fa-linkedin"></i>
                  <h4>Mi LinkedIn</h4>   
                </a>
           </div>
      </div>
    );
  }
  
export default Contact;