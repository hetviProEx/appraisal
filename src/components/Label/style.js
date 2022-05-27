import styled from "styled-components";
import { Theme } from "../../App/theme";
const FormWrapper = styled.div`
  & label {
    font-size: 13px;
    font-weight: 500;
    color: #000; //${Theme.mainColor};
    letter-spacing: 0.05em;
    line-height: 15px;
    display: block;
  }
  .empty {
    color: #e81c1c;
  }
`;
export { FormWrapper };
