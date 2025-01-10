//! Imports
import { Html5Original, Css3Original, JavascriptOriginal, NodejsOriginal, MongodbOriginal, NpmOriginalWordmark, ReactOriginal, SassOriginal, PythonOriginal, PostgresqlOriginal, DjangoPlain, FigmaOriginal, NetlifyOriginal, HerokuOriginal, PypiOriginal } from "devicons-react";
import { SiExpress } from "react-icons/si";

//! Styles
import styles from "./about.module.scss";

export default function About({ scrollTo }) {
  return (
    <main className={styles.container}>
      <section id="about" className="h-screen flex flex-col justify-center items-center bg-theme-background2 text-theme-words text-center px-40">
        <h1 className="text-4xl font-bold mb-10">about me</h1>
        <p>For 8 years I worked in the Aerospace industry. There I developed my understanding of precision, problem-solving and innovation. I love to learn and challenge myself so I made the decision to evolve my career.</p>
        <p>I completed the General Assembly: Software Engineering Immersive Bootcamp. This intensive 12 week course expanded my technical skill set and reinforced my passion for building solutions and solving complex issues.</p>
        <div className={styles.skillsContainer}>
          <div className="relative group flex flex-col items-center">
            <Html5Original size="50" color="black" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">HTML</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <Css3Original size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">CSS</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <JavascriptOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">JavaScript</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <NodejsOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Node.js</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <SiExpress size="50" color="#EAEAEA" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Express</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <MongodbOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">MongoDB</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <NpmOriginalWordmark size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">NPM</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <ReactOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">React.js</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <SassOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">SASS</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <PythonOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Python</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <PostgresqlOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">PostgreSQL</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <DjangoPlain size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Django</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <FigmaOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Figma</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <NetlifyOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Netlify</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <HerokuOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Heroku</span>
          </div>
          <div className="relative group flex flex-col items-center">
            <PypiOriginal size="50" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-0 translate-y-8 opacity-0 text-sm font-medium text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100">Pypi</span>
          </div>
        </div>
        <button className="mt-10 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("projects")}>
          ↓
        </button>
      </section>
    </main>
  );
}
