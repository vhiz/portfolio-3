"use client";
import Image from "next/image";
import styles from "./contact.module.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x6nmbld",
        "template_k1st22t",
        ref.current,
        "SjYsLTVwgujolV-mp"
      )
      .then(
        (result) => {
          setSucess(true);
          setError(false);
        },
        (error) => {
          setError(true);
          setSucess(false);
        }
      );
  };
  return (
    <div className={styles.contact} id="contact">
      <h1>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContanier}>
          <Image src="/3.png" fill={true} alt="" />
        </div>
        <form ref={ref} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea
            placeholder="Message..."
            cols="10"
            rows="10"
            name="message"
            required
          ></textarea>
          {sucess ? (
            <p>Thank you for reaching out hope to work with you soon😄💛</p>
          ) : error ? (
            <p>Something went wrong reload page</p>
          ) : (
            <button type="submit">Send</button>
          )}
        </form>
      </div>
    </div>
  );
}
