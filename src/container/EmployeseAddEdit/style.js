import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const StyleContainer = styled.div`
  .rowDiv {
    padding: 5em 0 1em;
    margin-right: 0 !important;
    .ant-col {
      .secMain {
        margin-top: 1em;
        .secDiv {
          width:100%;
          box-shadow: 0 0 10px rgb(0 0 0 / 30%);
          background-color: #fff;
          border-radius: 1em;
          padding: 1.5em;
        height:83vh;
        overflow-y: auto;
          margin:1em;
          min-height: 34em;
          .headDiv {
            display: flex;
            margin-left: auto;
            align-items: center;
            margin-bottom: 1em;
          }
          .genDiv{
            z-index:18;
          }
          .countDiv span {
            margin: 0.5em;
            font-size:large;
            padding-top:10px;
          }
          .weight{
            margin-bottom:8px;
          }
          .btnDiv {
            width: 2em;
            height: 2em;
            display: flex;
            margin: auto;
            align-items: center;
            justify-content: center;
            background: ${Theme.mainColor};
            stroke: #fff;
            stroke-width: 5em;
            font-size: 1.2em;
            border-radius: 50%;
          }
          .set{
            display:flex;
            margin:auto;
            .setLa{
              padding:6px;  
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
  }
  
`;
export { StyleContainer };
