import React from "react";
import Inicio from "./pages/inicio";
import Registrar from "./pages/registrar";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
