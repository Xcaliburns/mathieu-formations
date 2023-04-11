import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

      const navigate = useNavigate();
  return (
    <div className='Header'><h1>Mathieu Abruzzo Formation</h1>
        <ul className='Navbar'>
            <li> <Link  to="/" className="nav-link">
            Accueil
          </Link></li>
            <li> <Link to="/experience" className="nav-link">
            Experience
          </Link></li>
            <li> <Link to="/gallery" className="nav-link">
                Galerie
          </Link></li>
            <li> <Link to="/contact" className="nav-link">
           Contact
          </Link></li>
        </ul>
    </div>
  )
}

export default Navbar;