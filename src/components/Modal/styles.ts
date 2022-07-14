import styled from "styled-components";

export const Wrap = styled.div`
  width: 250px;
  height: 350px;
  padding: 5px;
  background: #e0e0e0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
  @media only screen and (min-width: 1024px) {
    width: 350px;
  }
  @media only screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Tittle = styled.h3`
  color: #474a51;
  font-size: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Main = styled.main`
  width: 90%;
  height: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Footer = styled.footer`
  width: 88%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const InputRadio = styled.input.attrs({ type: "checkbox" })``;
