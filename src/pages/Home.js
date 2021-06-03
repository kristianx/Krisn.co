import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
