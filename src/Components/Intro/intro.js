import React from 'react'
import './intro.css';
import bg from '../../assets/bg.jpg';
import {Link} from 'react-scroll';
 

const Intro = () => {
  return (
     <section id='intro'>
            <div className='introContent'>  
            <span className='hello'>Hello</span>
            <span className='introText'>I'm <span className='introName'>Kelechi</span><br/>Product Designer</span>
            <p className='introPara'> I am a highly motivated Product Designer<br/> who possesses excellent interpersonal skills <br/> enabling me to collaborate effectively <br/>with professionals of all levels and diverse teams. </p>
            <Link><button className='btn'>Hire Me</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg'/>
     </section>
    )
}

export default Intro;