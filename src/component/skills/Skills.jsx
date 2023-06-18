"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { backend, frontend, other } from "@/data/fake";

export default function Skills() {
  const [options, setOptions] = useState("f");
  const [data, setData] = useState(frontend);
  useEffect(() => {
    if (options === "f") {
      setData(frontend);
    }
    if (options === "b") {
      setData(backend);
    }
    if (options === "o") {
      setData(other);
    }
  }, [options]);
  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.imgContanier}>
        <Image src={"/2.jpg"} fill={true} alt="" />
        <div className={styles.imgText}>
          <h1>Fullstack Development Skills</h1>
        </div>
      </div>
      <div className={styles.options}>
        <span
          className={options === "f" ? styles.active : null}
          onClick={() => setOptions("f")}
        >
          Frontend
        </span>
        <span
          className={options === "b" ? styles.active : null}
          onClick={() => setOptions("b")}
        >
          Backend
        </span>
        <span
          className={options === "o" ? styles.active : null}
          onClick={() => setOptions("o")}
        >
          Others
        </span>
      </div>
      <div className={styles.textContanier}>
        <div className={styles.info}>
          {data.skills.map((skill) => (
            <p>{`- ${skill}`}</p>
          ))}
        </div>
        <div className={styles.img}>
          <Image src={data.img} fill={true} alt="" />
        </div>
      </div>
    </div>
  );
}
