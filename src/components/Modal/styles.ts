import styled from "styled-components";

export const Wrap = styled.div`
  width: 300px;
  background: #e0e0e0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #474a51;
    padding: 10px 0 0 20px;
  }

  main {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
  }

  footer {
    width: 88%;
    margin-top: 20px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
`;
