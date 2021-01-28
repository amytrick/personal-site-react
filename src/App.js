import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";

import About from "./about";
import Works from "./works";
import Contact from "./contact";

const Hello = () => {
  return (
    <Container fluid>
      <Row id="colorblock-row">
        <Col id="colorblock-column">
          <div
            id="colorblock"
            className="d-flex align-items-center justify-content-end"
          >
            <div id="hello">
              <h1>
                <p>HE</p>
                <p>LLO.</p>
              </h1>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default function App() {
  return (
    <Container fluid id="container">
      <Row id="homepage-row">
        <Router>
          <Col xs={1} id="nav-column" className="d-flex align-items-center">
            <div>
              <nav>
                <p>
                  <Link className="nav-item" to="/about">
                    {" "}
                    About{" "}
                  </Link>
                </p>
                <p>
                  <Link className="nav-item" to="/works">
                    {" "}
                    Works{" "}
                  </Link>
                </p>
                <p>
                  <Link className="nav-item" to="/contact">
                    {" "}
                    Contact{" "}
                  </Link>
                </p>
              </nav>
            </div>
          </Col>
          <Col xs={10} id="body-column">
            <div>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/works">
                  <Works />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/">
                  <Hello />
                </Route>
              </Switch>
            </div>
          </Col>
        </Router>
        <Col xs={1} className="d-flex align-items-center">
          <IconContext.Provider value={{ size: "2em" }}>
            <div className="d-flex flex-column">
              <p>
                <a href="https://github.com/amytrick/" target="_blank">
                  <FaGithub />
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/amy-trick/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </p>
            </div>
          </IconContext.Provider>
        </Col>
      </Row>
    </Container>
  );
}
