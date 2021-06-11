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
            "SafeBit is a digital cryptocurrency wallet where users can transact with digital currencies like Bitcoin, Ethereum, Cardano, and Litecoin. Helping millions across the globe have an easy and safe way to manage their digital assets."
          }
          bgImage={SafeBitBg}
          image={<img src={SafeBitMock} alt="Main Project" />}
        />
        <ProjectIntro
          challenge="Alleviate the difficulties of buying and managing crypto assets through a sleek and well-organized interface."
          outcome="Robust and confidential mobile application for buying and managing crypto assets."
          role="Lead UI/UX Designer"
          theme="light"
        />
      </RightSectionBackground>
      <SplitScroll
        services={"Mockups"}
        title={"Onboarding"}
        description={
          "The first thing you will see when you enter the app is the onboarding screen. On this screen, you will be guided to make an account or sign in with an already existing one. You can also have a look at some main crypto charts."
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
          "Being the main screen, I wanted to make it compact and allow users to see their assets via pie chart for an overall look, and also give them the ability to dig in charts down below."
        }
        right={[<img src={Dashboard} alt="Dashboard" />]}
      />{" "}
      <SplitScroll
        services={"Mockups"}
        title={"Activity"}
        description={
          "The activity screen is pretty straightforward. You can go through wallets via the dropdown or using micro-interactions (Quick scroll). \u000A \u000AThis page gets cluttered with information fast. I wanted to preserve as many transactions as possible. If you are interested, you can expand each transaction to see more details about it."
        }
        right={[<img src={Activity} alt="Activity" />]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Transfers"}
        description={
          "You can pick a wallet from which you will transfer the assets, enter the address manually or by scanning the QR code, enter the amount and your assets are on their way."
        }
        right={[<img src={Transfers} alt="Transfers" />]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Backup you funds"}
        description={
          "To backup your funds successfully, you will be required to store or memorize 12 backup words. These words will be used as a backup. Here you can go through them at the speed you want."
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
          "You can store up to 5 different payment methods. This feature enables you to have more flexibility while paying."
        }
        right={[<img src={Payment} alt="Payment" />]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Your addresses"}
        description={
          "You can create a new, or import an existing wallet to your account. In just a few steps you can have your assets ready."
        }
        right={[<img src={Addresses} alt="Addresses" />]}
      />
      <SplitScroll
        services={"Mockups"}
        title={"Additional components"}
        description={"Here are some of the additional components you will see."}
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
          "I've created a Figma prototype for this app so you can get a feel of Safebit. Don't hesitate to try it out!"
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
