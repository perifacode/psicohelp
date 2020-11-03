import React, { useState, useEffect } from "react";
import { Container, InputBuscar, Logo, ContainerHeader } from "./styled";
import logo from "../../assets/logo.svg";
import Card from "../../components/Card";
import axios from "axios";
import Modal from "../../components/Modal";

export default function Pesquisar() {
  //hooks são funcoes que armazenam logicas que facilita a utilização
  //de determinadas lógicas

  //armazena a lista de psicologos
  const [psicologos, setPsicologos] = useState([]);

  //armazena o psicologo selecionado pelo usuário
  const [psicologo, setPsicologo] = useState({});

  //flag que armazena o estado do modal, `visivel` ou `oculto`
  const [modal, setModal] = useState(false);

  //funcao que busca os psicologos cadastrados
  //*utlizado dados fake, pois ainda não foi implementado o back-end*
  function buscarPsicologos() {
    axios
      .get("https://randomuser.me/api/?nat=br&results=13")
      .then((response) => {
        //seta a lista de psicologos dentro do array `psicologos`
        setPsicologos(response.data.results);
      });
  }

  function abrirModal(psicologo) {
    setModal(true);
    setPsicologo(psicologo);
  }

  function fecharModal() {
    setModal(false);
  }

  //hook executado todas as vezes que a tela e aberta
  useEffect(() => {
    buscarPsicologos();
  }, []);

  return (
    <Container>
      <header>
        <ContainerHeader>
          <Logo src={logo} />
          <InputBuscar placeholder="Digite seu endereço" />
        </ContainerHeader>
      </header>

      <main>
        {psicologos.map((psicologo) => {
          return (
            <Card
              imagemUrl={psicologo.picture.large}
              nome={psicologo.name.first}
              plano={"Gratuito"}
              endereco={"Rua Lorem,1082"}
              onClick={() => abrirModal(psicologo)}
            />
          );
        })}
      </main>
      {modal && (
        <Modal abrir={modal} fecharModal={fecharModal} psicologo={psicologo} />
      )}
    </Container>
  );
}
