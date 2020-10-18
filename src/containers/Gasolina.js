import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "../index.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Gasolina() {
  const { state } = useLocation();
  const [resultados, setResultados] = useState({});

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("http://localhost:5000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    })
      .then((res) => res.json())
      .then((data) => {
        //setUsername(data.name);
        setResultados(data);
        console.log("Resultados", resultados);
      });
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
                <Button className="btnGeneral blue" onClick={handleSubmit}>
                  Calcular
                </Button>
                <Link
                  to={{
                    pathname: "/resultados",
                    state: {
                      CO2EquivalenteAnual: resultados.CO2EquivalenteAnual,
                      PorcentajeAgua: resultados.PorcentajeAgua,
                      PorcentajeElectricidad: resultados.PorcentajeElectricidad,
                      PorcentajeGas: resultados.PorcentajeGas,
                      PorcentajeGasolina: resultados.PorcentajeGasolina,
                    },
                  }}
                >
                  <Button>Ver resultados</Button>
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
