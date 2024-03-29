import styled from "styled-components";

export const Wrap = styled.div`
  header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #474a51;
      font-size: 30px;
    }

    #btn-desktop {
      display: flex;
    }

    #btn-mobile {
      display: none;
      align-items: center;
      justify-content: center;

      button {
        display: flex;
        border: none;
        background: transparent;
        background: #0074d9;
        border-radius: 50%;
        padding: 15px;
        color: #ffffff;
        transition: 0.2s;
        font-weight: bold;

        &:hover {
          cursor: pointer;
        }
      }
    }

    @media screen and (max-width: 767px) {
      grid-gap: 10px;

      #btn-mobile {
        display: flex;
      }

      #btn-desktop {
        display: none;
      }
    }
  }

  div {
    padding: 10px;

    table {
      width: 100%;
      border: 1px solid transparent;
      border-collapse: collapse;

      #link {
        cursor: pointer;
        transition: 0.2s;
        background: transparent;
        padding: 5px;
        border-radius: 50%;
        color: #474a51;
        border: 1px solid transparent;

        &:hover {
          background: #0074d9;
          border: 1px solid #0074d9;
          color: #ffffff;
        }
      }

      th {
        background: #d3d3d3;
        text-align: start;
        padding: 10px;

        &:first-child, :last-child {
          width: 100px;
          text-align: center;
        }
      }

      td {
        padding: 5px;
        border-bottom: 1px dotted #474a51;

        div {
          display: flex;
          grid-gap: 10px;
        }
      }

      @media screen and (max-width: 767px) {
        th {
          display: none;
        }

        td {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:last-child {
          justify-content: center;
        }
        }

        td::before {
        content: attr(data-label);
        font-weight: bold;
      }
      }
    }
  }
`;

export const Background = styled.body`
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0px;
  top: 0;
  z-index: 10;
`;
