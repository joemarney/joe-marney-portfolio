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

//! Data
import { projects } from "./pages/projects/myProjects.ts";

export default function App() {
  // const landingRef = useRef(null);
  // const aboutRef = useRef(null);
  // const projectsRef = useRef(null);
  // const contactRef = useRef(null);

  // const scrollTo = (section) => {
  //   document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  // };

  const [openModalIndex, setOpenModalIndex] = useState(null);

  const openModal = (index) => setOpenModalIndex(index);
  const closeModal = () => setOpenModalIndex(null);

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  // if (currentScrollY > 100) {
  //   setIsButtonVisible(true);
  // } else {
  //   setIsButtonVisible(false);
  // }

  //     if (currentScrollY > lastScrollY) {
  //       setIsNavbarVisible(false);
  //     } else {
  //       setIsNavbarVisible(true);
  //     }

  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });

  //   setIsButtonVisible(false);
  // };

  // const sectionsRef = useRef([]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const index = sectionsRef.current.indexOf(entry.target);

  //         if (index === 0) {
  //           setIsButtonVisible(false);
  //         } else if (entry.isIntersecting) {
  //           setIsButtonVisible(true);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   sectionsRef.current.forEach((section) => {
  //     if (section) observer.observe(section);
  //   });
  // }, []);

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
      <NavBar scrollTo={scrollTo} isVisible={isNavbarVisible} />

      <section className="snap-start" ref={(el) => (sectionsRef.current[0] = el)}>
        <Landing scrollTo={scrollTo} />
      </section>

      <section className="snap-start" ref={(el) => (sectionsRef.current[1] = el)}>
        <About scrollTo={scrollTo} />
      </section>

      <section ref={(el) => (sectionsRef.current[2] = el)} id="projects" className="min-h-screen flex flex-col justify-center items-center bg-theme-background text-center place-items-center overflow-x-hidden snap-start">
        <h1 className="m-5 text-4xl font-bold text-center">projects</h1>
        <div className="w-full flex flex-wrap sm:justify-center md:justify-center">
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-1/3 xl:w-1/4">
              <Projects {...project} openModalIndex={openModalIndex === index} openModal={() => openModal(index)} closeModal={closeModal} />
            </div>
          ))}
        </div>
        <button className="mt-10 text-theme-words2 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("contact")}>
          ↓
        </button>
      </section>

      <section className="snap-start" ref={(el) => (sectionsRef.current[3] = el)}>
        <Contact />
      </section>

      {/* <div className={`fixed bottom-6 right-6 transition-opacity duration-300 animate-bounce ${isButtonVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <button className="bg-theme-buttons p-4 rounded-full text-white shadow-md hover:shadow-lg transition-transform transform hover:scale-110">
          <FaArrowUp />
        </button>
      </div> */}
      {isButtonVisible && (
        <div className={`fixed bottom-6 right-6 transition-opacity duration-300 animate-bounce ${isButtonVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <button onClick={() => document.getElementById("landing").scrollIntoView({ behavior: "smooth" })} className="bg-theme-buttons p-4 rounded-full text-white shadow-md hover:shadow-lg transition-all">
            <FaArrowUp />
          </button>
        </div>
      )}
    </main>
  );
}
