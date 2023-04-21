import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Sans-titre-1.svg";
import Sondage from "../assets/Sondage.svg";
import Envelope from "../assets/envelope.svg";
import Photo from "../assets/photo.svg";
import Valise from "../assets/briefcase.svg";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <ul className="Navbar">
       
      
         <li>
          {" "}
          <Link to="/" className="nav-link">
            <img className="navbar-logo" alt="logo" src={Logo} />{" "}
          </Link>
        </li>
        <li className="Navbar-item">
          {" "}
          <Link to="/experience" className="nav-link">
            <img className="cv-icon" alt="cv-icon" src={Valise} />
          </Link>
        </li>
        <li className="Navbar-item">
          {" "}
          <Link to="/gallery" className="nav-link">
            <img className="photo-icon" alt="photo-icon" src={Photo} />
          </Link>
        </li>
        <li className="Navbar-item">
          {" "}
          <Link to="/mail" className="nav-link">
            <img className="contact-icon" alt="contact-icon" src={Envelope} />
          </Link>
        </li>
           <li className="Navbar-item">
          {" "}
          <Link to="/contact" className="nav-link">
            <img className="cv-icon" alt="cv-icon" src={Sondage} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
