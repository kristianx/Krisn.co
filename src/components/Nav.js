import './Nav.css';
import {NavLink} from 'react-router-dom'
import React,{useState} from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import Social from './Social'

function Nav() {
  const [isActive, setActive] = useState(false);
  if(isActive){
    document.documentElement.style.overflow = 'hidden'
  }else{
    document.documentElement.style.overflow = 'scroll'
  };
  const handleToggle = ()=>{
    setActive(!isActive);
    
  };
  
  return (
    
    <nav className="nav-section">
        <h1 className="Logo-text">Kristian Cupurdija</h1>

        <ul className={isActive ? "active" : null}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/casestudies">Case Studies</NavLink></li>
            <li className="nav-social"><Social/></li>
        </ul>
        
        <div className="hamburger" onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 124 124" >
              <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
              <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
              <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
          </svg>
        </div>  
    </nav>

  );
}

export default Nav;
