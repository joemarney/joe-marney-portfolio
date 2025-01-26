//! Imports
import { motion } from "framer-motion";

//! Skills
import { skills } from "./skills";

//! Animations
import Wrapper from "../../components/animations/wrapper";
import { fadeScale } from "../../components/animations/animations";
import { containerStagger } from "../../components/animations/animations";
import { childFadeUp } from "../../components/animations/animations";

//! Styles
import styles from "./skills.module.scss";

export default function Skills({ scrollTo }) {
  return (
    <section id="skills" className="h-screen w-full flex flex-col justify-center items-center bg-theme-background2 text-theme-words">
      <Wrapper animation={fadeScale}>
        <h1 className="font-normal text-center m-10">skills</h1>
      </Wrapper>
      <div className={styles.skillsContainer}>
        <motion.div className="flex flex-wrap justify-center items-center w-full" variants={containerStagger} initial="initial" whileInView="whileInView" viewport={{ once: false, amount: 0.2 }}>
          {skills.map((skill, index) => {
            const { Icon, label } = skill;
            return (
              <motion.div key={index} variants={childFadeUp} className="relative group flex flex-col items-center">
                <Icon color="#EAEAEA" className="transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute bottom-0 translate-y-8 opacity-0 text-theme-words2 bg-theme-background rounded-md px-2 py-1 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100 cursor-default">{label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <button className="mt-10 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("projects")}>
        ↓
      </button>
    </section>
  );
}
