//! Imports
import { Link } from "react-router-dom";
import { LinkedinPlain, GithubOriginal } from "devicons-react";

//! Animations
import Wrapper from "../../components/animations/wrapper";

//! Styles
import styles from "./landing.module.scss";

export default function Landing({ scrollTo }) {
  return (
    <section id="landing" className="h-screen flex flex-col justify-center items-center bg-theme-background text-theme-words2 text-center">
      <h1 className="text-5xl font-bold">Joe Marney</h1>
      <h2 className="text-6xl mt-4">Software Engineer</h2>
      <p className="mt-6 text-2xl">Based in the UK</p>
      <div className={styles.links}>
        <Link to="https://www.linkedin.com/in/joe-marney/">
          <LinkedinPlain size="40" color="#181616" />
        </Link>
        <Link to="https://github.com/joemarney">
          <GithubOriginal size="40" />
        </Link>
      </div>
      <button className="mt-10 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("skills")}>
        ↓
      </button>
    </section>
  );
}
