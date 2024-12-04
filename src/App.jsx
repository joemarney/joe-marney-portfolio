//! Imports
import { Routes, Route } from "react-router-dom";
import "../node_modules/@material-tailwind/html/scripts/ripple.js";

//! Pages
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";

//! Components
import NavBar from "./components/navbar/navbar";

export default function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}
