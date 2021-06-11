import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SplitScroll from "../../components/SplitScroll";
import SplitStatic from "../../components/SplitStatic";
import styled from "styled-components";
import React from "react";

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
import ProjectIntro from "../../components/ProjectIntro";
import { motion } from "framer-motion";
import { pageVariants } from "../../styles/Animation";

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
  height: auto;
  width: 100%;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1160px) {
    margin: 0 auto 100px;
    padding-top: 7rem;
  }
  @media screen and (max-width: 920px) {
  }
`;

const TraveloStyled = styled.div`
  .right-section-items {
    img {
      filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.051));
    }
  }
`;
export default class Travelo extends React.Component {
  render() {
    return (
      <motion.div
        variants={pageVariants}
        animate="visible"
        exit="hidden"
        initial="hidden"
        transition="transition"
      >
        <TraveloStyled className="travelo-project">
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
            <ProjectIntro
              challenge="We want to offer our customers the ability to book trips from local agencies,  see reviews, and compare prices all in one place."
              outcome="Cross-platform solution built for Agencies and Customers."
              role="Lead UI/UX Designer"
            />
          </RightSectionBackground>

          <SplitScroll
            services={"Mockups"}
            title={"Onboarding"}
            description={
              "The first thing you will see when you open an app is the onboarding screen which will guide you to make an account or sign in with an already existing one."
            }
            right={[
              <img src={Onboarding1} alt="Onboarding" />,
              <img src={Onboarding2} alt="Onboarding" />,
            ]}
          />

          <SplitScroll
            services={"Mockups"}
            title={"Home & Search"}
            description={
              "The home screen is where you will get your imagination going. Starting from stories where you can see photos of recent trips, down to the blog section to the seasonally selected destinations you can choose from.\u000A \u000AIf you are interested in searching specific places or just casually browsing, you will get a range of different places, trips, and agencies."
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
              "Agencies will have the ability to post stories and promote their trips through them. Stories will be sorted based on location. "
            }
            right={[<img src={Stories} alt="Onboarding" />]}
          />
          <SplitScroll
            services={"Mockups"}
            title={"Profile"}
            description={
              "You have control over your information. Depending on your traveling activity, you will receive points that you can use to book a trip."
            }
            right={[<img src={Profile} alt="Onboarding" />]}
          />

          <StyledBanner>
            <div></div>
          </StyledBanner>
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
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYYt7PVDgedy9VB6j4bb5DA%2FTravelo-Seminarski%3Fpage-id%3D0%253A1%26scaling%3Dscale-down%26node-id%3D129%253A8171&hide-ui=1"
              ></iframe>,
            ]}
          />

          <div className="container mg-tp-200">
            <Footer />
          </div>
        </TraveloStyled>
      </motion.div>
    );
  }
}
