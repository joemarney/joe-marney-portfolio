//! Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import PCBuild from "./pages/blog/pcBuild.jsx";

//! Styles
import "./index.css";
import "./assets/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/joe-marney-portfolio/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/pc-build" element={<PCBuild />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
