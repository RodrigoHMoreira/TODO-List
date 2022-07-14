import styled from "styled-components";

export const Wrap = styled.button.attrs({ type: "button" })`
  width: 75px;
  font-size: 14px;
  border-radius: 7px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #696969;
  background: #e0e0e0;
  color: #696969;
  &:hover {
    border: 2px solid #696969;
    background: #696969;
    color: #e0e0e0;
    cursor: pointer;
    transition: 0.5s;
  }
`;