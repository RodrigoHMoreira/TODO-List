import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      &:not(:last-child) {
        width: 400px;
        height: 350px;
        padding: 0 10px 0 0;
      }
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;

      img {
        &:not(:last-child) {
          display: none;
        }
      }
    }
  }
`;
