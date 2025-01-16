//! Styles
import styles from "./about.module.scss";

export default function About({ scrollTo }) {
  return (
    <main className={styles.container}>
      <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-theme-background2 text-theme-words px-40">
        <h1 className="text-4xl font-bold text-center mt-5">about me</h1>
        <div>
          <p>For 8 years I worked in the Aerospace industry. There I developed my understanding of precision, problem-solving, and innovation. I love to learn and challenge myself, so I made the decision to evolve my career.</p>
          <p>I completed the General Assembly: Software Engineering Immersive Bootcamp. This intensive 12-week course expanded my technical skill set and reinforced my passion for building solutions and solving complex issues.</p>
        </div>
        <button className="mt-10 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("hobbies")}>
          ↓
        </button>
      </section>
    </main>
  );
}
