import Ember from "./assets/Ember-square.png";
import Hello from "./assets/personal-site-hello.png";
import React, { useState } from "react";
import Modal from "react-modal";
import { FaBlackTie } from "react-icons/fa";

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

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = (props) => (
    <React.Fragment>
      <Modal isOpen={isVisible} onHide={hide}>
        {props.children}
      </Modal>
    </React.Fragment>
  );

  return {
    show,
    hide,
    RenderModal
  };
};

export default function Works() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClose = () => setModalIsOpen(false);
  const handleShow = () => setModalIsOpen(true);
  const { show: showEmberModal, RenderModal: RenderEmberModal } = useModal();
  const { show: showB, RenderModal: RenderModalB } = useModal();

  return (
    <div className="content">
      <div className="title">
        <h1>
          <p>WO</p>
          <p>RKS.</p>
        </h1>
      </div>
      <div id="project-content" className="d-flex flex-row">
        <button onClick={showEmberModal}>
          <div>
            <Project
              title={"EMBER"}
              description={"photo management app"}
              photo={Ember}
            />
          </div>
        </button>
        <RenderEmberModal>
          <p>Hellop</p>
        </RenderEmberModal>
        {/* <Modal
          isOpen={modalIsOpen}
          onHide={handleClose}
          contentLabel={"project details"}
        >
          <p>Hello</p>
        </Modal> */}
        <button>
          <div>
            <Project
              title={"WEBSITE"}
              description={"this website"}
              photo={Hello}
            />
          </div>
        </button>
        <button onClick={showB}>Open modal</button>
        <RenderModalB>
          <p>Modal2</p>
        </RenderModalB>
        {/* <Modal
          isOpen={modalIsOpen}
          contentLabel="onRequestClose Example"
          onRequestClose={handleClose}
          style={{
            content: {
              color: "black"
            }
          }}
        >
          <p>Modal text!</p>
          <button onClick={handleClose}>Close</button>
        </Modal> */}
      </div>
    </div>
  );
}
