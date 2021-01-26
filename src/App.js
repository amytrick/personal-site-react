import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import About from "./about";
import Works from "./works";
import Contact from "./contact";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hello = () => {
  return (
    <Container fluid>
      <Row id="colorblock-row">
        <Col>
          <div id="colorblock">
            <div id="hello">
              <h1>
                <p>HE</p>
                <p>LLO.</p>
              </h1>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <h1>HI.</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default function App() {
  return (
    <Container fluid id="container">
      <Row id="homepage-row">
        <Router>
          <Col xs={1} className="d-flex align-items-center">
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
          <Col xs={10}>
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
        <Col xs={1}>This column is 1</Col>
      </Row>
    </Container>
  );
}
