import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Home from "../assets/home.svg";
import Envelope from "../assets/envelope.svg";
import Photo from "../assets/photo.svg";
import Valise from "../assets/briefcase.svg";

function Navbar() {

      const navigate = useNavigate();
  return (
    <div className='Header'>
      {/* <img className='navbar-logo'src={Logo} alt='logo'/> */}
        <ul className='Navbar'>
            <li className='Navbar-item'> <Link  to="/" className="nav-link">
           <img className='home-icon' alt='home-icon' src={Home} />
          </Link></li>
            <li className='Navbar-item'> <Link to="/experience" className="nav-link">
            <img className='cv-icon' alt='cv-icon' src={Valise} />
          </Link></li>
            <li className='Navbar-item'> <Link to="/gallery" className="nav-link">
                 <img className='photo-icon' alt='photo-icon' src={Photo} />
          </Link></li>
            <li className='Navbar-item'> <Link to="/contact" className="nav-link">
            <img className='contact-icon' alt='contact-icon' src={Envelope} />
          </Link></li>
        </ul>
       
    </div>
  )
}

export default Navbar;