import React, { Component } from "react";
import { Row, Col } from "antd";

import { StyleContainer } from "./style.js";
import { TData } from "./constant";
import { Menu, Header, Table } from "components/Form";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }
  rediOnAp = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <StyleContainer>
        <Header />
        <Row gutter={24} className="rowDiv">
          <Col xs={24} sm={24} md={12} lg={12} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={20} className="antDiv anime">
            <div className="pDiv">
              <div className="tDiv anime">
                <h2 className="header">{"List of Employees"}</h2>
              </div>
              <Table
                data={TData}
                type="emp"
                redirect={() => this.props.history.push("/edit-employee")}
              />
            </div>
          </Col>
        </Row>
      </StyleContainer>
    );
  }
}

export default Employee;
