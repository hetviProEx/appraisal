import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const ProfileStyle = styled.div`
  .rowDiv {
    padding: 5em 0 1em;
    margin-right: 0 !important;
    .ant-col {
      .pDiv {
        box-shadow: 0 0 10px rgb(0 0 0 / 20%);
        background-color: #fff;
        border-radius: 1em;
        padding: 2em;
        margin: 1em;
        .header {
          font-weight: 700;
        }
        .check {
          display: flex;
        }
      }
    }
  }
`;
export { ProfileStyle };
