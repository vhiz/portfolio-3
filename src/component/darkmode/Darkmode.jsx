"use client";
import { useContext } from "react";
import styles from "./darkmode.module.scss";
import { ThemeContext } from "@/context/Theme";

export default function Darkmode() {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.dark} onClick={toggle}>
      <div className={styles.icon}>🌞</div>
      <div className={styles.icon}>🌙</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
