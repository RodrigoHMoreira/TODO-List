import styled from "styled-components";

export const Wrap = styled.button.attrs({ type: "button" })`
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