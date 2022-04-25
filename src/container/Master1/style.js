import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const StyleContainer = styled.div`
  .rowDiv {
    padding: 5em 0 1em;
    margin-right: 0 !important;
    .ant-col {
      .tabsDiv {
        display: flex;
        margin-top: 1em;
        .tabComp {
          padding: 8px 20px;
          margin-right: 10px;
          color: ${Theme.mainColor};
          font-weight: 600;
          border-radius: 0.5em;
          background: #fff;
          &.selectedTab,
          :hover {
            font-weight: 500;
            color: #fff;
            background: ${Theme.mainColor};
          }
        }
      }
      .tableDiv {
        box-shadow: 0 0 10px rgb(0 0 0 / 20%);
        background-color: #fff;
        border-radius: 1em;
        padding: 1.5em;
        overflow-x: auto;
        margin-bottom: 1em;
        // min-height: 34em;
        margin-top: 1em;
        .headDiv {
          display: flex;
          margin-left: auto;
          align-items: center;
          margin-bottom: 1em;
          .btnDiv {
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
        }
      }
    }
  }
`;
export { StyleContainer };
