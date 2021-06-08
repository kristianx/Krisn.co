import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SplitScroll from "../../components/SplitScroll";
import SplitStatic from "../../components/SplitStatic";
import styled from "styled-components";
import ProjectIntro from "../../components/ProjectIntro";

//Images for projects
import SafeBitBg from "../../img/safebit-bg.png";
import SafeBitMock from "../../img/safebit-mockup.svg";
import WelcomeMock from "./Welcome.png";
import Onboarding from "./Onboarding.png";
import Dashboard from "./dashboard.png";
import Activity from "./Activity.png";
import Transfers from "./Transfers.png";
import Backup1 from "./Backup1.png";
import Backup2 from "./Backup2.png";
import Payment from "./Payment.png";
import Addresses from "./Addresses.png";
import Additional1 from "./Additional1.png";
import Additional2 from "./Additional2.png";
import Additional3 from "./Additional3.png";
import { motion } from "framer-motion";
import { pageVariants } from "../../styles/Animation";

const RightSectionBackground = styled.div`
  background-image: url("${SafeBitBg}");
  height: auto;
  width: 100%;
  background-size: cover;
  background-position: center;
  padding-top: 100px;
  @media screen and (max-width: 1160px) {
    margin: 0 auto 100px;
    padding-top: 7rem;
  }
  @media screen and (max-width: 920px) {
  }
`;
function SafeBit() {
  return (
    <motion.div
      className="safebit-project"
      variants={pageVariants}
      animate="visible"
      exit="hidden"
      initial="hidden"
      transition="transition"
    >
      <Nav theme="light" />
      <RightSectionBackground>
        <SplitStatic
          lightTheme={"true"}
          services={"UI/UX Design, Branding, Prototype"}
          title={"SafeBit"}
          description={
            "Travelo is an online travel platform connecting local agencies and passengers. Travelers can explore the best experiences they can enjoy, get discounts, and compare prices."
          }
          bgImage={SafeBitBg}
          image={<img src={SafeBitMock} alt="Main Project" />}
        />
        <ProjectIntro
          challenge="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos nesciunt eos voluptates tempora aliquid, minus hic et ipsum beatae."
          outcome="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos nesciunt eos voluptates tempora aliquid, minus hic et ipsum beatae."
          role="Lead UI/UX Designer"
          theme="light"
        />
      </RightSectionBackground>
      <SplitScroll
        services={"Mockups"}
        title={"Onboarding"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[
          <img src={WelcomeMock} alt="Onboarding" />,
          <img src={Onboarding} alt="Onboarding" />,
        ]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Dashboard"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[<img src={Dashboard} alt="Dashboard" />]}
      />{" "}
      <SplitScroll
        services={"Mockups"}
        title={"Activity"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[<img src={Activity} alt="Activity" />]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Transfers"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[<img src={Transfers} alt="Transfers" />]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Backup you funds"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[
          <img src={Backup1} alt="Backup1" />,
          <img src={Backup2} alt="Backup2" />,
        ]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Configure your payment methods"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[<img src={Payment} alt="Payment" />]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Your addresses"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[<img src={Addresses} alt="Addresses" />]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Additional components"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[
          <img src={Additional1} alt="Additional components" />,
          <img src={Additional2} alt="Additional components" />,
          <img src={Additional3} alt="Additional components" />,
        ]}
      />
      <SplitScroll
        services={"Prototype"}
        title={"Why not try it out?"}
        description={
          "I've implemented a figma prototype here so you can get a feel of Travelo"
        }
        right={[
          <iframe
            title="Prototip"
            className="prototype"
            //width="550"
            //height="800"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPJTaru0HbZPYiOkGU3YVS8%2FSafebit%3Fpage-id%3D0%253A1%26node-id%3D131%253A51075%26viewport%3D521%252C582%252C0.18430805206298828%26scaling%3Dcontain"
          ></iframe>,
        ]}
      />
      <div className="container mg-tp-200">
        <Footer />
      </div>
    </motion.div>
  );
}

export default SafeBit;
