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
    <Container id="container">
      <Row id="colorblock-row">
        <Col>
          <div id="colorblock">
            <h1>
              <p>HE</p>
              <p>LLO.</p>
            </h1>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default function App() {
  return (
    <Router>
      <nav>
        {/* <ul> */}
        <p>
          <Link to="/about"> About </Link>
        </p>
        <p>
          <Link to="/works"> Works </Link>
        </p>
        <p>
          <Link to="/contact"> Contact </Link>
        </p>
        {/* </ul> */}
      </nav>
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
    </Router>
  );
}
