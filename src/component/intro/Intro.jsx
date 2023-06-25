"use client"
import Image from "next/image";
import styles from "./intro.module.scss";
import Hero from '../../img/1.png';
export default function Intro() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.intro} id="intro">
      <div className={styles.info}>
        <h1>Mgbeahurike Victor Uchenna Full Stack developer.</h1>
        <p>
          Turing ideas into reality.Giving the people a way to express through
          tech.
        </p>
        <button onClick={()=>scrollToSection('contact')}>Contact 📞</button>
      </div>
      <div className={styles.imgContainer}>
        <Image src={Hero} alt="" />
      </div>
    </div>
  );
}
