import styled from "styled-components";

export const Wrap = styled.div`
  width: 30%;
  height: 75px;
  padding: 10px;
  background: #e0e0e0;
  color: #616161;
  position: absolute;
  right: 50px;
  bottom: 50px;
  border-radius: 10px;
  box-shadow: 10px 10px 15px #808080;
`;

export const Header = styled.header`
  display: flex;
  justify-content: end;
`;

export const Main = styled.main`
  display: flex;
  justify-content: start;
  align-items: center;
  grid-gap: 5px;
`;

export const Button = styled.button.attrs({ type: "button" })`
  background: transparent;
  color: #808080;
  border: none;
  border: 1px solid transparent;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 1px solid #dc143c;
    background: #dc143c;
    color: #ffffff;
    cursor: pointer;
  }
`;
