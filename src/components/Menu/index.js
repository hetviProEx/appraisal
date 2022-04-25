import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { MenuStyle } from "./style";
import { MenuItem, TlItem, EmpItem } from "./constant";
const { SubMenu } = Menu;
class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { path: "", active: "" };
  }
  async componentDidMount() {
    try {
      const { location } = this.props;
      let path = location.pathname.slice(1).toLowerCase();
      let url = path.replace("-", " ");
      // url = url === "roles right" ? url.replace(" ", " & ") : url;
      if (url !== "") this.setDefault(url);
      else this.setState({ path: "" });
      //   this.setState({ path: url });
    } catch (error) {
      console.log(error);
    }
  }
  setDefault = (url) => {
    try {
      let words = url.split(" ");
      let capWords = [];
      words.forEach((a) => {
        capWords.push(a[0].toUpperCase() + a.slice(1, a.length));
      });
      this.setState({ path: capWords.join(" ") });
    } catch (error) {
      console.log(error);
    }
  };
  setOpenKeys = (keys) => {
    try {
      const { history } = this.props;
      let url = keys.key.toLowerCase();
      url = url.replace(/ /g, "-");
      url = url.replace(/\//g, "-");
      url = url.replace(/& /g, "");
      history.push("/" + url);
    } catch (error) {
      console.log(error);
    }
  };
  menuUI = (path) => {
    let auth = localStorage?.auth;
    let it = JSON.parse(auth)?.user?.toLowerCase() === "tl";
    let men = auth
      ? it
        ? TlItem
        : JSON.parse(auth).user === "Admin"
          ? MenuItem
          : EmpItem
      : [];
    return men.map((a, i) => {
      if (!it)
        return (
          <Menu.Item
            key={a.name}
            icon={a.icon}
            className={
              path.toLowerCase() === a.name.toLowerCase() ||
                (path === "" && i === 0)
                ? "active"
                : ""
            }
          >
            {a.name}
          </Menu.Item>
        );
      else
        return (
          <SubMenu key={a.name} title={a.name} icon={a.icon}>
            {a.suboption.map((x, k) => (
              <Menu.Item
                key={x.name}
                icon={x.icon}
                className={
                  path.toLowerCase() === x.name.toLowerCase() ||
                    (path === "" && i === 0 && k === 0)
                    ? "ant-menu-item-selected"
                    : ""
                }
              >
                {x.name}
              </Menu.Item>
            ))}
          </SubMenu>
        );
    });
  };
  render() {
    const { path } = this.state;
    return (
      <MenuStyle>
        <div className="menuTop">
          <MenuOutlined />
          <h2>{path !== "" ? path : "Home"}</h2>
        </div>
        <Menu onClick={this.setOpenKeys} mode="inline">
          {this.menuUI(path)}
        </Menu>
      </MenuStyle>
    );
  }
}
export default withRouter(MenuComponent);
