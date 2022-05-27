import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const ModalStyle = styled.div`

  .ant-modal-content {
    border-radius: 10px !important;
    @media ${size["tablet-sm-max"]} {
      margin: 5%;
    }
    .ant-modal-header {
      border-radius: 10px;
    }
    .ant-modal-body {
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
      }
      .bottomDiv {
        display: flex;
        margin-top: 2em;
        .btn {
          margin-left: auto;
          button:first-child {
            margin-right: 2em;
          }
        }
      }
    }
  }
}

`;
export { ModalStyle };
