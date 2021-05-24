import './Project.css';

function Project(props) {

  return (
    <div
      className={props.large ? 'project grid-lg '+ props.customClass : 'project ' + props.customClass} 
      style={{backgroundImage: `url(${props.bgImage})`}}
      >

      <div className="description">
        <img className="project-logo" src={props.logoImage} alt=""/>
        <p className="description-text">{props.descriptionText}</p>
        <div className="tags">
          {
            props.tags.map((tag)=>(
              <p className="tag">{tag}</p>
            ))
          }
        </div>
      </div>
      <div className="mockup-image">
        <img 
          className={props.large ? 'mockup mockup-lg ' : 'mockup mockup-sm '}
          src={props.mockupImage} 
        />
      </div>
      {props.additional}
    </div>
  );
}

export default Project;
