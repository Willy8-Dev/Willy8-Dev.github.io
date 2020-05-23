import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Layout from "./components/Layout"
import { Container, Row, Col } from "react-bootstrap"

function App() {
  return (
    <div>
      <Layout heading="Page of Willy8-Dev">
        <Container className="mt-5">
          <Row>
            <Col className="border-right border-dark" sm={4}>
              <div className="mb-4 text-center">
                <h4>Vorhandene Links</h4>
              </div>
              <div>
                <p><a href="https://safe-x.business" target="_blank">Safe-X</a></p>
                <p><a href="https://willy8-dev.github.io/pages/pages/shopping-list/" target="_blank">Einkaufsliste</a></p>
                <p><a href="https://willy8-dev.github.io/pages/safeShop/" target="_blank">Webshop</a></p>
                <p><a href="http://safe-x.business/pages/safeBoard/" target="_blank">SafeBoard</a></p>
                <p><a href="https://willy8-dev.github.io/pages/pages/html/" target="_blank">HTML Tutorial</a></p>
                <p><a href="https://willy8-dev.github.io/pages/pages/steckbrief/" target="_blank">Steckbrief</a></p>
                <p><a href="https://willy8-dev.github.io/pages/pages/Project/" target="_blank">iFrame Test</a></p>
              </div>
            </Col>
            <Col sm={8}>
              <div className="mb-4 text-center">
                <h4>Zusammenfassung</h4>
              </div>
              <div>
                <p className="lead">Über die Zeit der Ausbildung wurden mehrere Projekte angefangn.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}

export default App
