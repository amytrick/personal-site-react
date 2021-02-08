import Amy from "./assets/Amy.jpg";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <Container className="content">
      <Row className="title">
        <h1>
          <p>AB</p>
          <p>OUT.</p>
        </h1>
      </Row>
      <Row className="d-flex flex-column" id="about-content">
        <div>
          <img src={Amy} alt="Amy Trick" />
        </div>
        <div id="about-text">
          <h2>AMY TRICK</h2>
          <p>This is me.</p>
        </div>
      </Row>
    </Container>
  );
}
