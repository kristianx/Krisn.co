import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SplitScroll from "../../components/SplitScroll";
import SplitStatic from "../../components/SplitStatic";
import styled from "styled-components";
import ProjectIntro from "../../components/ProjectIntro";

//Images for projects
import SafeBitBg from "../../img/safebit-bg.png";
import SafeBitMock from "../../img/safebit-mockup.svg";

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
    <div className="safebit-project">
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
          <img src={SafeBitMock} alt="Onboarding" />,
          <img src={SafeBitMock} alt="Onboarding" />,
        ]}
      />

      <div className="container mg-tp-200">
        <Footer />
      </div>
    </div>
  );
}

export default SafeBit;
