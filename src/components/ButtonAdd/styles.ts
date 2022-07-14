import styled from "styled-components";

export const Wrap = styled.button.attrs({ type: "button" })`
  border: 2px solid #ffffff;
  margin-right: 10px;
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
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
