import React from 'react'
import logo from '../../assets/k..png';
import {Link} from 'react-scroll';
import './navbar.css'

const Navbar = () => {
  return (
    <div> 
        <div className="welcome">
          <nav className='nav1'>

          <img src= {logo} alt='Logo' className="logo"/>

          <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact</Link>
            <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Social Media</Link>


         </div>    

          <button className='desktopMenuBtn'>
            <div className='btnInnerContainer'>
                 Contact Me
            </div>
       
          </button>  

          </nav>
       </div>

   </div>
  )
}

export default Navbar;