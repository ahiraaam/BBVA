import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "../index.css";
import { Link, useLocation } from "react-router-dom";

function Gasolina() {
  const { state } = useLocation();

  const [datos, setDatos] = useState({
    agua: state.aguaValor,
    electricidad: state.electricidadValor,
    gas: state.gasValor,
    gasolina: 0,
  });

  console.log(("Datos Gasolina", datos));
  const handleChange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };
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
                  name="gasolina"
                  onChange={handleChange}
                ></Form.Control>
                <Link to="/">
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
