import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 100px;

  @media only screen and (min-width: 768px) {
    margin-top: 110px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 48px;
    margin-top: 120px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 52px;
    margin-top: 125px;
  }
`;

export const Head = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tittle = styled.h2`
  color: #474a51;
  text-align: justify;
  display: flex;
  font-size: 20px;
  align-items: center;

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

export const TableWrap = styled.div`
  background: transparent;
  padding: 10px;
  font-size: 12px;
  display: flex;
  flex-direction: column;

  #link {
    color: #474a51;
    padding: 5px;
    border-bottom: 1px dotted #474a51;
    text-decoration: none;

    &:hover {
      background: #0074d9;
      color: #ffffff;
    }
  }

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
