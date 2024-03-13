import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        straggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`contact ${styles.contact}`}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className={`textContainer ${styles.textContainer}`}>
        <motion.h1 className={`${styles.h1Style}`} variants={variants}>
          Let's work together
        </motion.h1>
        <motion.div className="mail" variants={variants}>
          <h2>Mail</h2>
          <span className={styles.span}>ahmedwalid2220@gmail.com</span>
        </motion.div>
        <motion.div className="address" variants={variants}>
          <h2>Address</h2>
          <span className={styles.span}>Alexandria, Egypt</span>
        </motion.div>
        <motion.div className="phone" variants={variants}>
          <h2>Phone</h2>
          <span className={styles.span}>01272355145</span>
        </motion.div>
      </motion.div>
      <div className={`formContainer ${styles.formContainer}`}>
        <div className={styles.formStyle}>
          <input className={styles.inputStyle} type="text" placeholder="Name" />
          <input
            className={styles.inputStyle}
            type="email"
            placeholder="Email"
          />
          <textarea
            className={styles.inputStyle}
            rows="8"
            placeholder="Message"
          ></textarea>
          <button className={styles.formBtn}>Submit</button>
        </div>
      </div>
    </motion.div>
  );
}
