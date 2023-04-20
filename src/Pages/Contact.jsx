import React, { useRef, useState,useEffect } from "react";
import Navbar from "../Components/Navbar";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const textAreaLength = 255;

function Contact() {
  console.log(localStorage.getItem("validate"));
  const [validation, setValidation] = useState(
    localStorage.getItem("validate")
  );
  // localStorage.setItem("validate", false);
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(validation);
        console.log(result.text);
        console.log("message envoyé");
        localStorage.setItem("validate", true);
        navigate("/sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const accesDenied=()=>{
    navigate("/")
  }

   useEffect(() => {
    if(validation === "true" ){navigate("/")}
    return () => {
      // Nettoyage des ressources ou des effets
    };
  }, []);
  console.log(typeof localStorage.getItem("validate"));
  console.log(typeof validation);
  return (
    <div>
      <Navbar />{" "}
      <div className="contact">
        {" "}
        {validation !== "true" && (
          <form ref={form} onSubmit={sendEmail}>
            <label>Nom et prénom</label>
            <input type="text" name="user_name" />

            <label>Email</label>
            <input type="email" name="user_email" />

            <label>accueil et déroulement de la formation </label>
            <input
              type="number"
              name="note_accueil"
              min={1}
              max={5}
              placeholder="une note de 1 à 5"
            />
            <label>Commentaire sur le déroulement de la formation</label>
            <textarea
              name="com_accueil"
              maxLength={textAreaLength}
              placeholder={`${textAreaLength} caractères max`}
            />

            <label>locaux et infrastructures </label>
            <input
              type="number"
              name="note_infrastructures"
              min={1}
              max={5}
              placeholder="une note de 1 à 5"
            />
            <label>Commentaire sur l'infrastructure</label>
            <textarea
              name="com_locaux"
              maxLength={textAreaLength}
              placeholder={`${textAreaLength} caractères max`}
            />

            <label>contenu formation </label>
            <input
              type="number"
              name="note_contenu"
              min={1}
              max={5}
              placeholder="une note de 1 à 5"
            />
            <label>Commentaire sur le contenu de la formation</label>
            <textarea
              name="com_contenu"
              maxLength={textAreaLength}
              placeholder={`${textAreaLength} caractères max`}
            />

            <label>moyens mis en oeuvre </label>
            <input
              type="number"
              name="note_moyens"
              min={1}
              max={5}
              placeholder="une note de 1 à 5"
            />
            <label>Commentaire sur les moyens mis en oeuvre</label>
            <textarea
              name="com_moyens"
              maxLength={textAreaLength}
              placeholder={`${textAreaLength} caractères max`}
            />

            <label>votre avis sur l'Enseignant </label>
            <input type="number" name="note_enseignant" min={1} max={5} />
            <label>Commentaire sur l'Enseignant</label>
            <textarea
              name="com_enseignant"
              maxLength={textAreaLength}
              placeholder={`${textAreaLength} caractères max`}
            />

            <label>Commentaire sur la formation</label>
            <textarea
              name="message"
              maxLength={textAreaLength}
              placeholder={`${textAreaLength} caractères max`}
            />
            <input type="submit" value="Send" />
          </form>
        )}
       
        {validation === "true" &&
          <div className="form-complet">
            {" "}
            <button type="button"  onClick={accesDenied}>
              acces refusé
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default Contact;
