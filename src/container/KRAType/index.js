import React, { Component } from "react";
import { Row, Col } from "antd";

import { Menu, Header, Table, Select } from "components/Form";
import { KRAContainer } from "./style.js";
import { TData, kraDrop } from "./constant";

class KRA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      show: true,
    };
  }
  handleSelect = (val) => {
    try {
      this.setState({ title: val, show: false });
      setTimeout(() => {
        this.setState({ show: true });
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { title, show } = this.state;
    return (
      <KRAContainer>
        <Header />
        <Row gutter={24} className="pDiv">
          <Col xs={24} sm={24} md={12} lg={12} xl={4}>
            <Menu />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={20} className="antDiv anime">
            <div className="pDiv">
              <div className="tDiv">
                <div className="flex">
                  <h2 className="header">{"KRA Type"}</h2>
                  <div className="selectDiv">
                    <Select data={kraDrop} onChange={this.handleSelect} />
                  </div>
                </div>
                {title !== "" && show && (
                  <div className="tableDIv">
                    <h2 className="tHead anime">{title}</h2>
                    <Table data={TData} type="kratype" />
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </KRAContainer>
    );
  }
}

export default KRA;
