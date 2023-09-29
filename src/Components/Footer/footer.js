import React from 'react';
import './footer.css';
import twitter from '../../assets/tweeter.png';
import linkedin from '../../assets/linkedin.png'; 
import git from '../../assets/git.png';

const Footer = () => {
  return (
    <section >
    <p className="follow-me-txt">Follow me on social media</p>
    <div className= "social-icons">

        <div>
           <a href="https://twitter.com/hi_za_ra"><img  id="twitter" src={twitter} alt="tweeter icon" className="social-icon"/></a>
        </div>

        <div>
           <a href="https://github.com/Hizaras"><img src={git} alt="github icon" className="social-icon"/></a>
        </div>

        <div>  
         <a href="https://www.linkedin.com/in/blessing-ihueze-79926a22b/"><img id="linkedln" src={linkedin} alt="linkdln icon" className="social-icon"/></a>  
        </div>
    
    </div>

    <p className="copyright">Copywrite 2023 Kelechi Portfolio</p>
</section>

   )
}

export default Footer;

 