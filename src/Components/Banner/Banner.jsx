import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Banner.module.css";

export default function Banner({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      ref={ref}
      className={type === "skills" ? styles.ifServices : styles.ifPortfolio}
    >
      <motion.h1 style={{ y: yText }} className={styles.h1Style}>
        {type === "skills" ? "My Skills" : "My Projects"}
      </motion.h1>
      <motion.div className={`mountains ${styles.mountainStyle}`}></motion.div>
      <motion.div
        style={{ y: yBg }}
        className={`planets ${styles.planetsStyle}`}
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className={`stars ${styles.starsStyle}`}
      ></motion.div>
    </div>
  );
}
