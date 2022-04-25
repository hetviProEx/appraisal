import React, { Component } from "react";
import { Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { StyleContainer } from "./style";
import { TabsUI } from "./TabsUI";
import { Menu, Header, Table, AddModal } from "components/Form";
import { DesDeta, DepartData, KraDeta, PeriodDeta } from "./constant";
class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      count: 0,
      title: "Designation",
    };
  }
  countHandle = (name, i) => this.setState({ count: i, title: name });
  toggleModal = () => {
    try {
      const { visible } = this.state;
      this.setState({ visible: !visible });
    } catch (error) {
      console.log(error);
    }
  };
  tableUI = () => {
    const { title, count } = this.state;
    try {
      return (
        <div className="tableDiv anime">
          <div className="headDiv">
            <h2>{title}</h2>
            <div className="btnDiv" onClick={() => this.toggleModal()}>
              <PlusOutlined />
            </div>
          </div>
          <Table
            data={
              count === 1
                ? DepartData
                : count === 2
                ? KraDeta
                : count === 3
                ? PeriodDeta
                : DesDeta
            }
            type={
              count === 1
                ? "dept"
                : count === 2
                ? "kr"
                : count === 3
                ? "Period"
                : "des"
            }
          />
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { count, title, visible } = this.state;
    return (
      <StyleContainer>
        <Header />
        <Row gutter={24} className="rowDiv">
          <Col xs={24} sm={24} md={12} lg={12} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={20} className="antDiv anime">
            <TabsUI count={count} countHandle={this.countHandle} />
            {this.tableUI()}
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
