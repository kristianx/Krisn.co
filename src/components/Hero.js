import styled from "styled-components";

const HeroSection = styled.div`
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 30px 20px;
  transition: color 1s ease;

  h1.Hero-text {
    font-size: 40px;
    font-weight: 500;
    color: var(--clr-grey-light);
    max-width: 650px;
  }
  h1 span {
    font-weight: 600;
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
        <span className="text-dark">small businesses</span> create growth-driven
        products.
      </h1>
    </HeroSection>
  );
}

export default Hero;
