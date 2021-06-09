import { motion } from "framer-motion";
import React from "react";
import Nav from "../components/Nav";
import { pageVariants } from "../styles/Animation";
import styled from "styled-components";
import NoPosts from "../img/no-posts.svg";
//import '../main.css';

function Blog() {
  const Hakka = styled.div`
    text-align: center;
    img {
      max-width: 400px;
      width: 80%;
      margin: 150px 0 50px;
    }
    p {
      font-family: graph;
      font-size: 27px;
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
        <p>Seems like there is no posts to show. :(</p>
      </Hakka>
    </motion.div>
  );
}
export default Blog;
