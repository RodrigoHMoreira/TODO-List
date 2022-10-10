import styled from "styled-components";

export const Wrap = styled.div`
  padding: 10px;
  color: #474a51;

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-gap: 10px;
    padding: 10px 0;
    margin: 75px 0 10px 0;

    section {
      text-align: end;
  

      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
      }

      h1 {
        font-size: 34px;
      }

      h2 {
        font-size: 24px;
      }

      p {
        padding: 10px 0;
      }

      a {
        width: 100%;
        text-decoration: none;
        color: #474a51;
        display: flex;
        align-items: center;
        justify-content: end;
        grid-gap: 10px;
        padding: 10px 0;
        transition: 0.2s;

        &:hover {
          color: #0074d9;
        }
      }
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;
      margin: 10px 0;


      section {
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
          justify-content: center;
        }
      }
    }
  }

  /* div {
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
        }

        td::before {
          content: attr(data-label);
          font-weight: bold;
        }
      }
    }
  } */
`;
