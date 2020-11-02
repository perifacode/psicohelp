import React from "react";
import { Container } from "./styled";

export default function Card({ imagemUrl, nome, plano, endereco, ...rest }) {
  return (
    <Container {...rest} type="button">
      <img src={imagemUrl} alt="pessoa" />
      <h2>{nome}</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
      <footer>
        <h3>{plano}</h3>
        <h4>{endereco}</h4>
      </footer>
    </Container>
  );
}
