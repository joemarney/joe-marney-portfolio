//! Imports
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

//! Animations
import { motion } from "framer-motion";

//! Styles
import styles from "./projects.module.scss";

export default function Projects({ title, description, thumbnail, video, timescale, gitHubLink, deployedLink, technologies, inDepthDescription, openModalIndex, openModal, closeModal }) {
  useEffect(() => {
    document.body.style.overflow = openModalIndex ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModalIndex]);

  return (
    <main className={styles.container}>
      <div onClick={openModal} className="cursor-pointer group relative flex flex-col m-6 bg-theme-background2 shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-300 justify-center items-center">
        <div className="relative m-2.5 overflow-hidden rounded-md h-56">
          <img className="w-full transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" src={thumbnail} alt={`screenshot of my ${title} app`} />
        </div>
        <div className="p-4">
          <h2 className="mb-2 text-theme-words text-xl font-semibold">{title}</h2>
          <p className="text-theme-words leading-normal font-light">{description}</p>
        </div>
        <div className="flex flex-row justify-center items-center p-1 text-theme-words">
          <motion.div whileHover={{ scale: 1.4, rotate: 10, color: "#586994" }} transition={{ type: "spring", stiffness: 100 }}>
            <Link to={gitHubLink}>
              <FaGithub size="35" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4, rotate: 10, color: "#586994" }} transition={{ type: "spring", stiffness: 100 }}>
            <Link to={deployedLink}>
              <FaExternalLinkAlt size="25" />
            </Link>
          </motion.div>
        </div>
        {openModalIndex && (
          <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-theme-background2 bg-opacity-60 backdrop-blur-sm">
            <div className="relative m-4 p-4 w-full max-w-[90%] sm:max-w-[75%] max-h-[90%] overflow-y-auto rounded-lg shadow-sm bg-theme-background2" onClick={(e) => e.stopPropagation()}>
              <div>
                <h2 className="text-theme-words text-2xl">{title}</h2>
              </div>
              <div className="flex relative m-2.5 rounded-md justify-center">
                <img src={video} alt={`screen recording of ${title}`} className="max-h-[300px] w-auto object-cover rounded-sm" />
              </div>
              <div className="relative px-5 leading-normal text-theme-words">
                <p>
                  <em>{timescale}</em>
                </p>
              </div>
              <div className="relative p-5 leading-normal text-theme-words text-left">
                {inDepthDescription.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
              <h2 className="text-lg font-semibold text-theme-words">technologies used</h2>
              <div className={styles.technologies}>
                {technologies.map(({ Icon, label }, index) => (
                  <div key={index}>
                    <Icon size="30" color={label === "Express" ? "#EAEAEA" : undefined} />
                    <p className="text-theme-words mx-5">{label}</p>
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                <button onClick={closeModal} className="rounded-md bg-theme-buttons py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-theme-focus focus:shadow-none active:bg-theme-accents hover:bg-theme-hover active:shadow-none" type="button">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
