import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const ReportStyle = styled.div`
  .rowDiv {
    padding: 5em 0 1em;
    margin-right: 0 !important;
    .ant-col .pDiv {
      box-shadow: 0 0 10px rgb(0 0 0 / 20%);
      background-color: #fff;
      border-radius: 1em;
      padding: 2em;
      margin: 1em 0;
      .silcMain {
        margin-bottom: 1em;
        .fieldDiv {
          display: flex;
          align-items: center;
          .label {
            font-size: 16px;
          }
          .selctDiv {
            margin-left: 10px;
            margin-bottom: 10px;
            min-width: 10em;
          }
          button {
            margin-top: 0;
          }
        }
      }
      .bacicInfo {
        margin-bottom: 1em;
        .mainText,
        .space {
          font-weight: bold;
        }
        .space {
          padding: 0 0.5em;
        }
      }
      .summDiv .summHead {
        background: #ededed;
        color: #727171;
        padding: 0.5em 0;
        display: flex;
        align-items: center;
        justify-content: center;
        align-item: center;
      }
    }
  }
`;
export { ReportStyle };
