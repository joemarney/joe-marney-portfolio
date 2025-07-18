//! Imports
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

//! Animations
import Wrapper from "../../components/animations/wrapper";
import { fadeRight, fadeLeft } from "../../components/animations/animations";
import { motion } from "framer-motion";

//! Styles
import styles from "./landing.module.scss";

export default function Landing({ scrollTo }) {
  return (
    <section id="landing" className="h-screen flex flex-col justify-center items-center bg-theme-background text-theme-words2 text-center">
      <Wrapper animation={fadeRight}>
        <h1 className="font-normal">Joe Marney</h1>
      </Wrapper>
      <Wrapper animation={fadeLeft}>
        <h3 className="mt-4 font-normal">Software Engineer</h3>
      </Wrapper>
      <Wrapper animation={fadeRight}>
        <p className="mt-6 text-2xl">Based in the UK</p>
      </Wrapper>
      <Wrapper animation={fadeLeft}>
        <div className={styles.links}>
          <motion.div whileHover={{ scale: 1.4, rotate: 10, color: "#EAEAEA" }} transition={{ type: "spring", stiffness: 100 }}>
            <Link to="https://www.linkedin.com/in/joe-marney/">
              <FaLinkedin size="60" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4, rotate: -10, color: "#EAEAEA" }} transition={{ type: "spring", stiffness: 100 }}>
            <Link to="https://github.com/joemarney">
              <FaGithub size="60" />
            </Link>
          </motion.div>
        </div>
      </Wrapper>
      <button className="mt-10 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("skills")}>
        ↓
      </button>
    </section>
  );
}
