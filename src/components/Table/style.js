import styled from "styled-components";
import { Theme } from "App/theme";

const TableStyle = styled.div`
  .ant-table-wrapper .ant-table {
    .ant-table-footer {
        .footerMain{
            display: flex;  
            align-items:center;
            justify-content: end;
            font-size:16px;
            .nameText,.colonText{
                font-weight: bold;
            }
            .colonText{
                margin: 0 5px;
            }         

        }
    }
  }
`;
export default TableStyle;
