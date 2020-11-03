import React from "react";
import { Container, Contato, Plano, Descricao, NomePsicologo } from "./styled";
import MaterialModal from "@material-ui/core/Modal";

/**
 * Componente modal que renderiza um psicologo selecionado pelo usuário
 *
 * @param {*} psicologo - objeto contendo os dados do psicologo
 * @param {*} abrir - flag com status do modal
 * @param {*} fecharModal - função que fecha o modal
 */
export default function Modal({ psicologo, abrir, fecharModal }) {
  return (
    <MaterialModal
      open={abrir}
      onClose={fecharModal}
      style={{ background: "rgba(55, 55, 55, 0.78)" }}
    >
      <Container>
        <main>
          <header>
            <img src={psicologo.picture.large} alt="pessoa" />
            <Plano>Gratuito</Plano>
            <NomePsicologo>{psicologo.name.first}</NomePsicologo>
            <Descricao>33 anos | Rio de Janeiro</Descricao>
          </header>
          <article>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </article>
          <span>Rua Lorem, 1082</span>
          <footer>
            <Contato>Contato</Contato>
            <h4>(11) 96276-8066</h4>
            <h4>david.santos-09@hotmail.com</h4>
          </footer>
        </main>
      </Container>
    </MaterialModal>
  );
}
