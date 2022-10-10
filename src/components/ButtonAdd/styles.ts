import styled from "styled-components";

export const Wrap = styled.button.attrs({ type: "button" })`
  width: 150px;
  border: 2px solid #ffffff;
  background: #0074d9;
  color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;

  &:hover {
    border: 2px solid #0074d9;
    background: #ffffff;
    color: #0074d9;
    cursor: pointer;
    transition: 0.5s;
  }
`;
