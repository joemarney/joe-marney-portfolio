//! Imports
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GithubOriginal } from "devicons-react";

//! Styles
import styles from "./projects.module.scss";

export default function ProjectCard({ title, description, image, timescale, gitHubLink, deployedLink, technologies, inDepthDescription, isModalOpen, openModal, closeModal }) {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div className="relative flex flex-col my-6 bg-theme-boxes shadow-sm border border-theme-borders rounded-lg w-96">
      <div className="relative m-2.5 rounded-md">
        <img src={image} alt={`screenshot of ${title}`} className="h-56 w-full object-cover object-top rounded-md" />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-theme-words text-xl font-semibold">{title}</h6>
        <p className="text-theme-words leading-normal font-light">{description}</p>
      </div>
      <div className="flex direction-row px-4 pb-4 pt-0 mt-2 justify-between">
        <button onClick={openModal} className="rounded-md bg-theme-buttons py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-theme-focus focus:shadow-none active:bg-theme-accents hover:bg-theme-hover active:shadow-none" type="button">
          Read more
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] grid place-items-center bg-black bg-opacity-60 backdrop-blur-sm">
            <div className="relative m-4 p-6 w-full sm:w-3/4 max-h-screen overflow-y-auto rounded-lg bg-white shadow-sm">
              <div>
                <h1>{title}</h1>
              </div>
              <div className="flex relative m-2.5 rounded-md justify-center">
                <img src={image} alt={`screenshot of ${title}`} className="h-auto w-50 object-cover rounded-md" />
              </div>
              <div className="relative px-5 leading-normal text-theme-words">
                <em>{timescale}</em>
              </div>
              <div className="flex justify-center mt-2.5">
                <Link to={deployedLink}>
                  <button className="rounded-md bg-theme-buttons py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-theme-focus focus:shadow-none active:bg-theme-accents hover:bg-theme-hover active:shadow-none" type="button">
                    Check it out
                  </button>
                </Link>
              </div>
              <div className="relative p-5 leading-normal text-theme-words">
                {inDepthDescription.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
              <h2 className="text-lg font-semibold">Technologies used</h2>
              <div className={styles.technologies}>
                {technologies.map(({ Icon, label }, index) => (
                  <div key={index} className="bg-theme-boxes border border-theme-borders">
                    <Icon size="40" />
                    <p className="text-sm text-theme-words px-3">{label}</p>
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
        <Link to={gitHubLink} className={styles.github}>
          <GithubOriginal size="40" color="white" />
        </Link>
      </div>
    </div>
  );
}
