import React, { Component } from "react";
import { Menu } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

import { StyleComponent } from "./style";
import { logout } from "redux/login/actions";

const { SubMenu } = Menu;
class Header extends Component {
  constructor() {
    super();
    this.state = {
      current: "title",
      hidden: true,
    };
  }
  async componentDidMount() {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  handleClick = (e) => {
    this.setState({ current: e.key });
    if (e.key === "logout") this.props.logout();
  };
  render() {
    const { current, hidden } = this.state;
    return (
      <StyleComponent>

        <Menu onClick={this.handleClick} mode="horizontal">
          <Menu.Item key="title" className="title">
            <>{hidden ? (<MenuOutlined style={{ padding: "10px" }} />) : ""}</>

            <a className="navbar-brand" href="/">
              Naapbooks Limited
            </a>
          </Menu.Item>
          <Menu.Item key="app" className="contact">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </Menu.Item>
          {localStorage?.auth && (
            <SubMenu
              key="SubMenu"
              title={<b>{JSON.parse(localStorage.auth).user}</b>}
              className="left"
            >
              <Menu.ItemGroup>
                <Menu.Item key="profile">Profile</Menu.Item>
                <Menu.Item key="logout">Log-out</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          )}
        </Menu>
      </StyleComponent>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  logout: (payload) => dispatch(logout(payload)),
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
