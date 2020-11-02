import React from "react";
import { Container, BotaoBuscar, InputBuscar, BotaoRegistrar } from "./styled";
import { ReactComponent as Logo } from "../../assets/logo.svg";
export default function Inicio() {
  return (
    <Container>
      <Logo />
      <InputBuscar placeholder="Digite seu endereço" />
      <BotaoBuscar href="/pesquisar">Pesquisar</BotaoBuscar>
      <BotaoRegistrar href="/registrar">
        Quero cadastrar um novo profissional
      </BotaoRegistrar>
    </Container>
  );
}
