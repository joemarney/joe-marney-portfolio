//! Imports
import { useState, useRef, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

//! Components
import NavBar from "./components/navbar/navbar";

//! Pages
import Landing from "./pages/landing/landing";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects.jsx";
import Skills from "./pages/skills/skills.jsx";
import Hobbies from "./pages/hobbies/hobbies.jsx";

//! Projects
import { projects } from "./pages/projects/myProjects.ts";

//! Animations
import Wrapper from "./components/animations/wrapper.jsx";
import { fadeScale } from "./components/animations/animations.js";

export default function App() {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const openModal = (index) => setOpenModalIndex(index);
  const closeModal = () => setOpenModalIndex(null);

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const lastIntersectingSection = useRef(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionsRef.current.indexOf(entry.target);

          if (entry.isIntersecting) {
            if (index < lastIntersectingSection.current) {
              setIsNavbarVisible(true);
            } else if (index > lastIntersectingSection.current) {
              setIsNavbarVisible(false);
            }

            lastIntersectingSection.current = index;

            if (index > 0) {
              setIsButtonVisible(true);
            } else {
              setIsButtonVisible(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="snap-y snap-mandatory h-screen overflow-scroll">
      <NavBar scrollTo={scrollTo} isNavbarVisible={isNavbarVisible} setIsNavbarVisible={setIsNavbarVisible} />

      <section className="snap-start" ref={(el) => (sectionsRef.current[0] = el)}>
        <Landing scrollTo={scrollTo} />
      </section>

      <section className="snap-start" ref={(el) => (sectionsRef.current[1] = el)}>
        <Skills scrollTo={scrollTo} />
      </section>

      <section ref={(el) => (sectionsRef.current[2] = el)} id="projects" className="h-screen flex flex-col justify-center items-center bg-theme-background text-center place-items-center snap-start">
        <Wrapper animation={fadeScale}>
          <h1 className="m-20 text-4xl font-bold">projects</h1>
        </Wrapper>

        <div className="w-full flex overflow-x-auto snap-x snap-mandatory sm:flex-wrap sm:justify-center md:justify-center">
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-80 snap-center sm:w-80 md:w-96 lg:w-1/3 xl:w-1/4">
              <Projects {...project} openModalIndex={openModalIndex === index} openModal={() => openModal(index)} closeModal={closeModal} />
            </div>
          ))}
        </div>

        <button className="mt-10 text-theme-words2 text-5xl animate-bounce" onClick={() => scrollTo("about")}>
          ↓
        </button>
      </section>

      <section className="snap-start" ref={(el) => (sectionsRef.current[3] = el)}>
        <About scrollTo={scrollTo} />
      </section>

      <section className="snap-start" ref={(el) => (sectionsRef.current[4] = el)}>
        <Hobbies scrollTo={scrollTo} />
      </section>

      <section className="snap-start" ref={(el) => (sectionsRef.current[5] = el)}>
        <Contact />
      </section>

      {isButtonVisible && (
        <div className={`fixed bottom-6 right-6 transition-opacity duration-300 animate-bounce ${isButtonVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <button onClick={() => document.getElementById("landing").scrollIntoView({ behavior: "smooth" })} className="bg-theme-buttons p-4 rounded-full text-theme-background shadow-md hover:bg-theme-words hover:text-theme-words2 transition-all">
            <FaArrowUp />
          </button>
        </div>
      )}
    </main>
  );
}
