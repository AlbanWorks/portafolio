import cl from "../styles/Email.module.css" 

function Email() {

    return (
        <form 
        action="https://formsubmit.co/santiagolizardomail@gmail.com" 
        method="POST" 
        className={cl.form}>
            <h5>Envíame un Email</h5>
            <input 
           type="email" 
           name="email"
           autocomplete="off"
           placeholder="Tu Email"
            required 
            className={cl.email}
            />
            
           <textarea 
           type="text" 
           name="name" 
           id="mytext" 
           autocomplete="off"
           cols="30" 
           rows="10" 
           placeholder="Tu Mensaje"
           className={cl.textarea} >
           </textarea>
           
          <button type="submit" className={cl.button} >Enviar</button>
       </form>
    );
  }
  
export default Email;