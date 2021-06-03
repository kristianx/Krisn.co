import styled from "styled-components";

const HeroSection = styled.div`
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  h1.Hero-text {
    font-size: 40px;
    font-weight: 500;
    color: var(--clr-grey-light);
  }
  .text-dark {
    color: var(--primary);
  }
`;

function Hero() {
  return (
    <HeroSection className="Hero">
      <h1 className="Hero-text">
        Hi there! I help <span className="text-dark">startups</span> and{" "}
        <span className="text-dark">
          small <br />
          businesses
        </span>{" "}
        create growth-driven <br />
        products.
      </h1>
    </HeroSection>
  );
}

export default Hero;
