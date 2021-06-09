import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { pageVariants } from "../styles/Animation";
//import '../main.css';
const AboutStyled = styled.div`
  padding-top: 100px;
  text-align: center;
`;
function About() {
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

      <AboutStyled>
        <h1>About page</h1>
        <h1>About page</h1>
        <h1>About page</h1>
      </AboutStyled>
    </motion.div>
  );
}
export default About;
