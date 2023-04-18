import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Photo from "../assets/photoMathieu.png";

function Experience() {
  const [gestionnaire, setGestionnaire] = useState(false);
  const [formateur, setFormateur] = useState(false);
  const [conducteur, setConducteur] = useState(false);
  const [diplome, setDiplome] = useState(false);
  const [mention, setMention] = useState(false);
  const [competence, setCompetence] = useState(false);
  const [materiel, setMateriel] = useState(false);
  const handleDiplome = () => {
    setDiplome(!diplome);
  };

  const handleMention = () => {
    setMention(!mention);
  };
  const handleGestionnaire = () => {
    setGestionnaire(!gestionnaire);
  };

  const handleFormateur = () => {
    setFormateur(!formateur);
  };

  const handleConducteur = () => {
    setConducteur(!conducteur);
  };
  const handleCompetence = () => {
    setCompetence(!competence);
  };
  const handleMateriel=()=>{
    setMateriel(!materiel)
  }

  return (
    <div className="experience">
      <Navbar />
      <div className="CV">
        <div className="col1">
          <h1 className="name">
            <img className="photo" src={Photo} />
            Mathieu Abruzzo
          </h1>
          <h2 className="fonction">
            {" "}
            <p className="metier">Enseignant de la conduite de la sécurité routière</p>
            <p className="certif">certifié BEPCASER</p>
          </h2>
        </div>
        <div className="col2">
          <div className="diplome">
            <p className="underline-txt">Diplomes et Formations</p>
            <div className="roll-group">
              {" "}
              <h2 className="roll" onClick={handleDiplome}>
                BEPCASER
              </h2>
              <div>
                {diplome && (
                  <div className="unroll">
                    <p className="date">réalisé en 2016</p>
                    <p className="centre">Etablissement: Geyser Rennes</p>
                  </div>
                )}
              </div>
              <h2 className="roll" onClick={handleMention}>
                <p className="txt">Mention lourd</p>
              </h2>
              <div>
                {mention && (
                  <div className="unroll">
                    <p>2016</p>
                    <p>ECF Landivisiau</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="experience-section">
            <p className="underline-txt"> Expérience</p>
            <div className="roll-group">
              {" "}
              <div className="roll" onClick={handleGestionnaire}>
                <p className="txt">gestionnaire de parc</p>
              </div>
              <div>
                {gestionnaire && (
                  <div className="unroll">
                    <p className="date">Depuis 2016</p>
                    <p className="centre">
                      Forget formation Saint Jacques de la Lande
                    </p>
                  </div>
                )}
              </div>
              <div className="roll" onClick={handleFormateur}>
                <p className="txt">Formateur</p>{" "}
              </div>
              <div>
                {formateur && (
                  <div className="unroll">
                    <p className="date">depuis 2013</p>
                    <p className="centre">
                      Forget formations Saint Jacques de la Lande
                    </p>
                    <p className="fonction">Référent TP marchandises</p>
                    <p className="fonction">Référent TP voyageurs</p>
                    <p className="fonction">Référent FCO marchandises</p>
                    <p className="fonction">Référent FCO voyageurs</p>
                    <p className="fonction">Référent FIMO marchandises</p>
                    <p className="fonction">Référent FIMO voyageurs</p>
                    <p className="fonction">Référent permis sec</p>
                    <p className="fonction">Conduite éco</p>
                    <p className="fonction">Simulateur</p>
                  </div>
                )}
              </div>
              <div className="roll" onClick={handleConducteur}>
                <p className="txt">conducteur routier</p>
              </div>
              <div>
                {conducteur && (
                  <div className="unroll"> 
                    <p className="date">De 2003 à 2013</p>{" "}
                    <p className="centre">Diverses entreprises en Bretagne</p>{" "}
                    <p className="fonction">
                      Transport régional et international
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="competence">
            {" "}
            <p className="underline-txt"> Compétences</p>
            <div className="roll-group">
              <div className="roll" onClick={handleCompetence}>
                activité
              </div>
              <div>
                {competence && (
                  <div className="unroll"> 
                    <p className="fonction">
                      Préparer et animer des actions de formation collectives
                    </p>
                 
                  </div>
                  
                )}
              </div>
               <div className="roll" onClick={handleMateriel}>
                Matériels
              </div>
              <div>
                {materiel && (
                  <div className="unroll">
                   <p> Citerne liquide</p>
                   <p>pulvérulent</p>
                   <p>bâché</p>
                   <p>camion remorque</p>
                   <p>movi-bennes</p>
                   <p>benne TP</p> 
                   <p>céréalière</p>                
                  </div>
                  
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
