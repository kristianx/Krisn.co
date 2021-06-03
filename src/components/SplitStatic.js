import styled from "styled-components";

const SplitStaticSection = styled.section`
  display: flex;
  width: 90vw;
  min-height: 80vh;
  height: auto;
  align-items: center;
  justify-content: center;
  margin: auto;
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
    width: 50%;
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
      text-align: center;
    }
  }

  /*** Prototype ***/
  .prototype {
    border: 0;
    height: auto;
    min-height: 800px;
    width: 50%;
  }
  @media screen and (max-width: 1455px) {
    .intro {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 1160px) {
    flex-direction: column;
    height: 70vh;
    justify-content: space-evenly;
    .intro {
      p {
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
    .services span {
      font-size: 0.9em;
      letter-spacing: 0.1em;
    }
    .services span::before {
      width: 1.5em;
      margin-right: 0.5em;
      top: -0.2em;
    }
    .intro {
      margin-left: 0;
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: column;

      justify-content: center;
      text-align: left;
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
  );
}

export default SplitStatic;
