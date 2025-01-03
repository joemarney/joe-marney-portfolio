//! Imports
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GithubOriginal } from "devicons-react";

//! Styles
import styles from "./projects.module.scss";

export default function Projects({ title, description, image, timescale, gitHubLink, deployedLink, technologies, inDepthDescription, openModalIndex, openModal, closeModal }) {
  useEffect(() => {
    document.body.style.overflow = openModalIndex ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModalIndex]);

  return (
    <main className={styles.container}>
      <div onClick={openModal} className="cursor-pointer group relative flex flex-col m-6 bg-white shadow-sm border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
        <div className="relative m-2.5 overflow-hidden rounded-md h-56">
          <img className="w-full transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" src={image} alt={`screenshot of my ${title} app`} />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-theme-words text-xl font-semibold">{title}</h6>
          <p className="text-theme-words leading-normal font-light">{description}</p>
        </div>
        <Link to={gitHubLink} className="inline-block">
          <GithubOriginal size="40" />
        </Link>
        {openModalIndex && (
          <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm" onClick={closeModal}>
            <div className="relative m-4 p-4 w-full sm:w-3/4 max-h-screen overflow-y-auto rounded-lg bg-white shadow-sm" onClick={(e) => e.stopPropagation()}>
              <div className="fixed inset-0 z-[999] grid place-items-center bg-black bg-opacity-60 backdrop-blur-sm">
                <div className="relative m-4 p-6 w-full sm:w-3/4 max-h-screen overflow-y-auto rounded-lg bg-white shadow-sm">
                  <div>
                    <h1 className="text-theme-words">{title}</h1>
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
                  <div className="relative p-5 leading-normal text-theme-words text-justify">
                    {inDepthDescription.split("\n").map((paragraph, index) => (
                      <p key={index} className="mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <h2 className="text-lg font-semibold text-theme-words">Technologies used</h2>
                  <div className={styles.technologies}>
                    {technologies.map(({ Icon, label }, index) => (
                      <div key={index}>
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
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
