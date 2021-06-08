import { motion } from "framer-motion";
import React from "react";
import Nav from "../components/Nav";
import { pageVariants } from "../styles/Animation";
//import '../main.css';

function Casestudies() {
  return (
    <motion.div
      className="container"
      variants={pageVariants}
      animate="visible"
      exit="hidden"
      initial="hidden"
      transition="transition"
    >
      <Nav />
      <h1>About!</h1>
    </motion.div>
  );
}
export default Casestudies;
