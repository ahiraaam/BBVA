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
} from "react-bootstrap";
import "./index.css";

function App() {
  return (
    <Container fluid className="green">
      <Row className="header">
        <Col xs={11}>{""}</Col>
        <Col xs={1} className="centrador">
          <img className="imagen" src={require("./images/logoArriba.png")} />
        </Col>
      </Row>
      <Row className="cont">
        <Col xs={12} md={6}>
          <Row className="centerText">
            <h1>Calcula tu huella de carbono</h1>
          </Row>
          <Row className="centerText">
            <p>
              Descripcion sobre la importancia de calcular la huella de
              carbono,etc
            </p>
          </Row>
          <Row className="centerText">
            {" "}
            <img
              className="img-grande"
              src={require("./images/Huella.png")}
            ></img>
          </Row>
        </Col>
        <Col xs={12} md={6} style={{ justifyContent: "center" }}>
          <CardDeck>
            <Card
              className="text-center cardPersonalized"
              style={{
                width: "100%",
                marginTop: "10vh",
                justifyContent: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={require("./images/bbva.png")}
                style={{ height: "30vh" }}
              />
              <Card.Body>
                <Card.Title>Clientes BBVA</Card.Title>
                <Card.Text>
                  Si eres cliente BBVA calcula tu huella de carbono a través de
                  tu historial de consumo.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button className="btnGeneral blue" variant="primary">
                  Calcular
                </Button>
              </Card.Footer>
            </Card>
            <Card
              className="text-center cardPersonalized"
              style={{
                width: "100%",
                marginTop: "10vh",
                justifyContent: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={require("./images/bbva.png")}
                style={{ height: "30vh" }}
              />
              <Card.Body>
                <Card.Title>Clientes Externos</Card.Title>
                <Card.Text>
                  Si no eres cliente BBVA calcula tu huella de carbono
                  ingresando la información sobre tus gastos mensuales.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "white !important" }}>
                <Button className="btnGeneral green">Calcular</Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
