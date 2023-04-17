import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

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
          <label>Name</label>
          <input type="text" name="user_name" />

          <label>Email</label>
          <input type="email" name="user_email" />

          <label>accueil et déroulement de la formation </label>
          <input type="number" name="note_accueil" min={1} max={5} />
          <label>Commentaire</label>
          <textarea name="com_accueil" />

          <label>locaux et infrastructures </label>
          <input type="number" name="note_infrastructures" min={1} max={5} />
          <label>Commentaire</label>
          <textarea name="com_locaux" />

          <label>contenu formation </label>
          <input type="number" name="note_contenu" min={1} max={5} />
          <label>Commentaire</label>
          <textarea name="com_contenu" />

          <label>moyens mis en oeuvre </label>
          <input type="number" name="note_moyens" min={1} max={5} />
          <label>Commentaire</label>
          <textarea name="com_moyens" />

          <label>Enseignant </label>
          <input type="number" name="note_enseignant" min={1} max={5} />
          <label>Commentaire</label>
          <textarea name="com_enseignant" />

          <label>Commentaire sur la formation</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
