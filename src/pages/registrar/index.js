import React, { useRef } from "react";
import {
  Container,
  ButtaoCadastrar,
  ContainerDuasColunas,
  Logo,
} from "./styled";
import logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import { Form } from "@unform/web";
import Select from "../../components/Select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function Registrar() {
  //hook de navegaçãos
  const history = useHistory();

  async function handleSubmit(data, { reset }) {
    try {
      //yup e uma ferramenta utilizada para validação dos campos de um formulario
      const schema = Yup.object().shape({
        nome: Yup.string().required("Informe o nome"),
        email: Yup.string()
          .email("Informe um e-mail válido")
          .required("Informe o email"),
        cidade: Yup.string().required("Informe sua cidade"),
        uf: Yup.string().required("Informe a UF"),
        descricao: Yup.string().required("Informe a descrição"),
        tipo_de_precificacao: Yup.string().required(
          "Informe o tipo de precificação"
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      //apresenta mensagem de sucesso
      toast.success("Cadastrado com sucesso");

      setTimeout(() => {
        //reseta valores do formulario
        reset();
        //navega para tela inicial
        history.push("/");
      }, 2000);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const mensagem = err.inner[0].message;
        //apresenta mensagem de erro, caso algum campo do
        //formulario não esteja conforme solicitado
        toast.error(mensagem);
      }
    }
  }

  const options = [
    { value: "gratuito", label: "Gratuito" },
    { value: "pago", label: "Pago" },
  ];

  return (
    <Container>
      <main>
        <Logo src={logo} />
        <p>Cadastrar um psicólogo</p>
        <Form onSubmit={handleSubmit}>
          <Input name="nome" placeholder="Nome completo" />
          <Input name="email" placeholder="Email" />
          <ContainerDuasColunas>
            <Input name="cidade" placeholder="Cidade" className="cidade" />
            <Input name="uf" placeholder="UF" className="uf" />
          </ContainerDuasColunas>
          <Input
            multiline
            name="descricao"
            label="Descricão do serviço"
            rows="6"
          />
          <Select
            name="tipo_de_precificacao"
            label="Tipo de precificação"
            options={options}
          />
          <ButtaoCadastrar type="submit">Cadastrar</ButtaoCadastrar>
        </Form>
      </main>
      <ToastContainer />
    </Container>
  );
}
