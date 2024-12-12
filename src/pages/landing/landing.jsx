//! Imports
import { Link } from "react-router-dom";
import { LinkedinOriginal, GithubOriginal } from "devicons-react";

//! Styles
import styles from "./landing.module.scss";

export default function Landing({ scrollTo }) {
  return (
    <section id="landing" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center">
      <h1 className="text-2xl font-bold">Joe Marney</h1>
      <h2 className="text-4xl mt-4">Software Engineer</h2>
      <div className={styles.links}>
        <Link to="https://www.linkedin.com/in/joe-marney/">
          <LinkedinOriginal size="40" />
        </Link>
        <Link to="https://github.com/joemarney">
          <GithubOriginal size="40" />
        </Link>
      </div>
      <p className="mt-6 text-lg">Your small blurb goes here.</p>
      <button className="mt-10 text-2xl animate-bounce focus:outline-none" onClick={() => scrollTo("about")}>
        ↓
      </button>
    </section>
  );
}
