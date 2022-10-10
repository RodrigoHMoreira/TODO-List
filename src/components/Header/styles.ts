import styled from "styled-components";

export const Wrap = styled.div`
  background: #ffffff;
  height: 100px;
  width: cal(100% - 20px);
  padding: 0 10px;
  border-bottom: 1px solid #808080;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 175px;
    height: 50px;
    margin-right: 20px;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #808080;
    font-weight: bold;
    cursor: pointer;
  }
`;