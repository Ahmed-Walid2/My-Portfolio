import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const links = ["Home", "Skills", "Portfolio", "Contact"];
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const oneLinkVariants = {
    open: {
      y: 0,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className={`sidebar ${styles.sidebar}`}
      animate={open ? "open" : "closed"}
    >
      <motion.div className={`circleBg ${styles.circleBg}`} variants={variants}>
        <motion.div className={`links ${styles.links}`} variants={linkVariants}>
          {links.map((link) => (
            <motion.a
              href={`#${link}`}
              key={link}
              variants={oneLinkVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.toggleBtn}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.432 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </motion.div>
  );
}
