// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import styles from "./Cursor.module.css";

// export default function Cursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const moveMouse = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", moveMouse);
//     return () => {
//       window.removeEventListener("mousemove", moveMouse);
//     };
//   }, []);

//   // console.log(position);
//   return (
//     <motion.div
//       className={styles.cursor}
//       animate={{ x: position.x + 10, y: position.y + 10 }}
//     ></motion.div>
//   );
// }
