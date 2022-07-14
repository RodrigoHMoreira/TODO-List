import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 120px;
  margin-left: 10px;

  @media only screen and (min-width: 768px) {
    margin-top: 130px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 48px;
    margin-top: 140px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 52px;
    margin-top: 150px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Tittle = styled.h2`
  color: #474a51;
  text-align: justify;
  display: flex;
  font-size: 20px;
  align-items: center;
  grid-gap: 10px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 28px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const Table = styled.table`
  background: transparent;
  width: 100%;
  padding: 10px;
  color: #474a51;
  font-size: 12px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 17px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const Tr = styled.tr`
  #center {
    text-align: center;
  }
`;

export const Th = styled.th`
  background: #d3d3d3;
  padding: 10px;
  border-radius: 3px;
`;

export const Td = styled.td`
  background: transparent;
  border-bottom: 1px dotted #9e9e9e;
  padding: 5px;
  margin-left: 5px;
`;

export const Background = styled.body`
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;
