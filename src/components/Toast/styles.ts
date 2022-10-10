import styled from "styled-components";

export const Wrap = styled.div`
  width: 300px;
  padding: 10px;
  background: #e0e0e0;
  color: #616161;
  position: absolute;
  right: 5%;
  bottom: 5vh;
  border-radius: 10px;
  box-shadow: 10px 10px 15px #808080;

  main {
    height: 75px;
    display: flex;
    justify-content: start;
    align-items: center;
    grid-gap: 5px;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    right: 37px;
    bottom: 20px;
  }
`;
