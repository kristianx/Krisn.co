import styled from "styled-components";

function ProjectIntro(props) {
  const Introsection = styled.div`
    padding: 0px 0 150px 40px;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 30px;
    h2 {
      font-size: 22px;
      margin-bottom: 5px;
      ${props.theme === "light"
        ? "color: #fff;"
        : "color: var(--clr-grey-dark);"}
    }
    p {
      ${props.theme === "light"
        ? "color: var(--offWhite);"
        : "color: var(--clr-grey-light);"}
      font-size: 20px;
    }
    .challenge {
      grid-column: 1 / -1;
      padding-right: 100px;
    }
    .research {
      display: none;
    }
    @media screen and (max-width: 830px) {
      grid-template-columns: 1fr;
      padding: 0px 40px 100px 40px;
      .challenge {
        padding-right: 0;
      }
    }
  `;
  return (
    <Introsection className="container">
      <div className="challenge">
        <h2>Challenge</h2>
        <p>{props.challenge}</p>
      </div>
      <div className="outcome">
        <h2>Outcome</h2>
        <p>{props.outcome}</p>
      </div>
      <div className="role">
        <h2>Role</h2>
        <p>{props.role}</p>
      </div>

      <div className="research">
        <h2>Research</h2>
        <p>
          During the research phase, I sought to understand the frustrations our
          clients go through everyday and what information impacts their
          business the most.
        </p>
        <br />
        <p>
          After a few sessions with my team and talking to our clients we come
          up with these insights:
        </p>
        <ul>
          <li>
            <b>
              1. Clients normally have more than one company with multiple
              Business Units
            </b>
          </li>
          <li>
            <b>
              2. Clients want full company analysis both with single or multiple
              unit analysis:
            </b>
            <li>- Company analysis is done only on one company at a time</li>
            <li>
              - Units are treated as filters which will bring clients more
              flexibility
            </li>
          </li>
          <li>
            <b>3. Clients want to see:</b>
            <li>- Unit Comparison by time</li>
            <li>- Revenue Unit Comparison</li>
            <li>- Income line chart</li>
            <li>- Top items</li>
            <li>- Sales filtered by category</li>
            <li>- Staff sales overview</li>
            <li>- Loyalty report</li>
            <li>- Warehouse status</li>
            <li>- Receipt overview</li>
            <li>- Revenues and expenses</li>
          </li>
          <li>
            <b>4. Sale Reports:</b>
            <li>- Time</li>
            <li>- Sector</li>
            <li>- Staff</li>
            <li>- Payment method</li>
            <li>- Sale</li>
          </li>
        </ul>
      </div>
    </Introsection>
  );
}

export default ProjectIntro;
