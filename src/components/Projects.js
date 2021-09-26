import Project from "./Project";
import { motion } from "framer-motion";

/*Safebit imports*/
import safebitLogo from "../img/safebitlogo.svg";
import safebitMockup from "../img/safebit-mockup.svg";
import safebitadditional from "../img/safebit-additional.svg";
import safebitBackground from "../img/safebit-bg.png";
/*Analisys imports*/
import analitikaBg from "../img/analitikaBg.svg";
import analitikaMockup from "../img/analitikaMockup.png";
import analitikaLogo from "../img/analitikaLogo.png";
/*Rainer imports*/
import rainerBg from "../img/rainerBg.png";
import rainerMockup from "../img/rainerMockup.png";
import rainerLogo from "../img/rainerLogo.svg";
/*Travelo imports*/
import traveloBg from "../img/traveloBg.png";
import traveloMockup from "../img/traveloMockup.png";
import traveloLogo from "../img/traveloLogo.svg";

function Projects() {
  return (
    <motion.div id="container" className="container mg-tp-100 mg-bt-200">
      <h1 className="section-title">Projects</h1>
      <section className="projects" id="projects">
        <Project
          descriptionText={
            "Safebit is an crypto currency wallet mobile application."
          }
          tags={["UI/UX Design", "Mobile Development"]}
          link={"/safebit"}
          mockupImage={safebitMockup}
          bgImage={safebitBackground}
          logoImage={safebitLogo}
          large={true}
          additional={
            <img className="additional" src={safebitadditional} alt="" />
          }
          customClass={"safebit"}
        />

        <Project
          descriptionText={
            "Taxi Rainer is an compact mobile application developed for both passengers and drivers."
          }
          tags={["UI/UX Design", "Mobile Development"]}
          link={"/rainer"}
          mockupImage={rainerMockup}
          bgImage={rainerBg}
          logoImage={rainerLogo}
          large={false}
          customClass={"dark-text rainer"}
        />
        <Project
          descriptionText={
            "Config Analysis is a comperhensive business analysis application built for every business."
          }
          tags={["UI/UX Design", "Mobile Development"]}
          mockupImage={analitikaMockup}
          link={"/analitika"}
          bgImage={analitikaBg}
          logoImage={analitikaLogo}
          large={false}
          customClass={"analysis"}
        />
        <Project
          descriptionText={
            "Travelo is an online traveling platform, connecting local agencies and passengers."
          }
          tags={["UI/UX Design", "Mobile Development"]}
          mockupImage={traveloMockup}
          link={"/travelo"}
          bgImage={traveloBg}
          logoImage={traveloLogo}
          large={true}
          customClass={"travelo dark-text"}
        />
      </section>
    </motion.div>
  );
}

export default Projects;
