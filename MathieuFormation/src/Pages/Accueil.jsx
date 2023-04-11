import React from "react";
import Navbar from "../Components/Navbar";
function Accueil() {
  return (
    <div className="Accueil">
      <Navbar />
      <div className="background-section">

        <h1 className="slogan">
            L'expérience à votre service
        </h1>
         <div className="free"></div>
        <div className="reussite">           
            <div className="xp-texte"> Réussite<div className="xp-pourcent">98%</div></div>
            

        </div>
        
      </div>
    </div>
  );
}

export default Accueil;
