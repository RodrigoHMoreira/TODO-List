import styled from "styled-components";

export const WrapForm = styled.div`
  form {
    width: 275px;
    height: 325px;
    background: #d3d3d3;
    color: #474a51;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    header {
      padding: 5px 0 0 0;
      width: 90%;
      height: 75px;
      display: flex;
      justify-content: center;
      border-bottom: 2px solid #474a51;

      img {
        width: 200px;
        height: 58px;
      }
    }

    main,
    footer {
      padding: 0 0 5px 0;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;

      label {
        width: 100%;
        padding: 10px 0 5px 0;
        font-weight: bold;
      }

      input {
        width: 92%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid transparent;
        transition: 0.2s;

        &:hover {
          border: 1px solid #0074d9;
        }
      }
    }

    button {
      background: #0074d9;
      color: #ffffff;
      width: 100%;
      padding: 10px;
      margin: 20px 0 10px 0;
      border-radius: 5px;
      border: 1px solid transparent;
      font-weight: bold;
      transition: 0.2s;

      &:hover {
        border: 1px solid #0074d9;
        background: #e0e0e0;
        color: #0074d9;
        cursor: pointer;
      }
    }

    p {
      font-size: 12px;
      a {
        text-decoration: underline;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          color: #0074d9;
        }
      }
    }

    @media screen and (max-width: 767px) {
      position: absolute;
      top: 0px;
      right:0px;
      width: 100%;
      height: 100vh;
      border-radius: 0;
      justify-content: center;

      header {
        height: 100px;

        img {
          width:250px;
          height: 75px;
        }
      }
    }
  }
`;
