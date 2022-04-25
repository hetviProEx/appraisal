import React, { Component } from "react";
import { Row, Col } from "antd";

import { Menu, Header, Table, Label, Select, Button } from "components/Form";
import { ReportStyle } from "./style";
import { SummData, Data, basicData, basicData2, Data1 } from "./constant";

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  trUI = (a, b) => {
    try {
      return (
        <tr>
          <td className="mainText">{a}</td>
          <td className="space"> {":"}</td>
          <td>{b}</td>
        </tr>
      );
    } catch (error) {
      console.log(error);
    }
  };
  showData = () => this.setState({ show: !this.state.show });
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
    const { show } = this.state;
    return (
      <ReportStyle>
        <Header />
        <Row gutter={24} className="rowDiv">
          <Col xs={24} sm={24} md={12} lg={12} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={20} className="antDiv anime">
            <div className="pDiv">
              <div className="tDiv">
                <h2 className="header">{"Report"}</h2>
                <div className="silcMain">
                  <Row gutter={20}>
                    <Col
                      xs={24}
                      sm={24}
                      md={12}
                      lg={7}
                      xl={7}
                      className="fieldDiv"
                    >
                      <Label title={"Basic Profile :"} className="label" />
                      <div className="selctDiv">
                        <Select data={basicData} />
                      </div>
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={12}
                      lg={7}
                      xl={7}
                      className="fieldDiv"
                    >
                      <Label title={"Appraisal By :"} className="label" />
                      <div className="selctDiv">
                        <Select data={basicData2} />
                      </div>
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={12}
                      lg={6}
                      xl={6}
                      className="fieldDiv"
                    >
                      <Label title={"Period :"} className="label" />
                      <div className="selctDiv">
                        <Select data={basicData} onChange={this.handleClick} />
                      </div>
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={12}
                      lg={4}
                      xl={4}
                      className="fieldDiv"
                    >
                      <Button onClick={this.showData}>{"Apply"}</Button>
                    </Col>
                  </Row>
                </div>
                {show && (
                  <div className="summDiv">
                    <h2 className="summHead anime">{"Summary Report"}</h2>
                    <Table data={SummData} type="summ" />
                  </div>
                )}
              </div>
            </div>
            {show && (
              <div className="pDiv">
                <div className="bacicInfo">
                  <table>
                    {this.trUI("KRA Type", "KRA Type 1")}
                    {this.trUI("Approver", "Employee1")}
                  </table>
                </div>
                <Table
                  data={Data}
                  type="rpKra"
                  footerUI={() => this.tabFooterUI("Avg Score Eraned", 1.8)}
                />
              </div>
            )}
            {show && (
              <div className="pDiv">
                <div className="bacicInfo">
                  <table>
                    {this.trUI("KRA Type", "KRA Type 1")}
                    {this.trUI("Approver", "Employee 2")}
                  </table>
                </div>
                <Table
                  data={Data1}
                  type="rpKra"
                  footerUI={() => this.tabFooterUI("Avg Score Eraned", 1.79)}
                />
              </div>
            )}
            {show && (
              <div className="pDiv">
                <div className="bacicInfo">
                  <table>
                    {this.trUI("KRA Type", "KRA Type 2")}
                    {this.trUI("Approver", "Employee 1")}
                  </table>
                </div>
                <Table
                  data={Data}
                  type="rpKra"
                  footerUI={() => this.tabFooterUI("Avg Score Eraned", 1.8)}
                />
              </div>
            )}
            {show && (
              <div className="pDiv">
                <div className="bacicInfo">
                  <table>
                    {this.trUI("KRA Type", "KRA Type 2")}
                    {this.trUI("Approver", "Employee 2")}
                  </table>
                </div>
                <Table
                  data={Data1}
                  type="rpKra"
                  footerUI={() => this.tabFooterUI("Avg Score Eraned", 1.79)}
                />
              </div>
            )}
          </Col>
        </Row>
      </ReportStyle>
    );
  }
}

export default Reports;
