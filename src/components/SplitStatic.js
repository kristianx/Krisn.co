import styled from "styled-components";
import { motion } from "framer-motion";

const SplitStaticSection = styled.section`
  display: flex;
  width: 90%;
  margin: auto;
  min-height: 80vh;
  height: auto;
  align-items: center;
  justify-content: center;
  //Pogledati ovo
  .light-theme {
    color: white;
    h1,
    p {
      color: white !important;
    }
    span::before {
      background-color: white !important;
    }
  }
  .intro {
    width: 40%;
    margin-left: 3em;
  }
  .intro h1 {
    font-size: 60px;
    color: var(--clr-grey-dark);
    line-height: 1em;
  }
  .intro p {
    font-size: 22px;
    max-width: 25em;
    color: var(--clr-grey-dark);
  }
  .services span {
    font-size: 1em;
    font-weight: 550;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .services span::before {
    width: 3em;
    top: -0.3em;
    content: "";
    height: 0.2em;
    position: relative;
    margin-right: 1.5em;
    display: inline-block;
    background: var(--clr-grey-light);
  }

  .right-section-item {
    width: 60%;
    img {
      max-width: 100%;
    }
    .image {
      text-align: right;
    }
  }

  /*** Prototype ***/
  .prototype {
    border: 0;
    height: auto;
    min-height: 800px;
    width: 85%;
  }
  @media screen and (max-width: 1455px) {
    .intro {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 1160px) {
    padding: 80px 0;
    flex-direction: column;
    height: auto;
    justify-content: space-evenly;
    .intro {
      padding-bottom: 100px;
      width: 100%;
      p {
        width: 100%;
        max-width: 100%;
      }
    }
    .right-section-item {
      width: 80%;
      img {
        max-width: 100%;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .intro {
      .services {
        font-size: 14px;
      }
      h1 {
        font-size: 35px;
      }
      p {
        max-width: 100%;
        font-size: 18px;
      }
    }
    .services span {
      font-size: 0.9em;
      letter-spacing: 0.1em;
    }
    .services span::before {
      width: 1.5em;
      margin-right: 0.5em;
      top: -0.2em;
      background: linear-gradient(45deg, #e73c7e, #23a6d5, #23d5ab);
    }

    .right-section-item {
      width: 100%;
      img {
        max-width: 100%;
      }
    }
    .prototype {
      width: 80%;
    }
  }
`;

function SplitStatic(props) {
  return (
    <motion.div>
      <SplitStaticSection className="split-static">
        <div className={props.lightTheme ? "intro light-theme " : "intro "}>
          {props.services ? (
            <div className="services">
              <span>{props.services}</span>
            </div>
          ) : (
            ""
          )}
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <div className="right-section-item">
          <div className="image">{props.image}</div>
        </div>
      </SplitStaticSection>
    </motion.div>
  );
}

export default SplitStatic;
