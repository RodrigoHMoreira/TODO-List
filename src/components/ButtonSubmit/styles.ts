import styled from "styled-components";

export const Wrap = styled.button.attrs({ type: "button" })`
  width: 115px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid #0074d9;
  background: #0074d9;
  color: #e0e0e0;
  transition: 0.2s;

  &:hover {
    border: 1px solid #0074d9;
    background: #e0e0e0;
    color: #0074d9;
    cursor: pointer;
  
  }
`;
