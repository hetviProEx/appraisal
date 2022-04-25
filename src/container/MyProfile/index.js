import React, { Component } from "react";
import { Label, Input } from "components/Form";
import { ProfileStyle } from "./style.js";
import { Header, Menu } from "components/Form";
import { Row, Col } from "antd";
import { ProConst } from "./constant";

class MyProfile extends Component {
  constructor() {
    super();
    this.state = { remember: false, check: [] };
  }
  checkClick = (e) => {
    try {
      let cval = this.state.check;
      let inx = cval.findIndex((a) => a === e);
      if (inx > -1) cval.splice(inx, 1);
      else cval.push(e);
      this.setState({ check: cval });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { check } = this.state;
    if (!localStorage.auth) return <></>;
    return (
      <ProfileStyle>
        <Header />
        <Row gutter={24} className="rowDiv">
          <Col xs={24} sm={24} md={12} lg={12} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={20} className="antDiv anime">
            <div className="pDiv">
              <h2 className="header">{ProConst.pdetail}</h2>
              <Row gutter={24}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="anime">
                  <Label title={ProConst.emp} className="label" />
                  <Input tabIndex="1" className="input" placeholder="emp003" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="anime">
                  <Label title={ProConst.flname} className="label" />
                  <Input tabIndex="2" className="input" placeholder="Jai" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="anime">
                  <Label title={ProConst.mname} className="label" />
                  <Input tabIndex="3" className="input" placeholder="Ram" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="anime">
                  <Label title={ProConst.lname} className="label" />
                  <Input tabIndex="4" className="input" placeholder="Patel" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="anime">
                  <Label title={ProConst.gen} className="label" />
                  <Input tabIndex="5" className="input" placeholder="Male" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="anime">
                  <Label title={ProConst.dep} className="label" />
                  <Input tabIndex="6" className="input" placeholder="Account" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="anime">
                  <Label title={ProConst.desi} className="label" />
                  <Input tabIndex="6" className="input" placeholder="Clark" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="anime">
                  <Label title={ProConst.report} className="label" />
                  <Input tabIndex="6" className="input" placeholder="Manager" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </ProfileStyle>
    );
  }
}

export default MyProfile;
