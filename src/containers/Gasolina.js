import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "../index.css";
import { Link } from "react-router-dom";

function Gasolina() {
  return (
    <div>
      <Container fluid className="green text-center">
        <Row className="contPreguntas">
          <Col xs={12} md={6} className="left">
            <Row className="centerText">
              <h1 className="colorGreen">GASOLINA</h1>
            </Row>
            <Row className="centerText">
              {" "}
              <img
                className="img-inputs"
                alt="agua"
                src={require("../images/Gasolina.png")}
              ></img>
            </Row>
          </Col>
          <Col
            xs={12}
            md={6}
            style={{ justifyContent: "center" }}
            className="right"
          >
            <Row>
              <p
                style={{
                  paddingTop: "20vh",
                  paddingBottom: "5vh",
                  paddingLeft: "5vw",
                  paddingRight: "5vw",
                  fontSize: "2.4rem",
                  fontWeight: "normal",
                }}
              >
                Aproximadamente ¿Cuánto gastas mensualmente en gasolina?
              </p>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Form>
                <Form.Control
                  size="lg"
                  placeholder="$10000"
                  type="number"
                  className="inputAlone"
                  name="agua"
                ></Form.Control>
                <Link>
                  <Button className="btnGeneral blue">Siguiente</Button>
                </Link>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gasolina;
