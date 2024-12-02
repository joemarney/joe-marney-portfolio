//! Imports
import { Html5Original, Css3Original, JavascriptOriginal, NodejsOriginal, ExpressOriginal, MongodbOriginal, NpmOriginalWordmark, ReactOriginal, SassOriginal, PythonOriginal, PostgresqlOriginal, DjangoPlain, GithubOriginal, FigmaOriginal, NetlifyOriginal, HerokuOriginal, PypiOriginal } from "devicons-react";
import { Link } from "react-router-dom";

//! Styles
import styles from "./home.module.scss";

export default function Home() {
  function toggleAccordion() {
    const content = document.getElementById(`content-1`);
    const icon = document.getElementById(`icon-1`);

    // SVG for Down icon
    const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `;

    // SVG for Up icon
    const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
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

  return (
    <main className={styles.container}>
      <header>
        <h1>Junior Software Engineer</h1>
      </header>
      <section>
        <div className="border-b border-theme-darkest">
          <button onClick={() => toggleAccordion()} className="w-full flex justify-between items-center py-5 text-theme-white">
            <h2>Skills</h2>
            <span id="icon-1" className="text-theme-light transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          <div id="content-1" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
            <div className={styles.skills}>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <Html5Original size="40" />
                <p>HTML</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <Css3Original size="40" />
                <p>CSS</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <JavascriptOriginal size="40" />
                <p>JavaScript</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <NodejsOriginal size="40" />
                <p>Node.js</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <ExpressOriginal size="40" />
                <p>Express</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <MongodbOriginal size="40" />
                <p>MongoDB</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <NpmOriginalWordmark size="40" />
                <p>NPM</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <ReactOriginal size="40" />
                <p>React.js</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <SassOriginal size="40" />
                <p>SASS</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <PythonOriginal size="40" />
                <p>Python</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <PostgresqlOriginal size="40" />
                <p>PostgreSQL</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <DjangoPlain size="40" />
                <p>Django</p>
              </div>
              {/* <div>
          <GithubOriginal size="40" />
          <p>GitHub</p>
        </div> */}
              <div className="bg-theme-darkest border-b border-theme-dark">
                <FigmaOriginal size="40" />
                <p>Figma</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <NetlifyOriginal size="40" />
                <p>Netlify</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
                <HerokuOriginal size="40" />
                <p>Heroku</p>
              </div>
              <div className="bg-theme-darkest border-b border-theme-dark">
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
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src="https://placehold.co/600x400/orange/black" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">Mastermind</h6>
            <p className="text-slate-600 leading-normal font-light">My first project. A browser game inspired by the popular board game: Mastermind.</p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Read more
            </button>
            <Link to="https://github.com/joemarney/unit-1-project-mastermind" className={styles.github}>
              <GithubOriginal size="40" color="white" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src="https://placehold.co/600x400/grey/black" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">Beatsync</h6>
            <p className="text-slate-600 leading-normal font-light">My second project. An application where users can rate music venues.</p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Read more
            </button>
            <Link to="https://github.com/joemarney/unit-2-project-beatsync" className={styles.github}>
              <GithubOriginal size="40" color="white" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src="https://placehold.co/600x400/pink/black" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">Life&apos;s a Pitch</h6>
            <p className="text-slate-600 leading-normal font-light">My third project. A place to search for campsites around the UK.</p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Read more
            </button>
            <Link to="https://github.com/joemarney/unit-3-project-lifesapitch-frontend" className={styles.github}>
              <GithubOriginal size="40" color="white" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src="https://placehold.co/600x400/yellow/black" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">Repotted</h6>
            <p className="text-slate-600 leading-normal font-light">My final project. Inspired by my love for houseplants. An app for people to track their plant growth.</p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Read more
            </button>
            <Link to="https://github.com/joemarney/unit-4-project-repotted-frontend" className={styles.github}>
              <GithubOriginal size="40" color="white" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
