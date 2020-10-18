import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Card, Button, CardDeck } from "react-bootstrap";
import "../index.css";
import axios from "axios";
import ReactSpeedometer from "react-d3-speedometer";

const Recomendaciones = () => {
  const [advices, setAdvices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/recomendaciones");
      console.log(result.data);
      setAdvices(result.data);
    };
    fetchData();
  }, []);

  console.log(advices);
  return (
    <Container fluid style={{ backgroundColor: "white" }}>
      <Row className="header2 center">
        <h1 style={{ fontWeight: "900" }}>Recomendaciones</h1>
      </Row>

      <Row className="cont2">
        <CardDeck>
          <Card className="justifyCenter" id="cardAgua">
            <Card.Img
              variant="top"
              src={require("../images/water.png")}
              className="imgCardRec"
            />
            <Card.Body>
              <Card.Title>Agua</Card.Title>
              <Card.Text>{advices.consejo_electricidad}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="justifyCenter">
            <Card.Img
              variant="top"
              src={require("../images/electricidad.png")}
              className="imgCardRec"
            />
            <Card.Body>
              <Card.Title>Electricidad</Card.Title>
              <Card.Text>{advices.consejo_agua}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="justifyCenter">
            <Card.Img
              variant="top"
              src={require("../images/Gasolina.png")}
              className="imgCardRec"
            />
            <Card.Body>
              <Card.Title>Gasolina</Card.Title>
              <Card.Text>{advices.consejo_gasolina}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="justifyCenter">
            <Card.Img
              variant="top"
              src={require("../images/gas.png")}
              className="imgCardRec"
            />
            <Card.Body>
              <Card.Title>Gas</Card.Title>
              <Card.Text>{advices.consejo_gas}</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Row>
      <Row style={{ height: "44vh" }}>
        <Col xs={12} md={6} style={{ marginTop: "10vh" }}>
          <h1>
            Con las recomendaciones podrías reducir tu impacto de C02 a :{" "}
          </h1>
          <h1 className="toneladasText" style={{ marginTop: "5vh" }}>
            {advices.CO2_nuevo} Toneladas
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
              value={advices.CO2_nuevo}
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
      <Row className="center">
        <a href="https://www.bbvacuponera.mx/detail/8">
          <Button style={{ padding: "2vw" }}>MAS INFORMACIÓN → </Button>
        </a>
      </Row>
    </Container>
  );
};

export default Recomendaciones;
