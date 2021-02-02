import Ember from "./assets/Ember-square.png";
import Hello from "./assets/personal-site-hello.png";
import useState from "react";

function Project({ title, description, photo }) {
  // const [isShown, setIsShown] = useState(false);

  return (
    <div className="project-card">
      <img className="project-photos" src={photo} />
      <div id="project-overlay">
        <p id="project-title">{title}</p>
        <p>{description}</p>
      </div>
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
      <div id="project-content" className="d-flex flex-row">
        <button>
          <div>
            <Project
              title={"EMBER"}
              description={"photo management app"}
              photo={Ember}
            />
          </div>
        </button>
        <button>
          <div>
            <Project
              title={"WEBSITE"}
              description={"this website"}
              photo={Hello}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
