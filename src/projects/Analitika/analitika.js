import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SplitScroll from "../../components/SplitScroll";
import SplitStatic from "../../components/SplitStatic";
import ProjectIntro from "../../components/ProjectIntro";
import styled from "styled-components";
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
`;

function Analitika() {
  return (
    <div className="analitika-project">
      <Nav theme="light" />
      <RightSectionBackground>
        <SplitStatic
          lightTheme={"true"}
          services={"UI/UX Design"}
          title={"Config Analysis"}
          description={
            "Travelo is an online travel platform connecting local agencies and passengers. Travelers can explore the best experiences they can enjoy, get discounts, and compare prices."
          }
          image={<img src={Mainimage} alt="Main Project" />}
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
        right={[<img src={Onboarding} alt="Onboarding" />]}
      />

      <SplitScroll
        services={"Mockups"}
        title={"Dashboard"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
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
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
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
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[<img src={ComplexChart} alt="Complex Charts" />]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Settings"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[<img src={SettingsMock} alt="Settings" />]}
      />
      <div className="container mg-tp-200">
        <Footer />
      </div>
    </div>
  );
}

export default Analitika;
