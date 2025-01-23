//! Imports
import { useEffect, useState } from "react";

//! Animations
import Wrapper from "../../components/animations/wrapper";
import { fadeScale } from "../../components/animations/animations";
import { motion } from "framer-motion";

//! Styles
import styles from "./about.module.scss";

export default function About({ scrollTo }) {
  function LetterAnimation({ text }) {
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    useEffect(() => {
      if (triggerAnimation) {
        const timer = setTimeout(() => setTriggerAnimation(false), 2000);
        return () => clearTimeout(timer);
      }
    }, [triggerAnimation]);

    return (
      <span
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={`${index}-${char}`}
            onViewportEnter={() => setTriggerAnimation(true)}
            animate={triggerAnimation ? { y: [0, -5, 0], opacity: 1 } : { opacity: 1 }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
            }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    );
  }

  return (
    <main className={styles.container}>
      <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-theme-background2 text-theme-words">
        <Wrapper animation={fadeScale}>
          <h1 className="text-4xl font-normal text-center m-10">about me</h1>
        </Wrapper>

        <div>
          <h1 className="text-theme-background mb-2 font-normal text-4xl">Manufacturing Engineer</h1>
          <p>
            For 8 years, I worked for a leading aerospace company, building and repairing defense systems for the MOD and governments worldwide. There I developed my understanding of{" "}
            <span className="text-theme-background font-semibold inline">
              <LetterAnimation text="precision, " />
              <LetterAnimation text="problem-solving, " />
            </span>{" "}
            and{" "}
            <span className="text-theme-background font-semibold inline">
              <LetterAnimation text="innovation. " />
            </span>{" "}
            I contributed to confidential and time-sensitive projects where attention to detail was critical.
            <br />
            I've always had a passion for learning and personal growth. So I decided to evolve my career and explore a new field where I could continue to solve problems and build solutions.
          </p>

          <h1 className="text-theme-background mt-4 mb-2 font-normal text-4xl">Software Engineer</h1>
          <p>
            I took a leap and completed the{" "}
            <span className="text-theme-background font-semibold inline">
              <LetterAnimation text="Software Engineering " />
              <LetterAnimation text="Immersive Bootcamp" />
            </span>{" "}
            with{" "}
            <span className="text-theme-background font-semibold inline">
              <LetterAnimation text="General Assembly" />
            </span>{" "}
            - an intense 12-week program that pushed me to expand my technical skills and reinforced my excitement for creating meaningful solutions through code.
            <br />
            Moving forward, I'm eager to join a collaborative team where I can apply my engineering mindset to tackle complex challenges, grow alongside supportive colleagues, and build tools or systems that truly make an impact.
          </p>
        </div>

        <button className="mt-10 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("hobbies")}>
          ↓
        </button>
      </section>
    </main>
  );
}
