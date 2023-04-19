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
       
         <div className="accroche"><div className="free1">
          Le couteau suisse</div><div className="free2"> pour votre centre de formation
         </div>
       
          </div>  <div className="free3">Des Formations sur mesure : La double expérience d'un formateur poids lourds : 10 ans sur la route et 10 ans en tant que formateur, pour vous accompagner vers la réussite ! 
          </div>
         <div className="badges">
          <div className="badge-bpcaser">BPCASER</div>
        <div className="reussite">           
            <div className="xp-texte">Réussite<div className="xp-pourcent">100%</div></div> 

        </div></div></div> 
        
      </div>
    </div>
  );
}

export default Accueil;
