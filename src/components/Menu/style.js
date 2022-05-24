import styled from "styled-components";

const MenuStyle = styled.div`
  min-width: 15em;
  // border-right:1px solid #f0f0f0;
  .menuTop {
    display: flex;
    padding: 0.5em 1em;
    align-items: center;
    .anticon {
      font-size: 14px;
      color: #acb4ba;
    }
    h2 {
      margin-left: 10px;
      margin-bottom: 0;
    }
  }
  .ant-menu-inline{
    border-right: none;
  }
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: none;
    padding: 0.5em 1em;
    .ant-menu-item {
      font-size: 16px;
      :hover {
        background: #ebeef0;
        border-radius: 10px;
        color: black;
      }
    }
    .active {
      background: #ebeef0;
      border-radius: 10px;
    }
  }
  .active,.ant-menu-item-selected {
    background: #ebeef0;
    border-radius: 10px;
  }
`;
export { MenuStyle };
