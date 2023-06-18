import React from "react";
import styles from "./page.module.scss";
import Intro from "@/component/intro/Intro";
import Projects from "@/component/projects/Projects";
import Skills from "@/component/skills/Skills";
import Contact from "@/component/contact/Contact";
export default function Home() {
  return (
    <div className={styles.home}>
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
