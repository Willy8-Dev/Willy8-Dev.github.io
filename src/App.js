import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Border from "./components/content/Border";
import Main from "./components/content/Main";

function App() {
  return (
    <div>
      <Layout />
      <h1>Welcome to Willy8-Dev´s Github</h1>
      <Container>
        <Row>
          <Col className="content" sm={8}>
            <Main />
          </Col>
          <Col sm={1}></Col>
          <Col className="content" sm={3}>
            <Border />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
