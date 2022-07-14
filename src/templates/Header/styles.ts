import styled from "styled-components";

export const Wrap = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #808080;
  display: flex;
  align-items: center;
  justify-content: end;
  position: fixed;
  top: 0px;
  z-index: 9;

  @media only screen and (min-width: 768px) {
    height: 110px;
  }

  @media only screen and (min-width: 1024px) {
    height: 120px;
  }

  @media only screen and (min-width: 1440px) {
    height: 130px;
  }
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 20px;

  @media only screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media only screen and (min-width: 1024px) {
    width: 170px;
    height: 170px;
  }

  @media only screen and (min-width: 1440px) {
    width: 200px;
    height: 200px;
  }
`;
