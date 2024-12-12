//! Styles
// import styles from "./about.module.scss";

// export default function About() {
//   return (
//     <main className={styles.container}>
//       <p>I am a Junior Software Engineer with a background in Manufacturing Engineering. For eight years, I worked in the Aerospace industry, where I developed a deep understanding of precision, problem-solving, and innovation. However, I reached a point where I felt I was coasting, and that wasn't fulfilling. I thrive on challenges and constant learning, so I decided it was time for a change.</p>
//       <p>Fueled by my interest in technology and a passion for understanding how things work, I took a leap into software engineering by completing the General Assembly: Software Engineering Immersive Bootcamp. This intensive program expanded my technical skill set and reinforced my love for building solutions and solving complex problems.</p>
//       <p>Now, I'm excited to apply my engineering mindset and newly honed software skills in a professional setting. I'm eager to contribute to impactful projects, collaborate with innovative teams, and continue growing in a field where learning never stops.</p>
//     </main>
//   );
// }

//! Imports
import { Html5Original, Css3Original, JavascriptOriginal, NodejsOriginal, ExpressOriginal, MongodbOriginal, NpmOriginalWordmark, ReactOriginal, SassOriginal, PythonOriginal, PostgresqlOriginal, DjangoPlain, FigmaOriginal, NetlifyOriginal, HerokuOriginal, PypiOriginal } from "devicons-react";

//! Styles
import styles from "./about.module.scss";

export default function About({ scrollTo }) {
  return (
    <>
      <section id="about" className="h-screen flex flex-col justify-center items-center bg-gray-200 text-gray-800 text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-6 text-lg max-w-2xl">Your "About Me" content goes here.</p>
        <h3 className="text-3xl font-bold">Skills</h3>
        <div className={styles.skillsContainer}>
          <div className="bg-theme-boxes border border-theme-borders">
            <Html5Original />
            <p>HTML</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <Css3Original />
            <p>CSS</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <JavascriptOriginal />
            <p>JavaScript</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <NodejsOriginal />
            <p>Node.js</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <ExpressOriginal />
            <p>Express</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <MongodbOriginal />
            <p>MongoDB</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <NpmOriginalWordmark />
            <p>NPM</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <ReactOriginal />
            <p>React.js</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <SassOriginal />
            <p>SASS</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <PythonOriginal />
            <p>Python</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <PostgresqlOriginal />
            <p>PostgreSQL</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <DjangoPlain />
            <p>Django</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <FigmaOriginal />
            <p>Figma</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <NetlifyOriginal />
            <p>Netlify</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <HerokuOriginal />
            <p>Heroku</p>
          </div>
          <div className="bg-theme-boxes border border-theme-borders">
            <PypiOriginal />
            <p>Pypi</p>
          </div>
        </div>
        <button className="mt-10 text-2xl animate-bounce focus:outline-none" onClick={() => scrollTo("projects")}>
          ↓
        </button>
      </section>
    </>
  );
}
