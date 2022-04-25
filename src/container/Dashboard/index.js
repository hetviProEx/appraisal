import React, { Component } from "react";
import { Row, Col } from "antd";

import { Menu, Header } from "components/Form";
import { StyleContainer } from "./style.js";
import { EmpConst } from "./constant";

class Home extends Component {
  liUI = () =>
    EmpConst.map((a, i) => (
      <li key={i} className="anime">
        <a href={a.link}>{a.txt}</a>
      </li>
    ));
  render() {
    if (!localStorage.auth) return <></>;
    return (
      <StyleContainer>
        <Header />
        <Row gutter={24} className="pDiv">
          <Col xs={24} sm={24} md={12} lg={12} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={20} className="antDiv anime">
            <div className="pDiv">
              <h2 className="header">{"Employee"}</h2>
              <div className="empDiv">
                <h2>{EmpConst.emp}</h2>
                <ul>{this.liUI()}</ul>
              </div>
            </div>
          </Col>
        </Row>
      </StyleContainer>
    );
  }
}

export default Home;
