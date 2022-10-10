import styled from "styled-components";

export const Wrap = styled.button.attrs({ type: "button" })`
  width: 115px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid #696969;
  background: #e0e0e0;
  color: #696969;

  &:hover {
    border: 1px solid #696969;
    background: #696969;
    color: #e0e0e0;
    cursor: pointer;
    transition: 0.2s;
  }
`;