import Social from "./Social";
import styled from "styled-components";
import bgSvg from "../img/stars-bg.svg";
import portrait from "../img/portrait.png";

const FooterSection = styled.footer`
  background-color: var(--primary);
  color: white;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 55% 80px 80px;
  margin-bottom: 80px;
  position: relative;
  .email,
  p,
  .social,
  .copyright {
    z-index: 5;
  }
  div:last-child {
    z-index: 1;
  }

  .email {
    font-size: 50px;
    font-weight: 600;
    cursor: pointer;
  }
  .email a {
    color: white;
  }
  .email:hover a {
    text-decoration: underline !important;
    background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }

  hr {
    width: 200px;
    border: 2px solid white;
  }
  .about-me {
    font-size: 20px;
    max-width: 400px;
  }
  .social svg {
    fill: rgba(255, 255, 255, 0.8);
  }
  .social a {
    margin-right: 30px;
  }
  .social a:last-child {
    margin-right: 0;
  }
  .social a:hover svg {
    transform: scale(1.1);
    fill: white;
  }
  .Copyright {
    font-weight: 400;
    font-size: 18px;
    opacity: 0.95;
  }
  /* Footer image */
  .image-footer {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background: linear-gradient(90deg, #223144 50%, #131e2b 100%);
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .image-footer .stars-bg {
    transition: transform 5s ease-out;
  }
  .image-footer:hover .stars-bg {
    transform: rotate(20deg) scale(1.2);
  }
  .image-footer:hover {
    background: linear-gradient(120deg, #223144 50%, #131e2b 100%);
  }
  .image-footer img {
    height: 100%;
    object-fit: contain;
    position: absolute;
  }
  @media screen and (max-width: 1200px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 850px) {
    padding: 70px 50px !important;
  }
  @media screen and (max-width: 650px) {
    padding: 70px 50px !important;
    text-align: center;
    align-items: center;
    .email {
    }
    .image-footer {
      display: none;
    }
  }
`;

function Footer() {
  return (
    <div>
      <FooterSection className="footer container mg-tp-100">
        <h1 className="section-title">Let's connect</h1>
        <h1 className="email">
          <a href="mailto:hi@krisn.co">hi@krisn.co</a>
        </h1>
        <hr />
        <p className="about-me">
          I love to make things. I have a passion for aesthetics and simple
          elegance. I possess a growth and curious mindset that reflects in
          everything I do as a designer.{" "}
        </p>
        <Social />
        <p className="Copyright">Kristian Cupurdija ©2021</p>

        <div className="image-footer">
          <img src={bgSvg} className="stars-bg" alt="stars-bg" />
          <img src={portrait} alt="portrait" />
        </div>
      </FooterSection>
    </div>
  );
}

export default Footer;
