import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SplitScroll from "../../components/SplitScroll";
import SplitStatic from "../../components/SplitStatic";
import ProjectIntro from "../../components/ProjectIntro";
import styled from "styled-components";
import { pageVariants } from "../../styles/Animation";
import { motion } from "framer-motion";
//Images for intro
import Mainimage from "../../img/rainerMockup.png";
import BgImage from "../../img/rainerBg.png";
import Animacija from "./Rainer-animacija.gif";
import Login from "./Login.png";
//Images for passenger
import Tap1 from "./Tap1.png";
import Tap2 from "./Tap2.png";
import Tap3 from "./Tap3.png";
import DriverOnWay from "./DriverOnWay.png";
import Feedback from "./Feedback.png";
import NewPayment from "./NewPayment.png";
import MyTrips from "./MyTrips.png";
import Settings from "./Settings and sidebar.png";
//Images for driver
import DriverDash from "./Driver-dash.png";
import DriverInvite from "./Driver-invite.png";
import DriverRiding from "./Driver-Riding.png";
import DriverInvoice from "./Driver-Invoice.png";
import DriverSummary from "./Driver-summary.png";

const RightSectionBackground = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 83.33%,
      #fff 100%
    ),
    url("${BgImage}");
  height: auto;
  width: 100%;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1160px) {
    margin: 0 auto 100px;
    padding-top: 8rem;
  }
`;

const RainerStyled = styled.div`
  .gif-animation {
    padding: 0 20%;
  }
  .right-section-items {
    img {
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
    }
  }
`;
const StyledHeader = styled.div`
  text-align: center;
  padding: 80px 0;
  color: var(--clr-grey-dark);
  h2 {
    font-size: 2.5em;
    font-weight: 600;
    border-bottom: 2px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
    padding-bottom: 20px;
    padding-left: 15px;
  }
  @media screen and (max-width: 700px) {
    h2 {
      font-weight: 600;
      font-size: 30px;
    }
  }
`;

function Rainer() {
  return (
    <motion.div
      variants={pageVariants}
      animate="visible"
      exit="hidden"
      initial="hidden"
      transition="transition"
    >
      <RainerStyled className="rainer-project">
        <Nav />
        <RightSectionBackground>
          <SplitStatic
            services={"UI/UX Design"}
            title={"Taxi Rainer"}
            description={
              "Rainer is a taxi agency providing transportation and taxi services. Our passengers can enjoy safe travel with our professional drivers."
            }
            image={<img src={Mainimage} alt="Main Project" />}
          />
          <ProjectIntro
            challenge="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos nesciunt eos voluptates tempora aliquid, minus hic et ipsum beatae."
            outcome="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos nesciunt eos voluptates tempora aliquid, minus hic et ipsum beatae."
            role="Lead UI/UX Designer"
          />
        </RightSectionBackground>
        <SplitScroll
          services={"Passengers App"}
          title={"Onboarding"}
          description={"The goal is to finish your booking in 3 taps"}
          right={[
            <img className="gif-animation" src={Animacija} alt="Onboarding" />,
            <img src={Login} alt="Login" />,
          ]}
        />
        <StyledHeader className="container">
          <h2>Passengers Experience</h2>
        </StyledHeader>
        <SplitScroll
          services={"Passengers App"}
          title={"Tap 1"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={Tap1} alt="Tap1" />]}
        />
        <SplitScroll
          services={"Passengers App"}
          title={"Tap 2"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={Tap2} alt="Tap2" />]}
        />
        <SplitScroll
          services={"Passengers App"}
          title={"Tap 3"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={Tap3} alt="Tap3" />]}
        />
        <SplitScroll
          services={"Passengers App"}
          title={"Your driver is on the way"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={DriverOnWay} alt="DriverOnWay" />]}
        />
        <SplitScroll
          services={"Passengers App"}
          title={"Leave your feedback"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={Feedback} alt="Feedback" />]}
        />{" "}
        <SplitScroll
          services={"Passengers App"}
          title={"New Payment"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={NewPayment} alt="NewPayment" />]}
        />{" "}
        <SplitScroll
          services={"Passengers App"}
          title={"My Trips"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={MyTrips} alt="MyTrips" />]}
        />
        <SplitScroll
          services={"Passengers App"}
          title={"Settings & Sidebar"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={Settings} alt="Settings" />]}
        />
        <StyledHeader className="container">
          <h2>Driver's Experience</h2>
        </StyledHeader>
        <SplitScroll
          services={"Drivers App"}
          title={"Main Screen"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={DriverDash} alt="Settings" />]}
        />
        <SplitScroll
          services={"Drivers App"}
          title={"Passenger Approach"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={DriverInvite} alt="Settings" />]}
        />
        <SplitScroll
          services={"Drivers App"}
          title={"Riding"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={DriverRiding} alt="Settings" />]}
        />
        <SplitScroll
          services={"Drivers App"}
          title={"Invoice"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={DriverInvoice} alt="Settings" />]}
        />
        <SplitScroll
          services={"Drivers App"}
          title={"Summary"}
          description={
            "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
          }
          right={[<img src={DriverSummary} alt="Settings" />]}
        />
        <div className="container mg-tp-200">
          <Footer />
        </div>
      </RainerStyled>
    </motion.div>
  );
}

export default Rainer;
