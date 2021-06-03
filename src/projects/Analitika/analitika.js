import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SplitScroll from "../../components/SplitScroll";
import SplitStatic from "../../components/SplitStatic";
import styled from "styled-components";
//Images for projects
import Mainimage from "./MainImage.png";
import BgImage from "../../img/analitikaBg.svg";
import AnalitikaIntro from "./Analitika.jpg";

const RightSectionBackground = styled.div`
  background-image: url("${BgImage}");
  height: 600px;
  width: 100%;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1160px) {
    margin: 0 auto 200px;
    padding-top: 8rem;
  }
  @media screen and (max-width: 920px) {
    margin: 0 auto 200px;
    padding-top: 6rem;
  }
`;
const ProjectOverview = styled.div`
  width: 80vw;
  margin: auto;
  padding: 50px 0;
  p,
  li {
    font-size: 17px;
  }
`;

function Analitika() {
  return (
    <div className="analitika-project">
      <Nav />

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
      </RightSectionBackground>
      <ProjectOverview>
        <h2>Research</h2>
        <p>
          During the research phase, I sought to understand the frustrations our
          clients go through everyday and what information impacts their
          business the most.
        </p>
        <br />
        <p>
          After a few sessions with my team and talking to our clients we come
          up with these insights:
        </p>
        <ul>
          <li>
            <b>
              1. Clients normally have more than one company with multiple
              Business Units
            </b>
          </li>
          <li>
            <b>
              2. Clients want full company analysis both with single or multiple
              unit analysis:
            </b>
            <li>- Company analysis is done only on one company at a time</li>
            <li>
              - Units are treated as filters which will bring clients more
              flexibility
            </li>
          </li>
          <li>
            <b>3. Clients want to see:</b>
            <li>- Unit Comparison by time</li>
            <li>- Revenue Unit Comparison</li>
            <li>- Income line chart</li>
            <li>- Top items</li>
            <li>- Sales filtered by category</li>
            <li>- Staff sales overview</li>
            <li>- Loyalty report</li>
            <li>- Warehouse status</li>
            <li>- Receipt overview</li>
            <li>- Revenues and expenses</li>
          </li>
          <li>
            <b>4. Sale Reports:</b>
            <li>- Time</li>
            <li>- Sector</li>
            <li>- Staff</li>
            <li>- Payment method</li>
            <li>- Sale</li>
          </li>
        </ul>
      </ProjectOverview>
      <SplitScroll
        services={"Mockups"}
        title={"Onboarding"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[
          <img src={BgImage} alt="Onboarding" />,
          <img src={BgImage} alt="Onboarding" />,
          //<img src={} alt="Onboarding" />,
        ]}
      />

      <div className="container mg-tp-200">
        <Footer />
      </div>
    </div>
  );
}

export default Analitika;
