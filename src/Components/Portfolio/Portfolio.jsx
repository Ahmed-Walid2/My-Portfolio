import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./Portfolio.module.css";
import FreshCart from "../../images/FreshCart.png";
import MoviesApp from "../../images/MoviesApp.png";
import WeatherApp from "../../images/WeatherApp.png";
import GamesApp from "../../images/GamesApp.png";
import loginSystem from "../../images/loginSystem.png";
import bookmark from "../../images/bookmark.png";
import crud from "../../images/crud.png";
import kerri from "../../images/Kerri.png";

export default function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const projects = [
    {
      id: 1,
      title: "Fresh Cart",
      img: FreshCart,
      desc: "E-Commerce website offers a diverse and comprehensive range of products, allowing customers to easily find what they need.",
      demo: "https://ecommerce-freshcart.vercel.app/login",
    },
    {
      id: 2,
      title: "Movies App",
      img: MoviesApp,
      desc: "The website displays information about a list of popular movies, now playing movies, trending movies, top rated movies and upcoming movies.",
      demo: "https://ahmed-walid2.github.io/Movies/",
    },
    {
      id: 3,
      title: "Weather App",
      img: WeatherApp,
      desc: "The website displaying temperatures for three days worldwide.",
      demo: "https://ahmed-walid2.github.io/Weather/",
    },
    {
      id: 4,
      title: "Games App",
      img: GamesApp,
      desc: "A website for gamers to view the games with a description and rating, and also enable them to filter games by the category of the game.",
      demo: "https://ahmed-walid2.github.io/Games-API/",
    },
    {
      id: 5,
      title: "Login System",
      img: loginSystem,
      desc: "A simple Login System.",
      demo: "https://ahmed-walid2.github.io/Login/",
    },
    {
      id: 6,
      title: "Bookmark Sites",
      img: bookmark,
      desc: "A website to save your favorite sites.",
      demo: "https://ahmed-walid2.github.io/Bookmark/",
    },
    {
      id: 7,
      title: "CRUD System",
      img: crud,
      desc: "A simple crud system with JavaScript and Regex.",
      demo: "https://ahmed-walid2.github.io/CRUD/",
    },
    {
      id: 8,
      title: "Kerri",
      img: kerri,
      desc: "A website for people to showcase their portfolio with their projects and things they worked on.",
      demo: "https://ahmed-walid2.github.io/Kerri/",
    },
  ];

  const SingleProject = ({ project }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
      // offset: ["end end", "start start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
      <section>
        <div className={`container ${styles.container}`}>
          <div className={`wrapper ${styles.wrapper}`}>
            <figure className={`${styles.imgContainer}`} ref={ref}>
              <img
                className={`${styles.projectImg}`}
                src={project.img}
                alt=""
              />
            </figure>
            <motion.div
              style={{ y }}
              className={`textContainer ${styles.textContainer}`}
            >
              <h2 className={styles.h2Style}>{project.title}</h2>
              <p className={styles.descStyle}>{project.desc}</p>
              <a className={styles.demoBtn} href={project.demo} target="_blank">
                Live Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div ref={ref} className={`portfolio ${styles.portfolio}`}>
      <div className={`progress ${styles.progress}`}>
        <h1>Featured Projects</h1>
        <motion.div
          style={{ scaleX }}
          className={`progressBar ${styles.progressBar}`}
        ></motion.div>
      </div>
      {projects.map((project) => (
        <SingleProject project={project} key={project.id} />
      ))}
    </div>
  );
}
