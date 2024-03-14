import React from "react";
import imgHTML from "../../images/skills/html5.a7362949.svg";
import imgCSS from "../../images/skills/css.1b9dcc2e.svg";
import jsImg from "../../images/skills/javascript.455da02c.svg";
import reactImg from "../../images/skills/react.svg";
import jQueryImg from "../../images/skills/jquery.svg";
import tsImg from "../../images/skills/typescript.svg";
import sassImg from "../../images/skills/sass.svg";
import gitImg from "../../images/skills/git.svg";
// import reactImg from "../../images/skills/react.svg";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="Skills" className="skills">
      <div>
        <h1 className={styles.title}>Skills &amp; Tools</h1>
        <div className={styles.skill}>
          <figure>
            <img className={styles.imgStyle} src={imgHTML} alt="HTML" />
            <h5 className={styles.h5Style}>HTML5</h5>
          </figure>
          <figure>
            <img className={styles.imgStyle} src={imgCSS} alt="CSS" />
            <h5 className={styles.h5Style}>CSS3</h5>
          </figure>
          <figure>
            <img
              className={styles.imgStyle}
              src={require("../../images/skills/bootstrap.png")}
              alt="Bootstrap"
            />
            <h5 className={styles.h5Style}>Bootstrap</h5>
          </figure>
          <figure>
            <img className={styles.imgStyle} src={jsImg} alt="JavaScript" />
            <h5 className={styles.h5Style}>JavaScript</h5>
          </figure>
          <figure>
            <img className={styles.imgStyle} src={reactImg} alt="React" />
            <h5 className={styles.h5Style}>React.JS</h5>
          </figure>
          <figure>
            <img className={styles.imgStyle} src={tsImg} alt="TypeScript" />
            <h5 className={styles.h5Style}>TypeScript</h5>
          </figure>
          <figure>
            <img className={styles.imgStyle} src={jQueryImg} alt="jQuery" />
            <h5 className={styles.h5Style}>jQuery</h5>
          </figure>
          <figure>
            <img className={styles.imgStyle} src={sassImg} alt="SASS" />
            <h5 className={styles.h5Style}>SASS</h5>
          </figure>
          <figure>
            <img className={styles.imgStyle} src={gitImg} alt="Git" />
            <h5 className={styles.h5Style}>Git&amp;GitHub</h5>
          </figure>
        </div>
      </div>
    </section>
  );
}
