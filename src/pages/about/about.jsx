//! Styles
import styles from "./about.module.scss";

//! Animations
import Wrapper from "../../components/animations/wrapper";
import { fadeScale, fadeDown } from "../../components/animations/animations";

export default function About({ scrollTo }) {
  return (
    <main className={styles.container}>
      <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-theme-background2 text-theme-words">
        <Wrapper animation={fadeScale}>
          <h1 className="text-4xl font-normal text-center m-10">about me</h1>
        </Wrapper>
        <div>
          <h1 className="text-theme-background mb-2 font-normal text-4xl">Manufacturing Engineer</h1>
          <p>
            <Wrapper animation={fadeDown}>For 8 years, I worked for a leading aerospace company, building and repairing defense systems for the MOD and governments worldwide. There I developed my understanding of</Wrapper>
            <span className="text-theme-background font-semibold inline"> precision, problem-solving, and innovation.</span>
            <Wrapper animation={fadeDown}> I contributed to confidential and time-sensitive projects where attention to detail was critical.</Wrapper>
            <br></br>
            <Wrapper animation={fadeDown}>I've always had a passion for learning and personal growth. So I decided to evolve my career and explore a new field where I could continue to solve problems and build solutions.</Wrapper>
          </p>
          <h1 className="text-theme-background mt-4 mb-2 font-normal text-4xl">Software Engineer</h1>
          <p>
            <Wrapper animation={fadeDown}>I took a leap and completed the</Wrapper>
            <span className="text-theme-background font-semibold inline"> Software Engineering Immersive Bootcamp</span>
            <Wrapper animation={fadeDown}> with</Wrapper>
            <span className="text-theme-background font-semibold inline"> General Assembly</span>
            <Wrapper animation={fadeDown}> - an intense 12-week program that pushed me to expand my technical skills and reinforced my excitement for creating meaningful solutions through code.</Wrapper>
            <br></br>
            <Wrapper animation={fadeDown}>Moving forward, I'm eager to join a collaborative team where I can apply my engineering mindset to tackle complex challenges, grow alongside supportive colleagues, and build tools or systems that truly make an impact.</Wrapper>
          </p>
        </div>
        <button className="mt-10 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("hobbies")}>
          ↓
        </button>
      </section>
    </main>
  );
}
