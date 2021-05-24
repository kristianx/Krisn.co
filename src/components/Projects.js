import '../main.css';
import './Projects.css';
import Project from './Project'

/*Safebit imports*/
import safebitLogo from '../img/safebit-logo.png';
import safebitMockup from '../img/safebit-mockup.svg';
import safebitadditional from '../img/safebit-additional.svg';
import safebitBackground from '../img/safebit-bg.png';
/*Analisys imports*/
import analitikaBg from "../img/analitikaBg.svg"
import analitikaMockup from "../img/analitikaMockup.png"
import analitikaLogo from "../img/analitikaLogo.png"
/*Rainer imports*/
import rainerBg from "../img/rainerBg.png"
import rainerMockup from "../img/rainerMockup.png"
import rainerLogo from "../img/rainerLogo.svg"
/*Travelo imports*/
import traveloBg from "../img/traveloBg.png"
import traveloMockup from "../img/traveloMockup.png"
import traveloLogo from "../img/traveloLogo.svg"

function Projects() {
  return (
    <div className="container mg-tp-100 mg-bt-200">
      <h1 className="section-title">Projects</h1>
      <section className="projects">
        <Project 
          descriptionText={"Safebit is an crypto currency wallet mobile application."}
          tags={['UI/UX Design', 'Mobile Development']}
          mockupImage={safebitMockup}
          bgImage={safebitBackground}
          logoImage={safebitLogo}
          large={true}
          additional={<img className="additional" src={safebitadditional} alt=""/>}
        />
        <Project 
          descriptionText={"Straight-to-the-point mobile interface and backend management system following brand guidelines."}
          tags={['UI/UX Design', 'Mobile Development']}
          mockupImage={rainerMockup}
          bgImage={rainerBg}
          logoImage={rainerLogo}
          large={false}
          customClass={'dark-text rainer'}
        />
        <Project 
          descriptionText={"Business analysis mobile applicatoin."}
          tags={['UI/UX Design', 'Mobile Development']}
          mockupImage={analitikaMockup}
          bgImage={analitikaBg}
          logoImage={analitikaLogo}
          large={false}
          customClass={'analysis'}
        />
        <Project 
          descriptionText={"Travelo is an online travel platform connecting local agencies and passengers."}
          tags={['UI/UX Design', 'Mobile Development']}
          mockupImage={traveloMockup}
          bgImage={traveloBg}
          logoImage={traveloLogo}
          large={true}
          customClass={'travelo dark-text'}
        />
      </section>
    </div>
   
  );
}

export default Projects;