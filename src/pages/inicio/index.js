import React from "react";
import { Container, BotaoBuscar, InputBuscar, BotaoRegistrar } from "./styled";
import { ReactComponent as Logo } from "../../assets/logo.svg";
export default function Inicio() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 612,
          width: "100%",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Logo />
        <InputBuscar placeholder="Digite seu endereço" />
        <BotaoBuscar href="/pesquisar">Pesquisar</BotaoBuscar>
        <BotaoRegistrar href="/registrar">
          Quero cadastrar um novo profissional
        </BotaoRegistrar>
      </div>
    </Container>
  );
}
