import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

      const navigate = useNavigate();
  return (
    <div className='Header'><h1 className='navbar-logo'>Mathieu Abruzzo Formation</h1>
        <ul className='Navbar'>
            <li className='Navbar-item'> <Link  to="/" className="nav-link">
            Accueil
          </Link></li>
            <li className='Navbar-item'> <Link to="/experience" className="nav-link">
            Experience
          </Link></li>
            <li className='Navbar-item'> <Link to="/gallery" className="nav-link">
                Galerie
          </Link></li>
            <li className='Navbar-item'> <Link to="/contact" className="nav-link">
           Contact
          </Link></li>
        </ul>
        <button className='Navbar-burger'><span className="burger-bar"></span></button>
    </div>
  )
}

export default Navbar;