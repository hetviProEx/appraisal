import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

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
          .btnDiv {
            margin-left: auto;
            cursor: pointer;
            background: ${Theme.mainColor};
            padding: 0 10px;
            display: flex;
            align-item: center;
            min-width: 5em;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            height: 2.5em;
            color: #fff;
            .anticon {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`;
export { StyleContainer };
