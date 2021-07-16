import { motion } from "framer-motion";
import React from "react";
import Nav from "../components/Nav";
import { pageVariants } from "../styles/Animation";
import styled from "styled-components";
import NoPosts from "../img/no-posts.svg";
import "../styles/ultrawideWrapper.css";
//import '../main.css';

function Blog() {
  const Hakka = styled.div`
    text-align: center;
    img {
      max-width: 350px;
      width: 65%;
      margin: 150px 0 50px;
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
    }
    p {
      font-family: graph;
      font-size: 22px;
      font-weight: 400;
      color: var(--clr-grey-light);
      width: 80%;
      margin: auto;
    }
  `;
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

      <Hakka>
        <img src={NoPosts} alt="No Posts" />
        <p>Seems like there are no posts. :(</p>
      </Hakka>
    </motion.div>
  );
}
export default Blog;
