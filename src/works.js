import EmberSquare from "./assets/Ember-square.png";
import EmberFullScreen from "./assets/Ember-full-screen.png";
import EmberLibrary from "./assets/Ember-library.png";
import Hello from "./assets/personal-site-hello.png";

import useModal from "./components/useModal.js";

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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
    <Container className="content">
      <Row className="title">
        <h1>
          <p>WO</p>
          <p>RKS.</p>
        </h1>
      </Row>
      <Row id="project-content" className="d-flex flex-row">
        <button onClick={showEmberModal} className="col-md-6">
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
        <button className="col-md-6">
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
      </Row>
    </Container>
  );
}
