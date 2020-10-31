import styled from "styled-components";
const height = window.innerHeight;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: auto;

  header {
    width: 100%;
    padding: 15px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    height: auto;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  main {
    display: grid;
    grid-template-columns: 340px 340px 340px;
    gap: 120px 30px;
    padding-top: 100px;
    height: ${height};
    width: 100%;
    justify-content: center;
    padding-bottom: 50px;
  }

  @media (max-width: 768px) {
    main {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }
  }
`;

export const InputBuscar = styled.input`
  width: 612px;
  height: 61px;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin: 15px 0;
  padding: 30px;
  ::placeholder {
    color: #e5e5e5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  align-self: flex-start;
  width: 173px;
  height: 44px;
`;
