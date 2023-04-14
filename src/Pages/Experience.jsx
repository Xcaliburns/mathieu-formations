import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Photo from "../assets/photoMathieu.png";

function Experience() {
  const [gestionnaire, setGestionnaire] = useState(false);
  const [formateur, setFormateur] = useState(false);
  const [conducteur, setConducteur] = useState(false);

  const handleGestionnaire = () => {
    setGestionnaire(!gestionnaire);
  };

  const handleFormateur = () => {
    setFormateur(!formateur);
  };

  const handleConducteur = () => {
    setConducteur(!conducteur);
  };

  return (
    <div className="experience">
      <Navbar />
      <div className="CV">
        <div className="col1">
          <h1 className="name"><img className='photo'src={Photo} />Mathieu Abruzzo</h1>
          <h2 className="fonction">
            {" "}
            <p>Enseignant de la conduite de la sécurité routière</p><p className="certif">certifié BEPCASER</p>
          </h2>
        </div>
        <div className="col2">
          col2
          <div className="diplome">Diplomes et formations</div>
          <div className="experrience">
            experience
            <p onClick={handleGestionnaire}>
              gestionnaire de parc pour Forget formation
            </p>
            <div>
              {gestionnaire && <p>le paragraphe gestionnaire de parc</p>}
            </div>
            <p onClick={handleFormateur}>Formateur Forget formation</p>
            <div>{formateur && <p>le paragraphe formateur</p>}</div>
            <p onClick={handleConducteur}>conducteur routier</p>
            <div>{conducteur && <p>le paragraphe conducteur</p>}</div>
          </div>
          <div className="competence">compétences</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
