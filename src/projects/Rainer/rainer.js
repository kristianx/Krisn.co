import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import rainerMockup from "../../img/rainerMockup.png";
import SplitScroll from "../../components/SplitScroll";
import SplitStatic from "../../components/SplitStatic";

function Rainer() {
  return (
    <div className="rainer-project">
      <Nav />

      <SplitStatic
        services={"UI/UX Design, Prototype"}
        title={"Taxi Rainer"}
        description={
          "Rainer is a taxi agency providing transportation and taxi services. Our passengers can enjoy safe travel with our professional drivers."
        }
        image={<img src={rainerMockup} alt="Main Project" />}
      />

      <SplitScroll
        title={"Onboarding"}
        description={
          "The first thing you will see when you open a app is the onboarding screen which will guide you to make an account or sign in with already existing one"
        }
        right={[
          <img src={rainerMockup} alt="Main Project" />,
          <img src={rainerMockup} alt="Main Project" />,
        ]}
      />

      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default Rainer;
