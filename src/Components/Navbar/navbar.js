import React, { useState } from 'react'
import logo from '../../assets/k..png';
import menu from '../../assets/menu.png';
import {Link} from 'react-scroll';
import './navbar.css'

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <div> 
        <div className="welcome">
          <nav className='nav1'>

          <img src= {logo} alt='Logo' className="logo"/>

          <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"  onClick={() =>setShowMenu(!showMenu)} >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={() =>setShowMenu(!showMenu)} >About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'  onClick={() =>setShowMenu(!showMenu)} >Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'onClick={() =>setShowMenu(!showMenu)} >Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'onClick={() =>setShowMenu(!showMenu)} >Contact</Link>
            <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={() =>setShowMenu(!showMenu)} >Social Media</Link>


         </div>    

          <button className='desktopMenuBtn'> Contact Me</button>  

          <img src= {menu} alt='Menu' className="mobMenu" onAuxClick={()=>setShowMenu(!showMenu)}/>

          <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem"  onClick={() =>setShowMenu(false)} >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() =>setShowMenu(false)} >About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'  onClick={() =>setShowMenu(false)} >Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={() =>setShowMenu(false)} >Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={() =>setShowMenu(false)} >Contact</Link>
            <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() =>setShowMenu(false)} >Social Media</Link>


         </div>    


          </nav>
       </div>

   </div>
  )
}

export default Navbar;