import { motion } from "framer-motion";
import React from "react";
import Nav from "../components/Nav";
import { pageVariants } from "../styles/Animation";
import styled from "styled-components";
//import '../main.css';

function Blog() {
  const Hakka = styled.div`
    padding-top: 200px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  `;
  return (
    <motion.div
      className="container"
      variants={pageVariants}
      animate="visible"
      initial="hidden"
      transition={{ staggerChildren: 0.3 }}
    >
      <Nav />
      <Hakka>Blog page!</Hakka>
    </motion.div>
  );
}
export default Blog;
