import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const textAreaLength= 255;
function Contact() {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        console.log("message envoyé");
        navigate("/sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <Navbar />{" "}
      <div className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <label>Nom et prénom</label>
          <input type="text" name="user_name" />

          <label>Email</label>
          <input type="email" name="user_email" />

          <label>accueil et déroulement de la formation </label>
          <input type="number" name="note_accueil" min={1} max={5} placeholder="une note de 1 à 5" />
          <label>Commentaire sur le déroulement de la formation</label>
          <textarea name="com_accueil" maxlength={textAreaLength} placeholder={`${textAreaLength} caractères max`}/>

          <label>locaux et infrastructures </label>
          <input type="number" name="note_infrastructures" min={1} max={5} placeholder="une note de 1 à 5"/>
          <label>Commentaire sur l'infrastructure</label>
          <textarea name="com_locaux" maxlength={textAreaLength} placeholder={`${textAreaLength} caractères max`}/>

          <label>contenu formation </label>
          <input type="number" name="note_contenu" min={1} max={5} placeholder="une note de 1 à 5"/>
          <label>Commentaire sur le contenu de la formation</label>
          <textarea name="com_contenu" maxlength={textAreaLength} placeholder={`${textAreaLength} caractères max`}/>

          <label>moyens mis en oeuvre </label>
          <input type="number" name="note_moyens" min={1} max={5} placeholder="une note de 1 à 5"/>
          <label>Commentaire sur les moyens mis en oeuvre</label>
          <textarea name="com_moyens" maxlength={textAreaLength} placeholder={`${textAreaLength} caractères max`}/>

          <label>votre avis sur l'Enseignant </label>
          <input type="number" name="note_enseignant" min={1} max={5} />
          <label>Commentaire sur l'Enseignant</label>
          <textarea name="com_enseignant" maxlength={textAreaLength} placeholder={`${textAreaLength} caractères max`}/>

          <label>Commentaire sur la formation</label>
          <textarea name="message" maxlength={textAreaLength} placeholder={`${textAreaLength} caractères max`} />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
