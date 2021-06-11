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
    padding-bottom: 20px;
    padding-left: 15px;
  }
  hr {
    width: 60%;
    margin: auto;
    border-image-slice: 1;
    border-width: 1px;
    border-image-source: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  }
  p {
    font-size: 22px;
    max-width: 80%;
    margin: 20px auto 0;
  }
  @media screen and (max-width: 700px) {
    h2 {
      font-weight: 600;
      font-size: 30px;
      padding-left: 0;
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
            challenge="Build an efficient and nice-looking interface that will allow passengers to book different types of rides in just a few taps."
            outcome="Straight-to-the-point mobile interface and backend management system following brand guidelines."
            role="Lead UI/UX Designer"
          />
        </RightSectionBackground>
        <SplitScroll
          services={"Passengers App"}
          title={"Onboarding"}
          description={
            "For efficiency, keeping it simple is the key. If it's your first time in the app, you need to create a new account through a small form. For security reasons, you will be asked to verify your phone number. Drivers already had a pre-build account."
          }
          right={[
            <img className="gif-animation" src={Animacija} alt="Onboarding" />,
            <img src={Login} alt="Login" />,
          ]}
        />
        <StyledHeader className="container">
          <h2>Passengers Experience</h2>
          <hr />
          <p>
            The goal of the passenger's app is to provide a successful booking
            experience in just 3 taps.
          </p>
        </StyledHeader>
        <SplitScroll
          services={"Passengers App"}
          title={"Tap 1"}
          description={
            "The first thing you as a new user will be looking for is the entry form (the initial trigger) to start a search. The form is placed on the bottom of the screen so you can reach it more easily. \u000A \u000AOn tap, the search screen opens, input is automatically in focus which will show the keyboard. Under the input field, there is an option for saved locations and past trips."
          }
          right={[<img src={Tap1} alt="Tap1" />]}
        />
        <SplitScroll
          services={"Passengers App"}
          title={"Tap 2"}
          description={
            "The second tap serves for choosing the type of ride you want. Years of experience perfected Rainer’s car selection which can be represented in 3 main vehicle types, by default most used one is selected. \u000A \u000AMost users want their ride right away, which is chosen by default. If needed you can arrange a custom pickup time."
          }
          right={[<img src={Tap2} alt="Tap2" />]}
        />
        <SplitScroll
          services={"Passengers App"}
          title={"Tap 3"}
          description={
            "Change your payment method if needed and finish your booking."
          }
          right={[<img src={Tap3} alt="Tap3" />]}
        />
        <SplitScroll
          services={"Passengers App"}
          title={"Your driver is on the way"}
          description={
            "After you finish your booking, available drivers are notified about a new trip. Once the driver is on his way, you will see more information about your ride and where he is."
          }
          right={[<img src={DriverOnWay} alt="DriverOnWay" />]}
        />
        <SplitScroll
          services={"Passengers App"}
          title={"Leave your feedback"}
          description={
            "When you reach your destination, you can rate your driver and submit your feedback."
          }
          right={[<img src={Feedback} alt="Feedback" />]}
        />{" "}
        <SplitScroll
          services={"Passengers App"}
          title={"New Payment"}
          description={
            "Adding new payment methods is simple and easy. It will speed up your bookings, plus it will give you more flexibility when paying for your trips."
          }
          right={[<img src={NewPayment} alt="NewPayment" />]}
        />{" "}
        <SplitScroll
          services={"Passengers App"}
          title={"My Trips"}
          description={
            "You can go through your past trips and see details about them. You can also see more info about the driver and reach out to them if you accidentally left something behind."
          }
          right={[<img src={MyTrips} alt="MyTrips" />]}
        />
        <SplitScroll
          services={"Passengers App"}
          title={"Settings & Sidebar"}
          description={
            "The sidebar is equipped with all you need for navigating the app. The settings page will be updated as the app develops."
          }
          right={[<img src={Settings} alt="Settings" />]}
        />
        <StyledHeader className="container">
          <h2>Driver's Experience</h2>
          <hr />
          <p>
            The goal of the driver's app is to provide an easy way to connect
            and find new passengers.
          </p>
        </StyledHeader>
        <SplitScroll
          services={"Drivers App"}
          title={"Main Screen"}
          description={
            "Once the driver is online, they can receive new trips and see their passengers on the map. There is an option for starting a street ride in situations where the passenger is not using the app. "
          }
          right={[<img src={DriverDash} alt="Settings" />]}
        />
        <SplitScroll
          services={"Drivers App"}
          title={"New Ride"}
          description={
            "When a new trip request comes in, the driver can see information about the trip with the buttons to respond to it in a timely manner.\u000A \u000AWhen the driver starts a new street ride, he has an option to enter the passenger's information."
          }
          right={[<img src={DriverInvite} alt="Settings" />]}
        />
        <SplitScroll
          services={"Drivers App"}
          title={"Riding"}
          description={
            "Both drivers and passengers can have an easy way to communicate. The driver can choose if they want to use built-in or third-party maps."
          }
          right={[<img src={DriverRiding} alt="Settings" />]}
        />
        <SplitScroll
          services={"Drivers App"}
          title={"Invoice"}
          description={
            "Upon arrival, the driver will receive an invoice that he can check before confirming it."
          }
          right={[<img src={DriverInvoice} alt="Settings" />]}
        />
        <SplitScroll
          services={"Drivers App"}
          title={"Summary"}
          description={
            "The driver can go over their completed trips and see more information about them as well as a summary of their earnings."
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
