import React, { Component } from "react";
import { Row, Col } from "antd";

import { StyleContainer } from "./style";
import { TData, KRADate, basicData, KRADate1 } from "./constant";
import { Menu, Header, Table, Label, Select } from "components/Form";
class Aprraisal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      kraType: ["KRA Type 1", "KRA Type 2"],
    };
  }
  handleClick = () => {
    try {
      this.setState({ openModal: true });
    } catch (error) {
      console.log(error);
    }
  };
  kraUI = () => {
    try {
      const { kraType } = this.state;
      return kraType.map((a, i) => (
        <div className="pDiv" key={i}>
          <div className="tDiv">
            <h2 className="header">{a}</h2>
          </div>
          <Table
            data={i === 0 ? KRADate : KRADate1}
            type="kra"
            footerUI={() =>
              this.tabFooterUI("Totle Score Eraned", i === 0 ? 3.9 : 3.72)
            }
          />
        </div>
      ));
    } catch (error) {
      console.log(error);
    }
  };
  tabFooterUI = (a, b) => {
    try {
      return (
        <div className="footerMain">
          <div className="nameText">{a}</div>
          <div className="colonText">{":"}</div>
          <div>{b}</div>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { openModal } = this.state;
    return (
      <StyleContainer>
        <Header />
        <Row gutter={24} className="rowDiv">
          <Col xs={24} sm={24} md={12} lg={12} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={20} className="antDiv anime">
            <div className="pDiv">
              <div className="tDiv">
                <h2 className="header anime">{"My Apparaisal"}</h2>
                <div className="fieldDiv anime">
                  <Label title={"Period :"} className="laebl" />
                  <div className="selctDiv">
                    <Select
                      data={basicData}
                      placeholder={"Month"}
                      onChange={this.handleClick}
                    />
                  </div>
                </div>
              </div>
              {openModal && (
                <Table
                  data={TData}
                  type="myapp"
                  footerUI={() => this.tabFooterUI("Avg Score Eraned", 3.81)}
                />
              )}
            </div>
            {openModal && this.kraUI()}
          </Col>
        </Row>
      </StyleContainer>
    );
  }
}
export default Aprraisal;
