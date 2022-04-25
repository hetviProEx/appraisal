import React, { Component } from "react";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";

import { AppraisalStyle } from "./style";
import { AppConst, TData, tmPr, kraDrop } from "./constant";
import {
  Header,
  Menu,
  Label,
  Input,
  Select,
  Dropdown,
  Table,
  Button,
} from "components/Form";

class Appraisal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      title: "",
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
    let path = window.location.pathname === "/edit-employee";
    const { title, show } = this.state;
    return (
      <AppraisalStyle>
        <Header />
        <Row gutter={24} className="maincontainer">
          <Col xs={24} sm={24} md={12} lg={12} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={20} className="antDiv">
            <div className="detailDiv anime">
              <div className="topDiv">
                <h2>{"Add Appraisal"}</h2>
                <Button>Save</Button>
              </div>
              <div className="formDiv">
                <Row gutter={24}>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className="anime"
                  >
                    <div className="feildDiv">
                      <Label
                        title={AppConst.forEmp + AppConst.st}
                        className="label"
                      />
                      <Input
                        className="input"
                        placeholder={path && "HR-EMP-00001"}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className="anime"
                  >
                    <div className="feildDiv">
                      <Label
                        title={AppConst.empName + AppConst.st}
                        className="label"
                      />
                      <Input
                        className="input"
                        placeholder={path && "Albert Einstein"}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className="anime"
                  >
                    <div className="feildDiv">
                      <Label
                        title={AppConst.timePer + AppConst.st}
                        className="label"
                      />
                      <Select data={tmPr} placeholder={path && "Month"} />
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className="anime"
                  >
                    <Label title={AppConst.dep} className="label" />
                    <Input tabIndex="6" className="input" />
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className="anime"
                  >
                    <div className="feildDiv">
                      <Label title={AppConst.desg} className="label" />
                      <Input
                        className="input"
                        placeholder={path && "Engineer"}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className="anime"
                  >
                    <div className="feildDiv">
                      <Label title={AppConst.date} className="label" />
                      <Input
                        className="input"
                        placeholder={path && "20-04-2022"}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="goalMain">
                <div className="flex">
                  <h3>{AppConst.kraType}</h3>
                  <div className="selectDiv">
                    <Select data={kraDrop} onChange={this.handleSelect} />
                  </div>
                </div>
                {title !== "" && show && (
                  <div className="tableDIv">
                    <h2 className="tHead">{title}</h2>
                    <Table data={TData} type="appAddEdit" />
                  </div>
                )}
              </div>
              <div className="formDiv">
                <Row gutter={24}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="feildDiv">
                      <Label title={AppConst.remark} className="label" />
                      <Input className="input" row={8} />
                      <div>{AppConst.remarkAlert}</div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="formDiv">
                <Row gutter={24}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="feildDiv">
                      <Label title={AppConst.comp} className="label" />
                      <Input
                        className="input"
                        placeholder="Naapbooks Limited"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </AppraisalStyle>
    );
  }
}

export default withRouter(Appraisal);
