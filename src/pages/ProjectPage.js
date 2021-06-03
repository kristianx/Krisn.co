import Nav from "../components/Nav";
import Footer from "../components/Footer";
import rainerMockup from "../img/rainerMockup.png";
import SplitScroll from "../components/SplitScroll";

function ProjectPage() {
  return (
    <>
      <Nav />
      <header className="project-header">
        <div className="intro">
          <div className="services">
            <span>UI/UX Design, Branding</span>
          </div>
          <h1>Project name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            pariatur saepe! Dolore ipsum, recusandae deleniti dolorem illum
            architecto sapiente ratione.
          </p>
        </div>
        <div className="main-image">
          <img src={rainerMockup} alt="Main Project" />
        </div>
      </header>

      <SplitScroll />

      <SplitScroll />

      <div className="container">
        <div className="prototype-container">
          <iframe
            title="Prototip"
            className="prototype"
            width="800"
            height="850"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYYt7PVDgedy9VB6j4bb5DA%2FTravelo-Seminarski%3Fpage-id%3D0%253A1%26scaling%3Dscale-down%26node-id%3D129%253A8171&hide-ui=1"
            //allowfullscreen={true}
          ></iframe>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProjectPage;
