import EmberSquare from "./assets/Ember-square.png";
import EmberFullScreen from "./assets/Ember-full-screen.png";
import EmberLibrary from "./assets/Ember-library.png";
import Hello from "./assets/personal-site-hello.png";
import React, { useState } from "react";
import Modal from "react-modal";
import Carousel from "react-bootstrap/Carousel";

function Project({ title, description, photo }) {
  return (
    <div className="project-card">
      <img className="project-photos" src={photo} alt="individual project" />
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
      <Modal isOpen={isVisible} onHide={hide} shouldCloseOnOverlayClick={true}>
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
  const {
    show: showEmberModal,
    hide: hideEmberModal,
    RenderModal: RenderEmberModal
  } = useModal();
  const {
    show: showB,
    hide: hideModalB,
    RenderModal: RenderModalB
  } = useModal();

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
              photo={EmberSquare}
            />
          </div>
        </button>
        <RenderEmberModal>
          <button onClick={hideEmberModal} id="modal-close-button">
            x
          </button>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={EmberLibrary}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Ember library</h3>
                <p>
                  Ember is a photo management app for storing, organizing, and
                  sorting your personal photos.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={EmberFullScreen}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Photo close up</h3>
                <p>
                  With features of rating, tagging, and grouping into albums, it
                  is easy to search through your photos for a specific one.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </RenderEmberModal>
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
      </div>
    </div>
  );
}
