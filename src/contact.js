import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Contact() {
  return (
    <Container className="content">
      <Row className="title">
        <h1>
          <p>CON</p>
          <p>TACT.</p>
        </h1>
      </Row>
      <Row id="contact-text" className="d-flex flex-column">
        <p>
          <MdEmail /> email@gmail.com
        </p>
        <p>
          <FaLinkedinIn /> /amytrick
        </p>
        <p>
          {" "}
          <FaGithub /> /amytrick
        </p>
      </Row>
    </Container>
  );
}
