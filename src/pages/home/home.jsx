//! Imports
import { Html5Original, Css3Original, JavascriptOriginal, NodejsOriginal, ExpressOriginal, MongodbOriginal, NpmOriginalWordmark, ReactOriginal, SassOriginal, PythonOriginal, PostgresqlOriginal, DjangoPlain, GithubOriginal, FigmaOriginal, NetlifyOriginal, HerokuOriginal, PypiOriginal } from "devicons-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

//! Styles
import styles from "./home.module.scss";

export default function Home() {
  function toggleAccordion() {
    const content = document.getElementById(`content-1`);
    const icon = document.getElementById(`icon-1`);

    const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `;

    const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    `;

    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      content.style.maxHeight = "0";
      icon.innerHTML = downSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.innerHTML = upSVG;
    }
  }

  useEffect(() => {
    const initializeModals = () => {
      const triggers = document.querySelectorAll("[data-dialog-target]");
      const dialogs = document.querySelectorAll("[data-dialog]");
      const backdrops = document.querySelectorAll("[data-dialog-backdrop]");
      const closeTriggers = document.querySelectorAll("[data-dialog-close]");

      triggers.forEach((trigger) => {
        const dialogId = trigger.dataset.dialogTarget;
        const dialog = Array.from(dialogs).find((d) => d.dataset.dialog === dialogId);
        const backdrop = Array.from(backdrops).find((b) => b.dataset.dialogBackdrop === dialogId);

        if (!dialog || !backdrop) return;

        const mountValue = dialog.dataset.dialogMount || "opacity-1 translate-y-0";
        const unmountValue = dialog.dataset.dialogUnmount || "opacity-0 -translate-y-14";
        const transitionValue = dialog.dataset.dialogTransition || "transition-all duration-300";

        const mountClasses = mountValue.split(" ");
        const unmountClasses = unmountValue.split(" ");
        const transitionClasses = transitionValue.split(" ");

        const openModal = () => {
          backdrop.classList.remove("pointer-events-none", "opacity-0");
          dialog.classList.remove(...unmountClasses);
          dialog.classList.add(...mountClasses);
        };

        const closeModal = () => {
          backdrop.classList.add("pointer-events-none", "opacity-0");
          dialog.classList.remove(...mountClasses);
          dialog.classList.add(...unmountClasses);
        };

        trigger.addEventListener("click", () => openModal());

        backdrop.addEventListener("click", (e) => {
          if (e.target.dataset.dialogBackdropClose) {
            closeModal();
          }
        });

        document.addEventListener("keyup", (e) => {
          if (e.key === "Escape") {
            closeModal();
          }
        });

        closeTriggers.forEach((close) => close.addEventListener("click", () => closeModal()));

        if (!backdrop.classList.contains("pointer-events-none")) {
          backdrop.classList.add("pointer-events-none", "opacity-0");
        }
        if (!dialog.classList.contains(...unmountClasses)) {
          dialog.classList.add(...unmountClasses);
        }
        if (transitionValue !== "false") {
          dialog.classList.add(...transitionClasses);
        }
      });
    };

    initializeModals();

    return () => {
      const triggers = document.querySelectorAll("[data-dialog-target]");
      const backdrops = document.querySelectorAll("[data-dialog-backdrop]");
      const closeTriggers = document.querySelectorAll("[data-dialog-close]");

      triggers.forEach((trigger) => trigger.removeEventListener("click", initializeModals));
      backdrops.forEach((backdrop) => backdrop.removeEventListener("click", initializeModals));
      closeTriggers.forEach((close) => close.removeEventListener("click", initializeModals));
    };
  }, []);

  return (
    <main className={styles.container}>
      <header>
        <h2>Junior Software Engineer</h2>
      </header>
      <section>
        <div className="border-b border-theme-borders">
          <button onClick={() => toggleAccordion()} className="w-full flex justify-between items-center py-5 text-theme-words">
            <h2>Skills</h2>
            <span id="icon-1" className="text-theme-words transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4">
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          <div id="content-1" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
            <div className={styles.skills}>
              <div className="bg-theme-boxes border border-theme-borders">
                <Html5Original size="40" />
                <p>HTML</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <Css3Original size="40" />
                <p>CSS</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <JavascriptOriginal size="40" />
                <p>JavaScript</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <NodejsOriginal size="40" />
                <p>Node.js</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <ExpressOriginal size="40" />
                <p>Express</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <MongodbOriginal size="40" />
                <p>MongoDB</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <NpmOriginalWordmark size="40" />
                <p>NPM</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <ReactOriginal size="40" />
                <p>React.js</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <SassOriginal size="40" />
                <p>SASS</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <PythonOriginal size="40" />
                <p>Python</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <PostgresqlOriginal size="40" />
                <p>PostgreSQL</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <DjangoPlain size="40" />
                <p>Django</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <FigmaOriginal size="40" />
                <p>Figma</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <NetlifyOriginal size="40" />
                <p>Netlify</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <HerokuOriginal size="40" />
                <p>Heroku</p>
              </div>
              <div className="bg-theme-boxes border border-theme-borders">
                <PypiOriginal size="40" />
                <p>Pypi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header>
        <h1>Projects</h1>
        <p>Before enrolling in the General Assembly: Software Engineering Immersive course, I had little to no knowledge of HTML, CSS, or JavaScript. Over the course of 12 intensive weeks, I&apos;ve transformed that curiosity into the ability to build applications I once wondered, &quot;How do they even do that?&quot; I&apos;m incredibly proud of the projects I&apos;ve created and the skills I&apos;ve developed, which showcase my journey from a beginner to a capable developer ready to tackle real-world challenges.</p>
      </header>
      <div className={styles.projects}>
        <div className="relative flex flex-col my-6 bg-theme-boxes shadow-sm border border-theme-borders rounded-lg w-96">
          <div className="relative m-2.5 rounded-md">
            <img src="src/assets/images/mastermind.png" alt="screenshot of a Mastermind browser game with a dark theme" className="h-56 w-full object-cover object-top rounded-md" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-theme-words text-xl font-semibold">Mastermind</h6>
            <p className="text-theme-words leading-normal font-light">My first project.</p>
            <p className="text-theme-words leading-normal font-light">A browser game inspired by the popular board game: Mastermind.</p>
          </div>
          <div className="flex direction-row px-4 pb-4 pt-0 mt-2">
            <button data-dialog-target="modal-xl" className="rounded-md bg-theme-buttons py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-theme-focus focus:shadow-none active:bg-theme-accents hover:bg-theme-hover active:shadow-none" data-ripple-light="true" type="button">
              Read more
            </button>
            <div data-dialog-backdrop="modal-xl" data-dialog-backdrop-close="true" className="pointer-events-none fixed inset-0 z-[999] grid place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
              <div data-dialog="modal-xl" className="relative m-4 p-4 w-full sm:w-3/4 max-h-screen overflow-y-auto rounded-lg bg-white shadow-sm">
                <div>
                  <h1>Mastermind</h1>
                </div>
                <div className="flex relative m-2.5 rounded-md justify-center">
                  <img src="src/assets/images/mastermind.png" alt="screenshot of a Mastermind browser game with a dark theme" className="h-100 w-auto object-cover rounded-md" />
                </div>
                <div className="relative py-4 leading-normal text-theme-words">
                  <em>Solo - 1 week</em>
                </div>
                <div className="relative py-4 leading-normal text-theme-words">
                  <p>Over the course of a week we were set the task of creating a browser game. I chose to recreate the popular board game Mastermind. This project came after just 1 week of learning on the course. It has win/loss logic, an organised directory structure, Audio aspects and it is deployed online.</p>
                </div>
                <h2 className="text-lg font-semibold">Technologies used</h2>
                <div className={styles.technologies}>
                  <div className="bg-theme-boxes border border-theme-borders">
                    <Html5Original size="40" />
                    <p>HTML</p>
                  </div>
                  <div className="bg-theme-boxes border border-theme-borders">
                    <Css3Original size="40" />
                    <p>CSS</p>
                  </div>
                  <div className="bg-theme-boxes border border-theme-borders">
                    <JavascriptOriginal size="40" />
                    <p>JavaScript</p>
                  </div>
                  <div className="bg-theme-boxes border border-theme-borders">
                    <FigmaOriginal size="40" />
                    <p>Figma</p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                  <button data-dialog-close="true" className="rounded-md bg-theme-buttons py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-theme-focus focus:shadow-none active:bg-theme-accents hover:bg-theme-hover active:shadow-none" type="button">
                    Close
                  </button>
                </div>
              </div>
            </div>

            <Link to="https://github.com/joemarney/unit-1-project-mastermind" className={styles.github}>
              <GithubOriginal size="40" color="white" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col my-6 bg-theme-boxes shadow-sm border border-theme-borders rounded-lg w-96">
          <div className="relative m-2.5 rounded-md">
            <img src="src/assets/images/beatsync.png" className="h-56 w-full object-cover object-top rounded-md" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-theme-words text-xl font-semibold">Beatsync</h6>
            <p className="text-theme-words leading-normal font-light">My second project.</p>
            <p className="text-theme-words leading-normal font-light">An application where users can rate music venues.</p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <Link to="https://github.com/joemarney/unit-2-project-beatsync" className={styles.github}>
              <button className="rounded-md bg-theme-buttons py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-theme-focus focus:shadow-none active:bg-theme-accents hover:bg-theme-hover active:shadow-none" data-ripple-light="true" type="button">
                Read more
              </button>
              <GithubOriginal size="40" color="white" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col my-6 bg-theme-boxes shadow-sm border border-theme-borders rounded-lg w-96">
          <div className="relative m-2.5 rounded-md">
            <img src="src/assets/images/lifesapitch.png" className="h-56 w-full object-cover object-top rounded-md" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-theme-words text-xl font-semibold">Life&apos;s a Pitch</h6>
            <p className="text-theme-words leading-normal font-light">My third project.</p>
            <p className="text-theme-words leading-normal font-light">A place to search for campsites around the UK.</p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <Link to="https://github.com/joemarney/unit-3-project-lifesapitch-frontend" className={styles.github}>
              <button className="rounded-md bg-theme-buttons py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-theme-focus focus:shadow-none active:bg-theme-accents hover:bg-theme-hover active:shadow-none" data-ripple-light="true" type="button">
                Read more
              </button>
              <GithubOriginal size="40" color="white" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col my-6 bg-theme-boxes shadow-sm border border-theme-borders rounded-lg w-96">
          <div className="relative m-2.5 rounded-md">
            <img src="src/assets/images/repotted.png" className="h-56 w-full object-cover object-top rounded-md" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-theme-words text-xl font-semibold">Repotted</h6>
            <p className="text-theme-words leading-normal font-light">My final project.</p>
            <p className="text-theme-words leading-normal font-light">Inspired by my love for houseplants. An app for people to track their plant growth.</p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <Link to="https://github.com/joemarney/unit-4-project-repotted-frontend" className={styles.github}>
              <button className="rounded-md bg-theme-buttons py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-theme-focus focus:shadow-none active:bg-theme-accents hover:bg-theme-hover active:shadow-none" data-ripple-light="true" type="button">
                Read more
              </button>
              <GithubOriginal size="40" color="white" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
