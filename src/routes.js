import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./pages/inicio";
import Pesquisar from "./pages/pesquisar";
import Registrar from "./pages/registrar";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Inicio} exact />
        <Route path="/registrar" component={Registrar} />
        <Route path="/pesquisar" component={Pesquisar} />
      </Switch>
    </Router>
  );
}
