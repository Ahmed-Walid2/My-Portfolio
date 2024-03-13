import React from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
  return (
    <div className={`navbar ${styles.navbar}`}>
      <Sidebar />
      <div className={`wrapper ${styles.wrapper}`}>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={` ${styles.fwBold}`}
        >
          {/* Ahmed Walid */}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`socialIcons ${styles.socialIcons}`}
        >
          {/* <a href="https://www.facebook.com/" target={"_blank"}>
            <img
              className={styles.iconSize}
              src={require("../../images/facebook.png")}
              alt="facebook icon"
            />
          </a>
          <a href="https://www.facebook.com/" target={"_blank"}>
            <img
              className={styles.iconSize}
              src={require("../../images/instagram.png")}
              alt="instagram icon"
            />
          </a> */}
          <a href="https://www.linkedin.com/in/ahmed-walid2/" target={"_blank"}>
            <img
              className={styles.iconSize}
              src={require("../../images/linkedin.png")}
              alt="LinkedIn icon"
            />
          </a>
          <a href="https://github.com/Ahmed-Walid2" target={"_blank"}>
            <img
              className={`${styles.iconSize} ${styles.githubStyle}`}
              src={require("../../images/github-logo.png")}
              alt="GitHub icon"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
