import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import LandingPage from "./containers/LandingPage";
import Agua from "./containers/Agua";
import Electricidad from "./containers/Electricidad";
import Gasolina from "./containers/Gasolina";
import Gas from "./containers/Gas";
import Login from "./containers/Login";
import Results from "./containers/Results";
import Recomendaciones from "./containers/Recomendaciones";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/agua" exact>
          <Agua />
        </Route>
        <Route path="/electricidad" exact>
          <Electricidad></Electricidad>
        </Route>
        <Route path="/gas" exact>
          <Gas></Gas>
        </Route>
        <Route path="/gasolina" exact>
          <Gasolina></Gasolina>
        </Route>
        <Route path="/resultados" exact>
          <Results></Results>
        </Route>
        <Route path="/recomendaciones" exact>
          <Recomendaciones></Recomendaciones>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
