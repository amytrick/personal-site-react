import Ember from "/static/img/Ember.jpg";

function Project({ title, description, photo }) {
  return (
    <div className="project-card">
      <img className="project-photos" src={photo} />
      {/* <p>{title}</p>
      <p>{description}</p> */}
    </div>
  );
}

export default function Works() {
  return (
    <div className="content">
      <div className="title">
        <h1>
          <p>WO</p>
          <p>RKS.</p>
        </h1>
      </div>
      <Project
        title={"Ember"}
        description={"Photo management app"}
        photo={Ember}
      />
    </div>
  );
}
