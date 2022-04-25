import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const KRAContainer = styled.div`
  .pDiv {
    padding: 5em 0 1em;
    margin-right: 0 !important;
    .ant-col {
      .pDiv {
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
  }
`;
export { KRAContainer };
