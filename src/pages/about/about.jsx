//! Imports
import { Html5Original, Css3Original, JavascriptOriginal, NodejsOriginal, ExpressOriginal, MongodbOriginal, NpmOriginalWordmark, ReactOriginal, SassOriginal, PythonOriginal, PostgresqlOriginal, DjangoPlain, FigmaOriginal, NetlifyOriginal, HerokuOriginal, PypiOriginal } from "devicons-react";

//! Styles
import styles from "./about.module.scss";

export default function About({ scrollTo }) {
  return (
    <>
      <section id="about" className="h-screen flex flex-col justify-center items-center bg-gray-200 text-gray-800 text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-6 text-lg max-w-2xl">For 8 years I worked in the Aerospace industry. There I developed my understanding of precision, problem-solving and innovation. I love to learn and challenge myself so I made the decision to change my career.</p>
        <p className="mt-6 text-lg max-w-2xl">I completed the General Assembly: Software Engineering Immersive Bootcamp. This intensive 12 week course expanded my technical skill set and reinforced my passion for building solutions and solving complex issues.</p>
        <div className={styles.skillsContainer}>
          <div className="relative group flex flex-col items-center">
            <Html5Original size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">HTML</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <Css3Original size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">CSS</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <JavascriptOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">JavaScript</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <NodejsOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Node.js</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <ExpressOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Express</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <MongodbOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">MongoDB</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <NpmOriginalWordmark size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">NPM</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <ReactOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">React.js</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <SassOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">SASS</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <PythonOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Python</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <PostgresqlOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">PostgreSQL</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <DjangoPlain size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Django</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <FigmaOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Figma</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <NetlifyOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Netlify</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <HerokuOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Heroku</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <PypiOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-white bg-gray-800 rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Pypi</span>
          </div>
        </div>
        <button className="mt-10 text-2xl animate-bounce focus:outline-none" onClick={() => scrollTo("projects")}>
          ↓
        </button>
      </section>
    </>
  );
}
