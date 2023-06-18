"use client"
import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Darkmode from "../darkmode/Darkmode";

export default function Navbar() {
  const links = [
    {
      id: 1,
      name: "Intro",
      url: "intro",
    },
    {
      id: 3,
      name: "Projects",
      url: "projects",
    },
    {
      id: 2,
      name: "Skils",
      url: "skills",
    },
    {
      id: 4,
      name: "Contact",
      url: "contact",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.navbar}>
      <Link href="#" onClick={() => scrollToSection("intro")}>
        <Image src="/logo.png" alt="" width={30} height={30} />
      </Link>
      <div className={styles.links}>
        <Darkmode />
        {links.map((link) => (
          <Link href={'#'} onClick={() => scrollToSection(link.url)}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
