import React, { useState, useEffect } from "react";
import { Container, BotaoBuscar, InputBuscar, Logo } from "./styled";
import logo from "../../assets/logo.svg";
import Card from "../../components/Card";
import axios from "axios";
import Modal from "../../components/Modal";

export default function Pesquisar() {
  const [psicologos, setPsicologos] = useState([]);
  const [psicologo, setPsicologo] = useState({});
  const [modal, setModal] = useState(false);

  function buscarPsicologos() {
    axios
      .get("https://randomuser.me/api/?nat=br&results=13")
      .then((response) => {
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

  useEffect(() => {
    buscarPsicologos();
  }, []);
  return (
    <Container>
      <header>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Logo src={logo} />
          <InputBuscar placeholder="Digite seu endereço" />
        </div>
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
