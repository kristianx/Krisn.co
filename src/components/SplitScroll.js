import styled from "styled-components";

const SplitScrollSection = styled.section`
  /*** Header ***/
  width: 90%;
  margin: auto;
  vertical-align: top;
  .intro {
    width: 40%;
    margin-left: 3em;
  }
  .intro h1 {
    font-size: 60px;
    font-weight: 600;
    color: var(--clr-grey-dark);
    line-height: 0.9em;
    margin: 5px 0 10px;
  }
  .intro p {
    font-size: 22px;
    max-width: 25em;
    color: var(--clr-grey-dark);
  }
  .services span {
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .services span::before {
    width: 3em;
    top: -0.3em;
    content: "";
    height: 0.2em;
    position: relative;
    margin-right: 1em;
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
    object-fit: contain;
  }
  .right-section-items div p {
    width: 80%;
    color: white;
    font-size: 18px;
    line-height: 30px;
  }

  .prototype {
    height: 80%;
    width: 80%;
    border: none;
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
          background: linear-gradient(45deg, #e73c7e, #23a6d5, #23d5ab);
          background-clip: text;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
          -webkit-text-fill-color: transparent;
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
        font-size: 15px;

        letter-spacing: 0.1em;
      }
      .services span::before {
        width: 1.5em;
        margin-right: 0.5em;
        top: -0.2em;
        background: linear-gradient(-45deg, #e73c7e, #23a6d5);
      }
      .right-section-items {
        width: 100%;
        height: auto;
        div {
          height: auto;
          margin: 40px auto;
        }
      }
      .prototype {
        height: 80vh;
        width: 80%;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .right-section-items div img {
      width: 100%;
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
