import styled from "styled-components";

const AppraisalStyle = styled.div`
  .maincontainer {
    padding: 5em 0 1em;
    margin-right: 0 !important;
    .detailDiv {
      width: 100%;
      padding: 1em;
      .topDiv {
        display: flex;
        align-items: center;
        margin-bottom: 1em;
        h2 {
          margin-bottom: 0;
        }
        button {
          margin-top: 0;
          margin-left: auto;
        }
      }
      .formDiv,
      .goalMain {
        .flex {
          display: flex;
          align-items: center;
          h3 {
            margin-bottom: 0;
          }
          .selectDiv {
            margin-left: 1em;
            min-width: 14em;
            margin-bottom: 10px;
          }
        }
        box-shadow: 0 0 10px rgb(0 0 0 / 20%);
        border-radius: 1em;
        padding: 1.5em;
        margin-bottom: 1.5em;
        .ant-row .ant-col {
          .feildDiv {
            margin-bottom: 1em;
            .label {
              margin-bottom: 0.5em;
            }
            .input {
              border-bottom: none;
              background: #f4f5f6;
              padding: 5px 5px;
            }
            textarea {
              border: none;
            }
            .ant-select-selector {
              background-color: #f4f5f6;
              border: none;
            }
          }
        }
        h3 {
          font-weight: bold;
        }
        .actionUI {
          text-align: center;
        }
        .tableDIv .tHead{
          background: #ededed;
          color: #727171;
          padding: 0.5em 0;
          text-align:center;
        }
      }
    }
  }
`;
export { AppraisalStyle };
