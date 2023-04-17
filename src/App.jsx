import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./Pages/Accueil";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Sent from "./Pages/MessageSent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sent" element={<Sent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
