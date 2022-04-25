import styled from "styled-components";
const StyleContainer = styled.div`
  .rowDiv {
    padding: 5em 0 1em;
    margin-right: 0 !important;
    .ant-col {
      .pDiv {
        box-shadow: 0 0 10px rgb(0 0 0 / 20%);
        background-color: #fff;
        border-radius: 1em;
        padding: 1.5em;
        margin: 1em;
        .tDiv {
          display: flex;
          align-items: center;
          margin-bottom: 1em;
          h2 {
            margin-bottom: 0;
          }
          .fieldDiv {
            display: flex;
            align-items: center;
            margin-left: auto;
            .laebl {
              font-size: 16px;
            }
            .selctDiv {
              margin-left: 10px;
              min-width: 13em;
            }
          }
        }
      }
    }
  }
`;
export { StyleContainer };
