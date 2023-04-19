import React from "react";
import Navbar from "../Components/Navbar";
import Photo from "../assets/photoMathieu.png"
function Accueil() {
        // localStorage.setItem("validate",true);
        // localStorage.setItem("validate",false);
  console.log(localStorage.getItem('validate'));
  
  return (
    <div className="Accueil">
      <Navbar />
      <div className="background-section">
        <div className="slogan">
          {/* <img src={Photo} alt="photo" className="photo"  /> */}
          <div className="slogan-texte">
        <h1 className="slogan-titre">
           Mathieu Formation
        </h1>
        <h2 className="slogan-type">CONDUITE ECO POIDS LOURDS</h2>
        </div>
       
         <div><div className="free">
          Le couteau suisse pour votre centre de formation
         </div>
          </div>
        <div className="reussite">           
            <div className="xp-texte">Réussite<div className="xp-pourcent">100%</div></div> 

        </div></div>
        
      </div>
    </div>
  );
}

export default Accueil;
