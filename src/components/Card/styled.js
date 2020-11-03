import styled from "styled-components";

export const Container = styled.button`
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  position: relative;

  img {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 180px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    max-height: 128px;
    max-width: 128px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50%;
  }

  h2 {
    margin-top: 50px;
    font-size: 16px;
    line-height: 19px;
    color: #0f4c81;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
    line-height: 14px;
    color: #7c7c7c;
  }

  footer {
    display: flex;
    justify-content: space-between;
    padding: 0 5px 0 5px;
    margin-top: 10px;
    h3 {
      font-size: 12px;
      line-height: 14px;
      color: #5ab414;
    }
    h4 {
      font-size: 12px;
      line-height: 14px;
      color: #333333;
    }
  }

  @media (max-width: 768px) {
    img {
      bottom: 200px;
    }
  }
`;
