import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const ModalStyle = styled.div`
.ant-modal{
  width:885px !important;

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
        .genDiv{
          z-index:18;
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
  .countDiv span {
    margin: 0.5em;
    font-size:large;
  }
  .weight{
    margin-bottom:8px;
  }

  .ant-col {
    .pDiv {
      width:115%;
      box-shadow: 0 0 10px rgb(0 0 0 / 20%);
      background-color: #fff;
      border-radius: 1em;
      padding: 1.5em;
      margin: 1em;
      .tDiv .flex {
        display: flex;
        align-items: center;
        h2 {
          margin-bottom: 0;
        }
        .selectDiv {
          margin-left: 1em;
          min-width: 14em;
          margin-bottom: 10px;
        }
      }
      .tableDIv .tHead{
        background: #ededed;
        color: #727171;
        padding: 0.5em 0;
        text-align:center;
      }
    }
  }
  .btnDiv{
    width: 2em;
    height: 2em;
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    background: ${Theme.mainColor};
    stroke: #fff;
    stroke-width: 5em;
    font-size: 1.2em;
    border-radius: 50%;
  }
`;
export { ModalStyle };
