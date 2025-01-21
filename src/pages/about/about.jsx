//! Styles
import styles from "./about.module.scss";

//! Animations
import Wrapper from "../../components/animations/wrapper";
import { fadeScale } from "../../components/animations/animations";

export default function About({ scrollTo }) {
  return (
    <main className={styles.container}>
      <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-theme-background2 text-theme-words">
        <Wrapper animation={fadeScale}>
          <h1 className="text-4xl font-bold text-center m-10">about me</h1>
        </Wrapper>
        <div>
          <h2 className="mb-2">Manufacturing Engineer</h2>
          <p>For 8 years I worked for a leading company in the Aerospace industry. I was building defense systems for the MOD and governments across the globe. There I developed my understanding of precision, problem-solving, and innovation. I love to learn and challenge myself, so I made the decision to evolve my career.</p>
          <h2 className="mb-2 mt-2">Software Engineer</h2>
          <p>I completed the General Assembly: Software Engineering Immersive Bootcamp. This intensive 12-week course expanded my technical skill set and reinforced my passion for building solutions and solving complex issues.</p>
        </div>
        <button className="mt-10 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("hobbies")}>
          ↓
        </button>
      </section>
    </main>
  );
}
