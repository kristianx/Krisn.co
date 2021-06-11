import "../styles/Project.css";

function Project(props) {
  return (
    <div
      className={
        props.large
          ? "project grid-lg " + props.customClass
          : "project " + props.customClass
      }
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <a href={props.link}>
        <div className="description">
          <img className="project-logo" src={props.logoImage} alt="Logo" />
          <p className="description-text">{props.descriptionText}</p>
          <div className="tags">
            {props.tags.map((tag) => (
              <p className="tag" key={tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="mockup-image">
          <img
            className={props.large ? "mockup mockup-lg " : "mockup mockup-sm "}
            src={props.mockupImage}
            alt="mockup"
          />
        </div>
        {props.additional}
      </a>
    </div>
  );
}

export default Project;
