import React, { Component } from "react";
import { Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { StyleContainer } from "./style.js";
import { TData } from "./constant";
import { Menu, Header, Table, AddModal } from "components/Form";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      visible: false,
      // title: "",
    };
  }
  toggleModal = (val) => {
    try {
      const { visible } = this.state;
      this.setState({ visible: !visible });
    } catch (error) {
      console.log(error);
    }
  };
  rediOnAp = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { visible } = this.state;

    return (
      <StyleContainer>
        <Header />
        <Row gutter={24} className="rowDiv">
          <Col xs={24} sm={24} md={12} lg={12} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={20} className="antDiv anime">
            <Row gutter={24} className="secMain">
              <div className="secDiv">
                {/* <div className="tDiv anime">
                <h2 className="header">{""}</h2>
              </div> */}
                <div className="headDiv">
                  <h2>{"List of Employees"}</h2>
                  <div
                    className="btnDiv"
                    onClick={() => this.toggleModal("Employee")}
                  >
                    <PlusOutlined />
                  </div>
                </div>
                <Table
                  data={TData}
                  type="emp"
                  redirect={() => this.props.history.push("/edit-employee")}
                />
              </div>
            </Row>
          </Col>

        </Row>
        {visible && (
          <AddModal
            onOk={this.toggleModal}
            onCancel={this.toggleModal}
            title={"Employees"}
          />
        )}
      </StyleContainer >
    );
  }
}

export default Employee;
