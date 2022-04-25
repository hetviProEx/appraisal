import styled from "styled-components";
import { size } from "App/device";

const StyleComponent = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .ant-menu {
    height: 4.5em;
    .ant-menu-item-selected::after {
      border-bottom: none;
    }
    .ant-menu-item-active::after {
      border-bottom: none !important;
    }
    .ant-menu-submenu-selected {
      color: #000;
      :after {
        border-bottom: none;
      }
    }
    .ant-menu-item-selected,
    &.ant-menu-horizontal {
      :after {
        border-bottom: none;
        color: #fff;
      }
      a {
        color: #000;
      }
    }
    .ant-menu-item {
      padding: 15px 0 0 20px;
      height: 3em;
      line-height: 25px;
      a:hover {
        color: #000;
      }
    }
    .title {
      padding-left: 2rem;
      margin-right: 1rem;
      font-size: 1.125rem;
      white-space: nowrap;
    }
    .contact {
      color: #4c5a67;
      font-size: 0.875rem;
      font-weight: 500;
    }
    .left {
      padding: 0.5rem;
      margin-left: auto;
      margin-right: 2em;
    }
  }
`;

export { StyleComponent };
