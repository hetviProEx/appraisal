import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const StyleContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f9fafa;
  background-size: cover;
  .form-div {
    position: absolute;
    border-radius: 10px;
    width: 25%;
    padding: 3%;
    min-width: 220px;
    margin: 13% 0 0 40%;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media ${size["laptop-max"]} {
      width: 30%;
      margin: 10% 0 0 35%;
    }
    @media ${size["tablet-md-max"]} {
      padding: 5%;
      width: 40%;
      margin: 10% 0 0 25%;
    }
    @media ${size["tablet-max"]} {
      margin: 15% 0 0 20%;
      width: 60%;
    }
    @media ${size["mobile-md-max"]} {
      width: 80%;
      margin: 15% 0 0 10%;
      padding: 10% 5%;
    }
    .head {
      font-size: 15px;
      font-weight: bold;
      color: ${Theme.mainColor};
    }
    .ant-divider-inner-text {
      font-size: 10px;
    }
    .middle {
      .divider {
        border-left: 1px solid ${Theme.mainColor};
        height: 40%;
        margin: 0 50%;
      }
      .lbl {
        margin: 15px 40%;
      }
    }
    .loginDiv {
      .forgetlbl {
        font-size: 11px;
        position: absolute;
        right: 1px;
        color: ${Theme.mainColor};
      }
      .btmDiv {
        margin-top: 2rem;
        .lbl {
          position: absolute;
          left: 20%;
          color: ${Theme.mainColor};
          font-size: 12px;
        }
        .lblmore {
          left: 32%;
        }
      }
    }
    .btnDiv {
      margin-top: 2.5rem;
      button {
        width: 100%;
        max-width: 100%;
        border-radius: 2rem;
      }
    }
  }
`;
export { StyleContainer };
