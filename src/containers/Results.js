import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "../index.css";
import { Link, useLocation } from "react-router-dom";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactSpeedometer from "react-d3-speedometer";
import { Transition } from "react-d3-speedometer";
function Results() {
  const { state } = useLocation();
  const [datos, setDatos] = useState({
    c02: state.CO2EquivalenteAnual,
    agua: state.PorcentajeAgua,
    electricidad: state.PorcentajeElectricidad,
    gas: state.PorcentajeGas,
    gasolina: state.PorcentajeGasolina,
  });
  console.log("Datos Result", datos);
  console.log("Datos Result", datos.agua);
  const percentageAgua = datos.agua;
  const percentageElec = datos.electricidad;
  const percentageGas = datos.gas;
  const percentageGasolina = datos.gasolina;

  return (
    <div>
      <Container fluid className="text-center white">
        <Row style={{ height: "44vh" }}>
          <Col xs={12} md={6} style={{ marginTop: "10vh" }}>
            <h1>Tu impacto de C02 es de : </h1>
            <h1 className="toneladasText" style={{ marginTop: "5vh" }}>
              {datos.c02} Toneladas
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <div
              style={{
                width: "45vw !important",
                height: "50vh",
              }}
            >
              <ReactSpeedometer
                fluidWidth="true"
                maxValue={300}
                value={datos.c02}
                startColor="green"
                segments={5}
                endColor="red"
                segmentColors={[
                  "#00ff19",
                  "#8fff00",
                  "#fff000",
                  "#ff9c00",
                  "#ff1e00",
                ]}
                currentValueText="Niveles de C02"
                needleTransitionDuration={6000}
                needleTransition="easeElastic"
                className="graficaC02"
              />
            </div>
          </Col>
        </Row>
        <Row style={{ height: "45vh" }}>
          <Col md={3}>
            <CircularProgressbarWithChildren
              value={percentageAgua}
              styles={buildStyles({
                pathColor: "blue",
              })}
            >
              <img
                style={{ width: 100 }}
                src={require("../images/water.png")}
                alt="doge"
              />

              <div style={{ fontSize: "1.5rem" }}>
                <strong>{percentageAgua}%</strong> Agua
              </div>
            </CircularProgressbarWithChildren>
          </Col>
          <Col md={3}>
            <CircularProgressbarWithChildren
              value={percentageElec}
              styles={buildStyles({
                pathColor: "#fdf070",
              })}
            >
              <img
                style={{ width: 90 }}
                src={require("../images/electricidad.png")}
                alt="doge"
              />

              <div style={{ fontSize: "1.5rem" }}>
                <strong>{percentageElec}%</strong> Electricidad
              </div>
            </CircularProgressbarWithChildren>
          </Col>
          <Col md={3}>
            <CircularProgressbarWithChildren
              value={percentageGas}
              styles={buildStyles({
                pathColor: "orange",
              })}
            >
              <img
                style={{ width: 90 }}
                src={require("../images/gas.png")}
                alt="doge"
              />

              <div style={{ fontSize: "1.5rem" }}>
                <strong>{percentageGas}%</strong> Gas
              </div>
            </CircularProgressbarWithChildren>
          </Col>
          <Col md={3}>
            <CircularProgressbarWithChildren
              value={percentageGasolina}
              styles={buildStyles({
                pathColor: "green",
              })}
            >
              <img
                style={{ width: 90 }}
                src={require("../images/Gasolina.png")}
                alt="doge"
              />

              <div style={{ fontSize: "1.5rem" }}>
                <strong>{percentageGasolina}%</strong> Gasolina
              </div>
            </CircularProgressbarWithChildren>
          </Col>
        </Row>
        <Row className="centerText" style={{ height: "10vh" }}>
          <Link to="recomendaciones">
            <Button style={{ padding: "2vw" }}>VER RECOMENDACIONES → </Button>
          </Link>
        </Row>
        <Row className="centerText" style={{ height: "1vh" }}></Row>
      </Container>
    </div>
  );
}

export default Results;
