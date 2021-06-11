import Nav from "../../components/Nav";
import React from "react";
import Footer from "../../components/Footer";
import SplitScroll from "../../components/SplitScroll";
import SplitStatic from "../../components/SplitStatic";
import ProjectIntro from "../../components/ProjectIntro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageVariants } from "../../styles/Animation";
//Images for projects
import Mainimage from "./MainImage.png";
import BgImage from "../../img/analitikaBg.svg";
import Onboarding from "./onboarding.png";
import DashClose from "./dashboard-closed.png";
import DashOpen from "./dashboard-open.png";
import DashExp from "./dashboard-expanded.png";
import LeftSidebar from "./left-sidebar.png";
import RightSidebar from "./right-sidebar.png";
import ComplexChart from "./complex-charts.png";
import SettingsMock from "./settings.png";
import BannerImage from "./BannerSection.jpg";

const RightSectionBackground = styled.div`
  background-image: url("${BgImage}");
  height: auto;
  width: 100%;
  background-size: cover;
  background-position: center;
  padding-top: 50px;
  @media screen and (max-width: 1160px) {
    margin: 0 auto 100px;
    padding-top: 8rem;
  }
  @media screen and (max-width: 920px) {
  }
`;

const StyledBanner = styled.div`
  background-image: url("${BannerImage}");
  height: 750px;
  width: 100%;
  background-size: cover;
  margin: 50px auto;
  background-position: center;
`;
export default class Analitika extends React.Component {
  render() {
    return (
      <motion.div
        className="analitika-project"
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
            services={"UI/UX Design"}
            title={"Config Analysis"}
            description={
              "Config Analysis is a mobile application built for business owners. It's allowing them to have versatile insights into their business. Depending on the package that the client is using, they can enjoy a variety of features that will allow them to manage and overview their business with ease."
            }
            image={<img src={Mainimage} alt="Main Project" />}
          />
          <ProjectIntro
            challenge="Design a clean mobile application for business owners. Allow them to take a quick and detailed overview of their business and not feel overwhelmed in the process."
            outcome="An efficient mobile application with a fine balance between a clean and versatile interface. This application will be connected to the already built POS system."
            role="Lead UI/UX Designer"
            theme="light"
          />
        </RightSectionBackground>

        <SplitScroll
          services={"Mockups"}
          title={"Onboarding"}
          description={
            "Upon opening the application you will have an option to choose in which language you want to continue. Because the application is connected with an already built POS system you will have a created account."
          }
          right={[<img src={Onboarding} alt="Onboarding" />]}
        />

        <SplitScroll
          services={"Mockups"}
          title={"Dashboard"}
          description={
            "On the dashboard, you can see custom charts for your business. In addition to the dashboard, you will have expandable top and bottom sections. In the top section, you can choose your business units. At the bottom section, you can set your time constraints."
          }
          right={[
            <img src={DashClose} alt="Dashboard Closed" />,
            <img src={DashOpen} alt="Dashboard Open" />,
            <img src={DashExp} alt="Dashboard Expanded" />,
          ]}
        />

        <SplitScroll
          services={"Mockups"}
          title={"Sidebars"}
          description={
            "In the left sidebar, you can choose between your companies and do an analysis with pre-built filters for them. \u000A \u000AIn the right sidebar, you can have additional different filters at your choosing."
          }
          right={[
            <img src={LeftSidebar} alt="Left Sidebar" />,
            <img src={RightSidebar} alt="Right Sidebar" />,
          ]}
        />
        <StyledBanner>
          <div></div>
        </StyledBanner>
        <SplitScroll
          services={"Mockups"}
          title={"Complex Charts"}
          description={
            "Certain charts will allow you to filter out details and create calculations on top of them."
          }
          right={[<img src={ComplexChart} alt="Complex Charts" />]}
        />
        <SplitScroll
          services={"Mockups"}
          title={"Settings"}
          description={
            "One click away from changing your theme, language, and other details."
          }
          right={[<img src={SettingsMock} alt="Settings" />]}
        />
        <div className="container mg-tp-200">
          <Footer />
        </div>
      </motion.div>
    );
  }
}

//export default Analitika;
