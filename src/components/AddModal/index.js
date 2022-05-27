import React, { Component } from "react";
import { Modal, Collapse } from "antd";

import { ModalStyle } from "./style";
import {
  AddModConst,
} from "./constant";
import { Label, Input, Button } from "components/Form";

const { Panel } = Collapse;
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
      const { btnDisable } = this.state;
      console.log(this.state);
      let cval = this.state.check;
      console.log(cval, "cval");
      let inx = cval.findIndex((a) => a === e);
      if (inx > -1) cval.splice(inx, 1);
      else cval.push(e);
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
    debugger;
    const { increse } = this.state;
    this.setState({
      increse: val ? increse + 1 : increse !== 1 ? increse - 1 : increse,
    });
  };
  appraisal = (val) => {
    try {
      // debugger;
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
