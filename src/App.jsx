import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./Pages/Accueil";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Sent from "./Pages/MessageSent";
import Mail from "./Pages/MailContact";

function App() {
  console.log(typeof JSON.stringify(localStorage.getItem("validate")));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
