import React, { Component } from "react";
import { Modal, Row, Col, InputNumber, Space } from "antd";

import { ModalStyle } from "./style";
import { AddModConst, gender, department, designation, employee, location, code, kraDrop, TData } from "./constant";
import { Label, Input, Button, Select, Checkbox, Table } from "components/Form";
import { PlusCircleOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: [],
      count: 0,
      data: {},
      btnDisable: false,
      increse: 1,
      title: "",
      show: true,
    };
  }
  checkClick = (e) => {
    try {
      const { btnDisable } = this.state
      console.log(this.state)
      let cval = this.state.check;
      console.log(cval, "cval")
      let inx = cval.findIndex((a) => a === e);
      if (inx > -1) cval.splice(inx, 1);
      else cval.push(e);
      // if (inx > -1) {
      //   cval.splice(inx, 1);
      //   this.setState({ btnDisable: true });
      // }
      // else {
      //   this.setState({ btnDisable: false });
      //   cval.push(e);
      // }
      this.setState({ check: cval, btnDisable: !btnDisable });
    } catch (error) {
      console.log(error);
    }
  };
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
  onChange = (val) => {
    const { increse } = this.state;
    this.setState({ increse: val ? increse + 1 : increse !== 1 ? increse - 1 : increse });
  };
  appraisal = (val) => {
    try {
      debugger;
    } catch (error) {
      console.log(error)
    }
  }
  viewEmp = () => {
    try {
      const { count, btnDisable, increse, title, show } = this.state;

      const { check } = this.state;
      return (
        <>

          {count === 0 && (
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
              <Col xs={24} sm={24} md={24} lg={24} xl={24} className="anime">
                <div className="bottomDiv">
                  <div className="btn anime">
                    {!btnDisable && < Button disabled={btnDisable}>
                      Save
                    </Button>}
                    <Button
                      type="submit"
                      className="nextBtn"
                      onClick={() => { this.setState({ count: 1 }) }}
                    >
                      Save & Add
                    </Button>
                  </div>
                </div>
              </Col>

            </Row >
          )}
          {count === 1 && (
            <>
              <Row gutter={24}>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} className="anime genDiv">
                  <div>
                    <Label title="Employee code" />
                    <Select data={code} onChange={this.appraisal} />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={5} className="anime">
                  <div>
                    <Label title="Name" />
                    <Input />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} className="anime">
                  <div>
                    <Label title="Hierarchy" />
                    <div className="countDiv">
                      <span>
                        <PlusCircleOutlined
                          onClick={() => this.onChange(true)}
                        />
                      </span>
                      <span className="count">{increse}</span>
                      <span>
                        <MinusCircleOutlined
                          onClick={() => this.onChange(false)}
                        />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} className="anime">
                  <div>
                    <Label title="Weightage" className="weight" />
                    <InputNumber
                      defaultValue={100}
                      min={0}
                      max={100}
                      formatter={(value) => `${value}%`}
                      parser={(value) => value.replace('%', '')}
                    // onChange={onChange}
                    />
                  </div>
                </Col>
                {/* <Col xs={24} sm={24} md={24} lg={1} xl={1} className="anime"> */}
                <span className="btnDiv"><PlusOutlined /></span>
                {/* <div>
                    <Label title="Name" />
                    <Input />
                  </div> */}
                {/* <PlusCircleOutlined /> */}
                {/* </Col> */}
              </Row>
              <div className="bottomDiv">
                <div className="btn anime">
                  <Button
                    type="submit"
                    className="nextBtn"
                    onClick={() => { this.setState({ count: 2 }) }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </>
          )}
          {count === 2 && (
            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={12} xl={20} className=" anime">
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
          )}
        </>
      )
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
