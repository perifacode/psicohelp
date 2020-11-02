import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: 100%;
    max-width: 500px;
    display: flex;
    padding: 15px;
    flex-direction: column;
  }

  p {
    text-align: left;
    width: 100%;
    display: flex;
    font-family: Fredoka One;
    font-size: 24px;
    line-height: 29px;
    color: #fc8686;
  }

  textarea {
    resize: none;
    border: 2px #fc8686 solid;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
  }

  label {
    color: #cccccc;
    text-align: left;
    width: 100%;
    display: flex;
    margin: 10px 0;
  }

  input {
    border-bottom: 2px #fc8686 solid;
    height: 35px;
    width: 100%;
    margin: 5px 0;
    ::placeholder {
      color: #cccccc;
    }
  }

  @media (max-width: 600px) {
    form {
      width: 350px;
    }
  }
`;
export const ButtaoCadastrar = styled.button`
  width: 179px;
  height: 47px;
  background: #fc8686;
  border-radius: 20px;
  color: #fff;
  transition: background-color 0.2s;
  :hover {
    background: #f74f4f;
  }
`;
export const ContainerDuasColunas = styled.div`
  display: flex;
  .cidade {
    width: 100%;
    margin-right: 20px;
  }
  .uf {
    width: 50%;
    margin-left: 20px;
  }
`;
export const Logo = styled.img`
  height: 97px;
  align-self: flex-start;
`;
