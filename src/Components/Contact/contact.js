import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    
    <section id="contact">
      <h1 className='contactMeTxt'>Contact Me</h1>
        <form action="https://formsubmit.co/ihuezeblessing7@gmail.com" method="POST">

            <label className="name" class="name">
                <input type="text" id="name" name="name" placeholder='Full Name' required/>
            </label>
           
            <label className="Email" class="email">
                <input type="email" name="email" id="name" placeholder='Email Address' required/>
            </label>

            <label message="message">
                <textarea type="text" name="text" id="message" placeholder='Message'  required></textarea>
           </label>

          
           <button type="submit" class="button">Send</button>


           {/* <!-- <input class="button" type="submit" value="SEND"/> --> */}
        </form>  
        
        
    </section>

  )
}

export default Contact;