"use client"

import Image from "next/image";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <h1>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContanier}>
          <Image src="/3.png" fill={true} alt="" />
        </div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message..." cols="10" rows="10"></textarea>
          <button onClick={(e) => e.preventDefault()}>Send</button>
        </form>
      </div>
    </div>
  );
}
