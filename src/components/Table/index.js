import React, { Component } from "react";
import { Table, Image } from "antd";
import { FileFilled, PlusCircleOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import TableStyle from "./style";
import { PageConst } from "./constant";
import { Input } from "components/Form";
import { eye, editPen, fillClose } from "components/Images";
const { Column } = Table;
class TableUI extends Component {


  masterAction = (a, typex) => {
    try {
      return (<div className="actionUI">
        <div className="actionDiv"><EyeOutlined /></div>
        <div className="actionDiv"><EditOutlined /></div>
        <div className="actionDiv"><DeleteOutlined /></div>
      </div>);
    } catch (error) {
      console.log(error);
    }
  }

  columnUI = () => {
    const { type, showAction } = this.props;
    try {
      return (
        <>
          <Column
            width={50}
            title={PageConst.no}
            dataIndex={"sr"}
            sorter={(a, b) => a.sr - b.sr}
          />
          {type === "app" && (
            <>
              <Column
                title={PageConst.k336ra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.no}
                dataIndex={"waight"}
                sorter={(a, b) => a.waight.localeCompare(b.waight)}
              />
            </>
          )}
          {type === "des" && (
            <>
              <Column
                title={PageConst.name}
                dataIndex={"name"}
                sorter={(a, b) => a.name.localeCompare(b.name)}
              />
              <Column
                title={PageConst.des}
                dataIndex={"name"}
                sorter={(a, b) => a.name.localeCompare(b.name)}
              />
            </>
          )}
          {type === "kr" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"name"}
                sorter={(a, b) => a.name.localeCompare(b.name)}
              />
            </>
          )}
          {type === "dept" && (
            <>
              <Column
                title={PageConst.dept}
                dataIndex={"name"}
                sorter={(a, b) => a.name.localeCompare(b.name)}
              />
              <Column
                title={PageConst.com}
                dataIndex={"company"}
                sorter={(a, b) => a.company.localeCompare(b.company)}
              />
            </>
          )}
          {type === "Period" && (
            <>
              <Column
                title={PageConst.per}
                dataIndex={"name"}
                sorter={(a, b) => a.name.localeCompare(b.name)}
              />
            </>
          )}
          {type === "myapp" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.scEr}
                dataIndex={"score"}
                sorter={(a, b) => a.score - b.score}
              />
            </>
          )}
          {type === "emp" && (
            <>
              <Column
                title={PageConst.empCode}
                dataIndex={"empCode"}
                sorter={(a, b) => a.empCode.localeCompare(b.empCode)}
              />
              <Column
                title={PageConst.empName}
                dataIndex={"empName"}
                sorter={(a, b) => a.empName.localeCompare(b.empName)}
              />
              <Column
                title={PageConst.email}
                dataIndex={"email"}
                sorter={(a, b) => a.email.localeCompare(b.email)}
              />
              <Column
                title={PageConst.mob}
                dataIndex={"mob"}
                sorter={(a, b) => a.mob.localeCompare(b.mob)}
              />
            </>
          )}
          {type === "appraisal" && (
            <>
              <Column
                title={PageConst.empCode}
                dataIndex={"empCode"}
                sorter={(a, b) => a.empCode.localeCompare(b.empCode)}
              />
              <Column
                title={PageConst.empName}
                dataIndex={"empName"}
                sorter={(a, b) => a.empName.localeCompare(b.empName)}
              />
              <Column
                title={PageConst.he}
                dataIndex={"he"}
                sorter={(a, b) => a.he.localeCompare(b.he)}
              />
              <Column
                title={PageConst.weights}
                dataIndex={"weights"}
                sorter={(a, b) => a.weights.localeCompare(b.weights)}
              />
            </>
          )}
          {type === "kra & kpi" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
              />
              <Column
                title={PageConst.weights}
                dataIndex={"weights"}
                sorter={(a, b) => a.weights.localeCompare(b.weights)}
              />
            </>
          )}
          {type === "kra" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
              />
              <Column
                title={PageConst.weights}
                dataIndex={"waight"}
                sorter={(a, b) => a.waight - b.waight}
              />
              <Column
                title={PageConst.scores}
                dataIndex={"score"}
                sorter={(a, b) => a.score - b.score}
              />
              <Column
                title={PageConst.scEr}
                dataIndex={"scoreEarned"}
                sorter={(a, b) => a.scoreEarned - b.scoreEarned}
              />
            </>
          )}
          {type === "profile" && (
            <>
              <Column
                width={200}
                title={PageConst.empCode}
                dataIndex={"emp"}
                sorter={(a, b) => a.emp.localeCompare(b.emp)}
              />
              <Column
                title={PageConst.name}
                dataIndex={"name"}
                width={200}
                sorter={(a, b) => a.name.localeCompare(b.name)}
              />
              <Column
                title={PageConst.weight}
                dataIndex={"weight"}
                sorter={(a, b) => a.weight.localeCompare(b.weight)}
              />
            </>
          )}
          {type === "kratype" && (
            <>
              <Column
                title={PageConst.kraType}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
                width={200}
              />
              <Column
                title={PageConst.weights}
                dataIndex={"weight"}
                sorter={(a, b) => a.weight - b.weight}
              />
              {/* <Column
                title={PageConst.score}
                dataIndex={"score"}
                sorter={(a, b) => a.score - b.score}
              /> */}
            </>
          )}
          {type === "summ" && (
            <>
              <Column
                title={PageConst.kra + PageConst.type}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.sco1}
                dataIndex={"score1"}
                sorter={(a, b) => a.score1 - b.score1}
              />
              <Column
                title={PageConst.sco2}
                dataIndex={"score2"}
                sorter={(a, b) => a.score2 - b.score2}
              />
              <Column
                title={PageConst.finScor}
                dataIndex={"finalScore"}
                sorter={(a, b) => a.finalScore - b.finalScore}
              />
            </>
          )}
          {type === "rpKra" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
              />
              <Column
                title={PageConst.weight}
                dataIndex={"wt"}
                sorter={(a, b) => a.wt - b.wt}
              />
              <Column
                title={PageConst.score}
                dataIndex={"score"}
                sorter={(a, b) => a.score - b.score}
              />
              <Column
                title={PageConst.scEr}
                dataIndex={"scoreEarned"}
                sorter={(a, b) => a.scoreEarned - b.scoreEarned}
              />
              <Column
                title={PageConst.doc}
                render={(record, i) => this.docUI(record, type)}
              />
            </>
          )}
          {type === "appAddEdit" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
              />
              <Column
                title={PageConst.weight}
                dataIndex={"waight"}
                sorter={(a, b) => a.waight - b.waight}
              />
              <Column
                title={PageConst.score}
                dataIndex={"score"}
                sorter={(a, b) => a.score - b.score}
                render={(record, i) => this.inputUI(record, type)}
              />
              <Column
                title={PageConst.doc}
                render={(record, i) => <PlusCircleOutlined />}
              />
            </>
          )}
          {showAction && (
            <Column
              width={150}
              title={PageConst.action}
              render={(record, i) => this.masterAction(record, type)}
            />
          )}
        </>
      );
    } catch (error) {
      console.log(error);
    }
  };
  inputUI = (a, type) => {
    try {
      let path = window.location.pathname === "/edit-employee";
      return <Input type="number" value={path ? a : 0} />;
    } catch (error) {
      console.log(error);
    }
  };
  docUI = (a, type) => {
    try {
      return (
        <div className="docUI" style={{ textAlign: "center" }}>
          {a.doc ? <FileFilled /> : "-"}
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  action = (record, type) => {
    try {
      return (
        <div className="actionUI">
          <Image
            className="pointer eye"
            src={eye}
            preview={false}
            width={18}
          // onClick={() => this.props.showModal(record.userid)}
          />
          <Image
            className="pointer"
            src={editPen}
            preview={false}
            width={15}
          // onClick={() =>this.props.getEditId("/edit-" + type + "/" + window.btoa(record.userid))}
          />
          <Image
            className="pointer"
            src={fillClose}
            preview={false}
            width={15}
          // onClick={() => this.props.removecol(record.userid)}
          />
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { data, type, footerUI } = this.props;
    // data?.forEach((a,i) => {if(!a.sr)a.sr=i+1});
    return (
      <TableStyle>
        <Table
          dataSource={data}
          pagination={data?.length > 10}
          rowClassName="anime"
          onRow={(record) => {
            return {
              onDoubleClick: (event) => type === "emp" && this.props.redirect(),
            };
          }}
          footer={footerUI}
        >
          {this.columnUI()}
        </Table>
      </TableStyle>
    );
  }
}

export default TableUI;
