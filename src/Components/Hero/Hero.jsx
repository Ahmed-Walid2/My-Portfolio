import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const textVarients = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollBtn: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  const sliderVarients = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className={`hero ${styles.hero}`}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={`textContainer ${styles.textContainer}`}
          variants={textVarients}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className={styles.h2Style} variants={textVarients}>
            Ahmed Walid
          </motion.h2>
          <motion.h1 className={styles.h1Style} variants={textVarients}>
            Front-End Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVarients}>
            <motion.a
              className={styles.btnStyle}
              variants={textVarients}
              href="https://drive.google.com/file/d/1jFOmYMHSxrpOjOnfQw1an1zUMi1MLtS3/view"
              target="_blank"
            >
              Download CV
            </motion.a>
            <motion.a
              className={styles.btnStyle}
              variants={textVarients}
              href="mailto:ahmedwalid2220@gmail.com"
              target="_blank"
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVarients}
            animate="scrollBtn"
            className={styles.scrollImg}
            src={require("../../images/scroll.png")}
            alt="Scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className={`slidingText ${styles.slidingText}`}
        variants={sliderVarients}
        initial="initial"
        animate="animate"
      >
        React.JS Dev.
      </motion.div>
      <figure className="imgContainer">
        <img
          className={`${styles.heroImg}`}
          src={require("../../images/myImg.png")}
          alt="My Img"
        />
      </figure>
    </div>
  );
}
