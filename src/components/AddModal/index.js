import React, { Component } from "react";
import { Modal, Row, Col } from "antd";

import { ModalStyle } from "./style";
import { AddModConst } from "./constant";
import { Label, Input, Button, Select, Checkbox } from "components/Form";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: [],
    };
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
  viewEmp = () => {
    const gender = ["Male", "Female", "Other"];
    const department = ["IT", "Marketing", "Account"];
    const designation = ["Software engineer", "UI/UX developer", "Other"];
    const employee = ["Hetvi", "Nency", "Jency"];
    const location = ["Rajkot", "Surat", "Baroda"];
    const { check } = this.state;

    try {
      return (
        <Row gutter={24}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Employee code" />
              <Input />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="First name" />
              <Input />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Middle name" />
              <Input />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Last name" />
              <Input />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime genDiv">
            <div>
              <Label title="Gender" />
              <Select data={gender} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Department" />
              <Select data={department} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Designation" />
              <Select data={designation} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Mobile Number" />
              <Input />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Email" />
              <Input />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Report To" />
              <Select data={employee} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Location" />
              <Select data={location} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Zone" />
              <Select data={location} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Vertical" />
              <Select data={location} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Label title="Password" />
              <Input />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Checkbox
                text="Self appraisal"
                checked={check.includes(1)}
                onChange={() => this.checkClick(1)}
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="anime">
            <div>
              <Checkbox
                text="Admin"
                checked={check.includes(2)}
                onChange={() => this.checkClick(2)}
              />
            </div>
          </Col>
          {/* <div className="bottomDiv">
            <Button type="submit">Save</Button>
          </div> */}
        </Row>
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { onOk, onCancel, title } = this.props;

    return (
      <ModalStyle id="addModal-form">
        <Modal
          visible={true}
          onOk={onOk}
          onCancel={onCancel}
          footer={null}
          title={AddModConst.new + title}
          getContainer={() => document.getElementById("addModal-form")}
        >
          {title.toLowerCase() === "employees" && (
            <div className="feildDiv">{this.viewEmp()}</div>
          )}
          {title.toLowerCase() === "designation" && (
            <div className="feildDiv">
              <Label
                title={AddModConst.desg + AddModConst.st}
                className="label"
              />
              <Input className="input" />
            </div>
          )}
          {title.toLowerCase() === "department" && (
            <>
              <div className="feildDiv">
                <Label
                  title={AddModConst.dept + AddModConst.st}
                  className="label"
                />
                <Input className="input" />
              </div>
              <div className="feildDiv">
                <Label
                  title={AddModConst.comp + AddModConst.st}
                  className="label"
                />
                <Input className="input" />
              </div>
            </>
          )}
          {title.toLowerCase() === "kra type" && (
            <div className="feildDiv">
              <Label
                title={AddModConst.kraType + AddModConst.st}
                className="label"
              />
              <Input className="input" />
            </div>
          )}
          {title.toLowerCase() === "period" && (
            <div className="feildDiv">
              <Label
                title={AddModConst.prd + AddModConst.st}
                className="label"
              />
              <Input className="input" />
            </div>
          )}
          {title.toLowerCase() !== "employees" && (
            <div className="bottomDiv">
              <Button type="submit" onClick={onOk}>
                {AddModConst.crtNew}
              </Button>
            </div>
          )}
        </Modal>
      </ModalStyle>
    );
  }
}
export default AddModal;
