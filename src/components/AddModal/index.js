import React, { Component } from "react";
import { Modal } from "antd";

import { ModalStyle } from "./style";
import { AddModConst } from "./constant";
import { Label, Input, Button } from "components/Form";

class AddModal extends Component {
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
          <div className="bottomDiv">
            <Button type="submit" onClick={onOk}>
              {AddModConst.crtNew}
            </Button>
          </div>
        </Modal>
      </ModalStyle>
    );
  }
}
export default AddModal;
