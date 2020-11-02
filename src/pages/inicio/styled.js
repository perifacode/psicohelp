import styled from "styled-components";

const width = window.innerWidth;
const height = window.innerHeight;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
`;
export const BotaoBuscar = styled.a`
  background: #0f4c81;
  border-radius: 30px;
  width: 224px;
  height: 55px;
  color: #fff;
  font-size: 20px;
  line-height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  :hover {
    background: #2065a1;
  }
`;
export const BotaoRegistrar = styled.a`
  font-size: 20px;
  line-height: 33px;
  color: #8e8e8e;
  margin-top: 20px;
`;
export const InputBuscar = styled.input`
  width: 612px;
  height: 61px;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin: 23px 0;
  padding: 30px;
  ::placeholder {
    color: #e5e5e5;
  }
`;
