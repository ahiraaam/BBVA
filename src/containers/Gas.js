import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "../index.css";
import { Link, useLocation } from "react-router-dom";

function Gas() {
  const { state } = useLocation();

  const [datos, setDatos] = useState({
    agua: state.aguaValor,
    electricidad: state.electricidadValor,
    gas: 0,
  });
  console.log(("Datos Gas", datos));

  const handleChange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Container fluid className="green text-center">
        <Row className="contPreguntas">
          <Col xs={12} md={6} className="left">
            <Row className="centerText">
              <h1 className="colorBlue">GAS</h1>
            </Row>
            <Row className="centerText">
              {" "}
              <img
                className="img-inputs"
                alt="agua"
                src={require("../images/gas.png")}
              ></img>
            </Row>
          </Col>
          <Col
            xs={12}
            md={6}
            style={{ justifyContent: "center" }}
            className="rightBlue"
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
                  color: "white",
                }}
              >
                Aproximadamente ¿Cuánto gastas mensualmente en gas?
              </p>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Form>
                <Form.Control
                  size="lg"
                  placeholder="$10000"
                  type="number"
                  className="inputAlone"
                  name="gas"
                  onChange={handleChange}
                ></Form.Control>
                <Link
                  to={{
                    pathname: "/gasolina",
                    state: {
                      aguaValor: datos.agua,
                      electricidadValor: datos.electricidad,
                      gasValor: datos.gas,
                    },
                  }}
                >
                  <Button className="btnGeneral green">Siguiente</Button>
                </Link>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gas;
