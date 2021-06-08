import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { pageVariants } from "../styles/Animation";

function Home() {
  return (
    <>
      <motion.div
        className="container"
        variants={pageVariants}
        animate="visible"
        exit="hidden"
        initial="hidden"
        transition="transition"
      >
        <Nav theme="dark" />
        <Hero />
        <Projects />
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
