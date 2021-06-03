import styled from "styled-components";

const SplitScrollSection = styled.section`
  /*** Header ***/
  width: 90vw;
  margin: auto;
  vertical-align: top;
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
  .intro.sticky {
    top: 10vh;
    height: 60vh;
    display: flex;
    position: sticky;
    flex-direction: column;
    justify-content: center;
  }
  /*** Scroll section ***/
  .right-section {
    display: flex;
  }
  .right-section-title {
    top: 0;
    width: 50%;
    height: 100vh;
    display: flex;
    position: sticky;
    align-self: auto;
    align-items: center;
    justify-content: center;
  }
  .right-section-items {
    flex: 1;
    width: 60%;
  }
  .right-section-items div {
    height: 100vh;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
  .right-section-items div img {
    width: 80%;
    height: auto;
    max-height: 95%;
    object-fit: scale-down;
  }
  .right-section-items div p {
    width: 80%;
    color: white;
    font-size: 18px;
    line-height: 30px;
  }

  @media screen and (max-width: 1455px) {
    .intro.sticky {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 950px) {
    .right-section {
      flex-direction: column;
      .intro.sticky {
        position: relative;
        width: 100%;
        height: auto;
        top: 0;
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
      }
      .right-section-items {
        width: 100%;
        height: auto;
        div {
          height: auto;
          margin: 40px auto;
        }
      }
    }
  }
`;

function SplitScroll(props) {
  return (
    <SplitScrollSection className="split-scroll">
      <div className="right-section">
        <div className="intro sticky">
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
        <div className="right-section-items">
          {props.right ? props.right.map((itm) => <div>{itm}</div>) : ""}
        </div>
      </div>
    </SplitScrollSection>
  );
}

export default SplitScroll;
