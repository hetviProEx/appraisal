import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const StyleContainer = styled.div`
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
        .empDiv {
          li {
            color: #d69e2e;
            a {
              color: black;
              font-size: larger;
            }
          }
        }
      }
    }
  }
`;
export { StyleContainer };
