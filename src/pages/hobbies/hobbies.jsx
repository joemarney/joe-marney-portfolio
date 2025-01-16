//! Components
// import Accordion from "../../components/accordian/accordian";
import HobbiesTabs from "../../components/hobbies/tabs";

//! Styles
import styles from "./hobbies.module.scss";

export default function Hobbies({ scrollTo }) {
  return (
    <section id="hobbies" className="h-screen flex flex-col justify-center items-center bg-theme-background text-theme-words2 text-center px-40">
      <div className={styles.hobbies}>
        <h1 className="text-4xl font-bold text-center mt-5">hobbies</h1>
        <HobbiesTabs />
      </div>
      <button className="mt-10 text-5xl animate-bounce focus:outline-none" onClick={() => scrollTo("contact")}>
        ↓
      </button>
    </section>
  );
}
