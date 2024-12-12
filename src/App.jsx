//! Imports
import { useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

//! Components
import NavBar from "./components/navbar/navbar";

//! Pages
import Landing from "./pages/landing/landing";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects.jsx";

//! Data
import { projects } from "./pages/projects/myProjects.ts";

export default function App() {
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [openModalIndex, setOpenModalIndex] = useState(null);

  const scrollTo = (section) => {
    if (section === "landing") {
      landingRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openModal = (index) => setOpenModalIndex(index);
  const closeModal = () => setOpenModalIndex(null);

  return (
    <>
      <NavBar scrollTo={scrollTo} />
      <section ref={landingRef}>
        <Landing scrollTo={scrollTo} />
      </section>
      <section ref={aboutRef}>
        <About scrollTo={scrollTo} />
      </section>
      <section ref={projectsRef} className="relative">
        <div className="h-screen flex flex-row justify-center items-center bg-gray-800">
          {projects.map((project, index) => (
            <Projects key={index} {...project} isModalOpen={openModalIndex === index} openModal={() => openModal(index)} closeModal={closeModal} />
          ))}
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <button className="mt-10 text-white text-2xl animate-bounce focus:outline-none" onClick={() => scrollTo("contact")}>
            ↓
          </button>
        </div>
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>

      <div className="fixed bottom-6 right-6">
        <button onClick={() => scrollTo("landing")} className="bg-theme-buttons py-2 px-4 rounded-full text-white shadow-md hover:shadow-lg transition-all">
          <FaArrowUp />
        </button>
      </div>
    </>
  );
}
