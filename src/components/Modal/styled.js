import styled from "styled-components";
const width = window.innerWidth;
const height = window.innerHeight;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    max-width: 750px;
    height: 100%;
    max-height: 400px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 20px;
    justify-content: flex-end;
  }

  p {
    text-align: left;
    margin-bottom: 10px;
    color: #7c7c7c;
  }

  img {
    position: absolute;
    max-width: 200px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 300px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
  }

  span {
    font-weight: 600;
    line-height: 17px;
    color: #333333;
    align-self: flex-start;
  }

  footer {
    margin-top: 10px;
    align-self: flex-start;
    text-align: left;

    h4 {
      margin: 5px 0 5px 0;
      color: #7c7c7c;
    }
  }

  @media (max-width: 768px) {
    padding: 0 10px 0 10px;

    img {
      max-width: 100px;
      bottom: 350px;
    }
  }
`;

export const Contato = styled.h2`
  font-family: Fredoka One;
  font-size: 16px;
  line-height: 19px;
  color: #fc8686;
`;
export const Plano = styled.h3`
  font-size: 18px;
  line-height: 21px;
  color: #5ab414;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
`;
export const NomePsicologo = styled.h1`
  font-size: 36px;
  line-height: 43px;
  color: #0f4c81;
`;
export const Descricao = styled.h2`
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  font-weight: 600;
  margin-bottom: 10px;
`;
