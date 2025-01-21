//! Components
import HobbiesTabs from "../../components/hobbies/tabs";

//! Animations
import Wrapper from "../../components/animations/wrapper";
import { fadeScale, fadeUp } from "../../components/animations/animations";

//! Styles
import styles from "./hobbies.module.scss";

export default function Hobbies({ scrollTo }) {
  return (
    <section id="hobbies" className="h-screen flex flex-col justify-center items-center bg-theme-background text-theme-words2 text-center">
      <Wrapper animation={fadeScale}>
        <h1 className="text-4xl font-bold text-center mt-20 mb-10">hobbies</h1>
      </Wrapper>
      <Wrapper animation={fadeUp}>
        <div className={styles.hobbies}>
          <HobbiesTabs />
        </div>
      </Wrapper>
      <button className="mb-5 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("contact")}>
        ↓
      </button>
    </section>
  );
}
