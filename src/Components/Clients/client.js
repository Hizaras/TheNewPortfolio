import React from 'react';
import './client.css';
import somto from '../../assets/Mr somto.png';
import doris from '../../assets/doris.jpg';

const Client = () => {
  return (
    <section id='contactPage'>
        <div id='clients'>
           <h1 id='contactPageTitle'>My Clients</h1>
           <p className='clientsDesc'>
           I am a highly motivated Product Designer
           who possesses excellent interpersonal skills 
           enabling me to collaborate effectively with professionals of all levels and diverse teams.
          </p> 
          <div className='clientImgs'>
            
          <div><img src={somto} alt='clients' className='clientImg'/><p>Somto momah <br/> <span className='ceoTxt'>C.E.O</span><br/> Mungin</p></div>
          <div><img src={doris} alt='clients' className='clientImg'/><p>Doris Ebelechukwu <br/> <span className='ceoTxt'>C.E.O</span><br/> Doris Alluring</p></div>
          <div><img src={somto} alt='clients' className='clientImg'/><p>Somto momah <br/> <span className='ceoTxt'>C.E.O</span><br/> Mungin</p></div>
          <div><img src={doris} alt='clients' className='clientImg'/><p>Doris Ebelechukwu <br/> <span className='ceoTxt'>C.E.O</span><br/> Doris Alluring</p></div>
        

         </div>
        </div> 
{/* 
        <div id='contact'>
        <h1 id='contactTitle'>Contact Me</h1>
        <p className='contactDesc'>
           I am a highly motivated Product Designer
           who possesses excellent interpersonal skills 
           enabling me to collaborate effectively with professionals of all levels and diverse teams.
        </p> 
        <form className='contactForm'>
          <inpt type='text' className='name' placeholder='Your Name' />
          <inpt type='email' className='email' placeholder='Your Email'/>
          <textarea name='message'rows='5' placeholder='Your Message'></textarea>
          <button type='submit' className='submitBtn' value='send'></button>

        </form>
        </div> */}

    </section> 
  )
}

export default Client;