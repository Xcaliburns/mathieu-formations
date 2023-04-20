import React, { useRef,  } from "react";
import Navbar from "../Components/Navbar";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const serviceId = import.meta.env.VITE_SERVICE_ID_CONTACT;
const templateId = import.meta.env.VITE_TEMPLATE_CONTACT_KEY;
const publicKey = import.meta.env.VITE_PUBLIC_KEY_CONTACT;
const textAreaLength = 1000;

function MailContact() {
  console.log(localStorage.getItem("validate"));  
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
       
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

 

   
  return (
    <div>
      <Navbar />{" "}
      <div className="mailcontact">        {" "}
        
          <form ref={form} onSubmit={sendEmail}>
            <label>Nom et prénom</label>
            <input type="text" name="user_name" />

            <label>Email</label>
            <input type="email" name="user_mail" />

            <label>Telephone</label>
            <input type="tel" name="user_tel" />          

            <label>Message</label>
            <textarea
              name="message"
              maxLength={textAreaLength}
              placeholder={`${textAreaLength} caractères max`}
            />
            <input type="submit" value="Send" />
          </form>      
      </div>
    </div>
  );
}

export default MailContact;
