import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import Photo from "../assets/photoMathieu.png"

function Experience() {
    const [gestionnaire,setGestionnaire]=useState(false);
    const [formateur,setFormateur]=useState(false);
    const [conducteur,setConducteur]=useState(false);

    const handleGestionnaire=()=>{
      setGestionnaire(!gestionnaire)
    }

    const handleFormateur=()=>{
      setFormateur(!formateur)
    }

    const handleConducteur=()=>{
      setConducteur(!conducteur)
    }

  return (
   <div className='experience'><Navbar/> 
   <div className='CV'>
   <div className='col1'>    
    <h1 className='name'>MathieuABRUZZO</h1>
    <h2 className='fonction'> Enseignant de la conduite de la sécurité routière certifié BEPCASER</h2>
</div>
   <div className='col2'>
    col2
    <div >Diplomes et formations</div>
    
    <div >experience
      <p onClick={handleGestionnaire}>gestionnaire de parc pour Forget formation</p>
      <p onClick={handleFormateur}>Formateur Forget formation</p>
      <p onClick={handleConducteur}>conducteur routier</p>
    </div>
    <div>compétences</div>
    </div>
    </div>

    </div>
  )
}

export default Experience;