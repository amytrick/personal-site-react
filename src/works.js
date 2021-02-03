import Ember from "./assets/Ember-square.png";
import Hello from "./assets/personal-site-hello.png";
import { useState } from "react";
import Modal from "react-modal";

function Project({ title, description, photo }) {
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClose = () => setModalIsOpen(false);
  const handleShow = () => setModalIsOpen(true);

  return (
    <div className="content">
      <div className="title">
        <h1>
          <p>WO</p>
          <p>RKS.</p>
        </h1>
      </div>
      <div id="project-content" className="d-flex flex-row">
        <button onClick={handleShow}>
          <div>
            <Project
              title={"EMBER"}
              description={"photo management app"}
              photo={Ember}
            />
          </div>
        </button>
        <Modal isOpen={modalIsOpen} onHide={handleClose}></Modal>
        <button>
          <div>
            <Project
              title={"WEBSITE"}
              description={"this website"}
              photo={Hello}
            />
          </div>
        </button>
        <button onClick={handleShow}>Open modal</button>
        <Modal isOpen={modalIsOpen}>
          <p>Modal Content.</p>
        </Modal>
      </div>
    </div>
  );
}
