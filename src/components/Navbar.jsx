import React from 'react';
import "./Navbar.css";
import { Link, useLocation} from 'react-router-dom';
import { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "../images/logo.png";

const Navbar = () => {
  const[openNavbar, SetOpenNavbar] = useState(false);
  const handleClick = () => SetOpenNavbar(!openNavbar);

  const location = useLocation();

  return (
    <div className='navbarall'>
    <div className="navbar flex">
      <Link to="/" className='logo flex items-center content-center'>
        <img src={logo} alt="" className='img mr-2'/>
        <h3 className='logo-text text-black font-bold'>WU</h3>
      </Link>
      <div className="sag">
        <ul className={openNavbar ?  "gender active" : "gender"}>
          <li><Link to="/" className={`navbar-links ${location.pathname === '/' ? 'active' : ''}`}>Anasayfa</Link></li>
          <li><Link to="/hakkimda" className={`navbar-links ${location.pathname === '/hakkimda' ? 'active' : ''}`}>Hakkımda</Link></li>
          <li><Link to="/arsiv" className={`navbar-links ${location.pathname === '/arsiv' ? 'active' : ''}`}>Arşiv</Link></li>
          <li><Link to="/iletisim" className={`navbar-links ${location.pathname === '/iletisim' ? 'active' : ''}`}>İletişim</Link></li>
        </ul>
        <div className="acKapaMenu" onClick={handleClick} style={{fontSize:"larger", color:"black", cursor:"pointer"}}>
            {openNavbar ? <FaTimes style={{marginRight:"10px"}}/> : <FaBars style={{marginRight:"10px"}}/>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar