import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  Row,
  Image,
  Card,
  Button,
  CardDeck,
  Form,
} from "react-bootstrap";
import "../index.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container fluid>
      <Row styled={{ height: "30vh" }}>
        <Col xs={6}>
          {""}
          <img
            className="img-mediana"
            src={require("../images/Huella.png")}
          ></img>
        </Col>
        <Col xs={6} className="justify-content-end">
          <img
            className="img-mediana imgbbva"
            src={require("../images/bbvaLogo.png")}
          />
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={6}>
          <Row className="centerTextSign">
            <h1>¡Hola!</h1>
          </Row>
          <Row className="centerTextInput">
            <Form>
              <Form.Control
                size="lg"
                placeholder="Numero de celular"
                type="number"
                className="inputSign"
                name="celular"
              ></Form.Control>
            </Form>
          </Row>
          <Row className="centerTextInput">
            <Form>
              <Form.Control
                size="lg"
                placeholder="Contraseña"
                type="password"
                className="inputSign"
                name="celular"
              ></Form.Control>
            </Form>
          </Row>
          <Row className="centerTextInput">
            {" "}
            <Link
              to={{
                pathname: "/resultados",
                state: {
                  CO2EquivalenteAnual: 29,
                  PorcentajeAgua: 32.23,
                  PorcentajeElectricidad: 23.4,
                  PorcentajeGas: 18.6,
                  PorcentajeGasolina: 25.77,
                },
              }}
            >
              <Button className="btnIngresar blue">Ingresa con BBVA</Button>
            </Link>
          </Row>
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  );
}

export default Login;
