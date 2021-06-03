import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SplitScroll from "../../components/SplitScroll";
import SplitStatic from "../../components/SplitStatic";
import styled from "styled-components";
//Images for projects
import rainerMockup from "../../img/rainerMockup.png";

import traveloBg from "../../img/traveloBg.png";
import Onboarding1 from "./Onboarding1.png";
import Onboarding2 from "./Onboarding2.png";
import Dashboard from "./Dashboard.png";
import BannerImage from "./white-section.png";
import Stories from "./stories.png";
import Destinations from "./destination-search.png";
import Profile from "./Profile.png";

const StyledBanner = styled.div`
  background-image: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 19.79%,
      rgba(255, 255, 255, 0) 83.33%,
      #ffffff 100%
    ),
    url("${BannerImage}");
  height: 600px;
  width: 100%;
  background-size: cover;
  margin: 50px auto;
`;
const RightSectionBackground = styled.div`
  background-image: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 19.79%,
      rgba(255, 255, 255, 0) 83.33%,
      #ffffff 100%
    ),
    url("${traveloBg}");
  background-position: center;
  background-size: cover;
  border-radius: 20px;
`;
function Travelo() {
  return (
    <div className="travelo-project">
      <Nav />
      <RightSectionBackground>
        <SplitStatic
          services={"UI/UX Design, Branding, Prototype"}
          title={"Travelo"}
          description={
            "Travelo is an online travel platform connecting local agencies and passengers. Travelers can explore the best experiences they can enjoy, get discounts, and compare prices."
          }
          bgImage={traveloBg}
          image={<img src={rainerMockup} alt="Main Project" />}
        />
      </RightSectionBackground>

      <SplitScroll
        services={"Mockups"}
        title={"Onboarding"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[
          <img src={Onboarding1} alt="Onboarding" />,
          <img src={Onboarding2} alt="Onboarding" />,
        ]}
      />

      <SplitScroll
        services={"Mockups"}
        title={"Dashboard & Search"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[
          <img src={Dashboard} alt="Onboarding" />,
          <img src={Destinations} alt="Onboarding" />,
        ]}
      />

      <SplitScroll
        services={"Mockups"}
        title={"Stories"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[<img src={Stories} alt="Onboarding" />]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Profile"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[<img src={Profile} alt="Onboarding" />]}
      />

      <StyledBanner>
        <div></div>
      </StyledBanner>

      <SplitStatic
        services={"Prototype"}
        title={"Why not try it out?"}
        description={
          "I've implemented a figma prototype here so you can get a feel of Travelo"
        }
        image={[
          <iframe
            title="Prototip"
            className="prototype"
            //width="550"
            //height="800"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYYt7PVDgedy9VB6j4bb5DA%2FTravelo-Seminarski%3Fpage-id%3D0%253A1%26scaling%3Dscale-down%26node-id%3D129%253A8171&hide-ui=1"
          ></iframe>,
        ]}
      />

      <div className="container mg-tp-200">
        <Footer />
      </div>
    </div>
  );
}

export default Travelo;
