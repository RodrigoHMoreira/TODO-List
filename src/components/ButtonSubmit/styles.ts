import styled from "styled-components";

export const Wrap = styled.button.attrs({ type: "button" })`
  width: 75px;
  font-size: 15px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #0074d9;
  background: #0074d9;
  color: #e0e0e0;
  &:hover {
    border: 2px solid #0074d9;
    background: #e0e0e0;
    color: #0074d9;
    cursor: pointer;
    transition: 0.5s;
  }
`;
