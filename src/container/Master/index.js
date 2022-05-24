import React, { Component } from "react";
import { Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { StyleContainer } from "./style.js";
import { Menu, Header, Table, AddModal } from "components/Form";
import { DesDeta, DepartData, KraDeta, PeriodDeta } from "./constant";

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, title: "" };
  }
  toggleModal = (val) => {
    try {
      const { visible } = this.state;
      this.setState({ visible: !visible, title: val });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { visible, title } = this.state;
    return (
      <StyleContainer>
        <Header />
        <Row gutter={24} className="rowDiv">
          <Col xs={24} sm={24} md={12} lg={12} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={20} className="antDiv">
            <Row gutter={24} className="secMain">
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <div className="secDiv">
                  <div className="headDiv">
                    <h2>{"Designation"}</h2>
                    <div
                      className="btnDiv"
                      onClick={() => this.toggleModal("Designation")}
                    >
                      <PlusOutlined />
                    </div>
                  </div>
                  <Table data={DesDeta} type="des" />
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <div className="secDiv">
                  <div className="headDiv">
                    <h2>{"Department"}</h2>
                    <div
                      className="btnDiv"
                      onClick={() => this.toggleModal("Department")}
                    >
                      <PlusOutlined />
                    </div>
                  </div>
                  <Table data={DepartData} type="dept" />
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <div className="secDiv">
                  <div className="headDiv">
                    <h2>{"KRA Type"}</h2>
                    <div
                      className="btnDiv"
                      onClick={() => this.toggleModal("kra")}
                    >
                      <PlusOutlined />
                    </div>
                  </div>
                  <Table data={KraDeta} type="kr" />
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <div className="secDiv">
                  <div className="headDiv">
                    <h2>{"Period"}</h2>/
                    <div
                      className="btnDiv"
                      onClick={() => this.toggleModal("Period")}
                    >
                      <PlusOutlined />
                    </div>
                  </div>
                  <Table data={PeriodDeta} type="Period" />
                </div>
              </Col>

            </Row>
          </Col>
        </Row>
        {visible && (
          <AddModal
            onOk={this.toggleModal}
            onCancel={this.toggleModal}
            title={title}
          />
        )}
      </StyleContainer>
    );
  }
}

export default Master;
