import React, { Component } from "react";
import { StyleContainer } from "./style.js";
import { Row, Col, InputNumber, Collapse } from "antd";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import {
    EmployeeConst,
    gender,
    department,
    designation,
    employee,
    location,
    code,
    AData,
    KRA,
    KRAData,
} from "./constant";
import {
    Label,
    Input,
    Button,
    Select,
    Checkbox,
    Table,
    Menu,
    Header,
} from "components/Form";
import {
    PlusCircleOutlined,
    MinusCircleOutlined,
    PlusOutlined,
} from "@ant-design/icons";
const { Panel } = Collapse;

const EmployeeValidation = Yup.object().shape({
    employeeCode: Yup.string().trim().required(" "),
    fName: Yup.string()
        .trim()
        .matches(/^[aA-zZ0-9 ]*$/)
        .required(" "),
    mName: Yup.string()
        .trim()
        .matches(/^[aA-zZ0-9 ]*$/),
    lName: Yup.string()
        .trim()
        .matches(/^[aA-zZ0-9 ]*$/),
    gender: Yup.string().trim().required(" "),
    email: Yup.string().trim().email().required(" "),
    mobile: Yup.string().trim().min(10).max(10).required(" "),
    department: Yup.string().trim().required(" "),
    designation: Yup.string().trim().required(" "),
    pwd: Yup.string().trim().matches(/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{6,}$/).required(" "),

});

const appraisalValidation = Yup.object().shape({
    hierarchy: Yup.string().trim().required(" "),
    weightage: Yup.string().trim().required(" "),
});
const kraValidation = Yup.object().shape({});
class EmployeeAdd extends Component {
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
            initVal: {
                employeeCode: "",
                fName: "",
                mName: "",
                lName: "",
                gender: "",
                mobile: "",
                email: "",
                department: "",
                designation: "",
                pwd: "",

            },
            appraisalVal: {
                hierarchy: "",
                weightage: "",
            },
            kraVal: {

            }
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
        } catch (error) {
            console.log(error);
        }
    };

    header = () => {
        try {
            const { check } = this.state;
            return (
                <>
                    <h4>KRA Type 1</h4>
                    <span className="set">
                        <Checkbox
                            text=""
                            checked={check.includes()}
                            onChange={() => this.checkClick()}
                        />
                        <Label title="Weightage" className="weight setLa" />
                        <InputNumber
                            defaultValue={100}
                            min={0}
                            max={100}
                            formatter={(value) => `${value}%`}
                            parser={(value) => value.replace("%", "")}
                        // onChange={onChange}
                        />
                    </span>
                </>
            );
        } catch (error) {
            console.log(error);
        }
    };
    handleSubmit = async (val, { setSubmitting }) => {
        try {
            // debugger;
            console.log("value", val);
            setSubmitting(false);
        } catch (error) {
            console.log(error);
        }
    };
    appraisalSubmit = async (val, { setSubmitting }) => {
        try {
            // debugger;
            console.log("value", val);
            setSubmitting(false);
        } catch (error) {
            console.log(error);
        }
    };
    viewEmp = () => {
        try {
            const { count, btnDisable, increse, initVal, check, appraisalVal } = this.state;
            return (
                <>
                    <Formik
                        initialValues={initVal}
                        validationSchema={EmployeeValidation}
                        onSubmit={this.handleSubmit}
                        enableReinitialize
                    >
                        {({
                            values,
                            errors,
                            touched,
                            onBlur,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                {count === 0 && (
                                    <Row gutter={24}>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label
                                                    title={EmployeeConst.ec}
                                                    className={
                                                        errors.employeeCode && touched.employeeCode
                                                            ? "empty"
                                                            : ""
                                                    }
                                                />
                                                <Input
                                                    name="employeeCode"
                                                    onBlur={handleBlur}
                                                    value={values.employeeCode}
                                                    handleChange={handleChange}
                                                    className={
                                                        errors.employeeCode && touched.employeeCode
                                                            ? "empty"
                                                            : ""
                                                    }
                                                />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label
                                                    title={EmployeeConst.fname}
                                                    className={
                                                        errors.fName && touched.fName ? "empty" : ""
                                                    }
                                                />
                                                <Input
                                                    name="fName"
                                                    onBlur={handleBlur}
                                                    value={values.fName}
                                                    handleChange={handleChange}
                                                    className={
                                                        errors.fName && touched.fName ? "empty" : ""
                                                    }
                                                />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label
                                                    title={EmployeeConst.mname}
                                                    className={
                                                        errors.mName && touched.mName ? "empty" : ""
                                                    }
                                                />
                                                <Input
                                                    name="mName"
                                                    onBlur={handleBlur}
                                                    value={values.mName}
                                                    handleChange={handleChange}
                                                    className={
                                                        errors.mName && touched.mName ? "empty" : ""
                                                    }
                                                />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label
                                                    title={EmployeeConst.lname}
                                                    className={
                                                        errors.lName && touched.lName ? "empty" : ""
                                                    }
                                                />
                                                <Input
                                                    name="lName"
                                                    onBlur={handleBlur}
                                                    value={values.lName}
                                                    handleChange={handleChange}
                                                    className={
                                                        errors.lName && touched.lName ? "empty" : ""
                                                    }
                                                />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime genDiv"
                                        >
                                            <div>
                                                <Label
                                                    title={EmployeeConst.gender}
                                                    className={
                                                        errors.gender && touched.gender ? "empty" : ""
                                                    } />
                                                <Select data={gender}
                                                />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.depart}
                                                    className={
                                                        errors.department && touched.department ? "empty" : ""
                                                    } />
                                                <Select data={department} />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.desi}
                                                    className={
                                                        errors.designation && touched.designation ? "empty" : ""
                                                    } />
                                                <Select data={designation} />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.mob}
                                                    className={
                                                        errors.mobile && touched.mobile ? "empty" : ""
                                                    } />
                                                <Input
                                                    name="mobile"
                                                    type="number"
                                                    onBlur={handleBlur}
                                                    value={values.mobile}
                                                    handleChange={handleChange}
                                                    className={
                                                        errors.mobile && touched.mobile ? "empty" : ""
                                                    } />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.email}
                                                    className={
                                                        errors.email && touched.email ? "empty" : ""
                                                    } />
                                                <Input
                                                    name="email"
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                    handleChange={handleChange}
                                                    className={
                                                        errors.email && touched.email ? "empty" : ""
                                                    } />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.report} />
                                                <Select data={employee} />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.location} />
                                                <Select data={location} />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.zone} />
                                                <Select data={location} />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.vertical} />
                                                <Select data={location} />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.pwd}
                                                    className={
                                                        errors.pwd && touched.pwd ? "empty" : ""
                                                    }
                                                />
                                                <Input
                                                    name="pwd"
                                                    onBlur={handleBlur}
                                                    value={values.pwd}
                                                    handleChange={handleChange}
                                                    className={
                                                        errors.pwd && touched.pwd ? "empty" : ""
                                                    } />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Checkbox
                                                    text={EmployeeConst.app}
                                                    checked={check.includes(1)}
                                                    onChange={() => this.checkClick(1)}
                                                />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={12}
                                            xl={12}
                                            className="anime"
                                        >
                                            <div>
                                                <Checkbox
                                                    text={EmployeeConst.admin}
                                                    checked={check.includes(2)}
                                                    onChange={() => this.checkClick(2)}
                                                />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={24}
                                            xl={24}
                                            className="anime"
                                        >
                                            <div className="bottomDiv">
                                                <div className="btn anime">
                                                    {!btnDisable && (
                                                        <Button htmlType="submit" disabled={btnDisable}>
                                                            {EmployeeConst.save}
                                                        </Button>
                                                    )}
                                                    <Button
                                                        className="nextBtn"
                                                        onClick={() => {
                                                            this.setState({ count: 1 });
                                                        }}
                                                    >
                                                        {EmployeeConst.add}
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                )}
                            </Form>
                        )}
                    </Formik>
                    <Formik
                        initialValues={appraisalVal}
                        validationSchema={appraisalValidation}
                        onSubmit={this.appraisalSubmit}
                        enableReinitialize
                    >
                        {({
                            values,
                            errors,
                            touched,
                            onBlur,
                            handleChange,
                            handleBlur,
                            appraisalSubmit,
                        }) => (
                            <Form onSubmit={appraisalSubmit}>
                                {count === 1 && (
                                    <>
                                        <Row gutter={24}>
                                            <Col
                                                xs={24}
                                                sm={24}
                                                md={24}
                                                lg={6}
                                                xl={6}
                                                className="anime genDiv"
                                            >
                                                <div>
                                                    <Label title={EmployeeConst.ec} />
                                                    <Select data={code} onChange={this.appraisal} />
                                                </div>
                                            </Col>
                                            <Col
                                                xs={24}
                                                sm={24}
                                                md={24}
                                                lg={6}
                                                xl={5}
                                                className="anime"
                                            >
                                                <div>
                                                    <Label title={EmployeeConst.fname} />
                                                    <Input />
                                                </div>
                                            </Col>
                                            <Col
                                                xs={24}
                                                sm={24}
                                                md={24}
                                                lg={6}
                                                xl={6}
                                                className="anime"
                                            >
                                                <div>
                                                    <Label title={EmployeeConst.hie}
                                                        className={
                                                            errors.hierarchy && touched.hierarchy ? "empty" : ""
                                                        } />
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
                                            <Col
                                                xs={24}
                                                sm={24}
                                                md={24}
                                                lg={6}
                                                xl={6}
                                                className="anime"
                                            >
                                                <div>
                                                    <Label title={EmployeeConst.weight}
                                                        className={
                                                            errors.weightage && touched.weightage ? "empty" : "weight"
                                                        }
                                                    />
                                                    <InputNumber
                                                        defaultValue={100}
                                                        min={0}
                                                        max={100}
                                                        formatter={(value) => `${value}%`}
                                                        parser={(value) => value.replace("%", "")}
                                                    // onChange={onChange}
                                                    />
                                                </div>
                                            </Col>
                                            <div className="btnDiv">
                                                <PlusOutlined />
                                            </div>
                                        </Row>

                                        <Table data={AData} type="appraisal" />
                                        <div className="bottomDiv">
                                            <div className="btn anime">
                                                <Button
                                                    onClick={() => {
                                                        this.setState({ count: 0 });
                                                    }}
                                                >
                                                    {EmployeeConst.pre}
                                                </Button>
                                                <Button
                                                    htmlType="submit"
                                                    className="nextBtn"
                                                    onClick={() => {
                                                        this.setState({ count: 2 });
                                                    }}
                                                >
                                                    {EmployeeConst.save}
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </Form>
                        )}
                    </Formik>
                    {count === 2 && (
                        <>
                            <Collapse accordion>
                                <Panel header={this.header()} key="1">
                                    <Row gutter={24}>
                                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                                            <div>
                                                <Label title={EmployeeConst.kra} />
                                                <Select data={KRA} onChange={this.appraisal} />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={6}
                                            xl={5}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.kpi} />
                                                <Input />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={6}
                                            xl={6}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.weight} className="weight" />
                                                <InputNumber
                                                    defaultValue={100}
                                                    min={0}
                                                    max={100}
                                                    formatter={(value) => `${value}%`}
                                                    parser={(value) => value.replace("%", "")}
                                                // onChange={onChange}
                                                />
                                            </div>
                                        </Col>
                                        <span className="btnDiv">
                                            <PlusOutlined />
                                        </span>
                                    </Row>
                                    <Table data={KRAData} type="kra & kpi" />
                                    <div className="bottomDiv">
                                        <div className="btn anime">
                                            <Button type="submit" className="nextBtn">
                                                {EmployeeConst.save}
                                            </Button>
                                        </div>
                                    </div>
                                </Panel>
                                <Panel header="KRA Type 2" key="2">
                                    <Row gutter={24}>
                                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                                            <div>
                                                <Label title={EmployeeConst.kra} />
                                                <Select data={KRA} onChange={this.appraisal} />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={6}
                                            xl={5}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.kpi} />
                                                <Input />
                                            </div>
                                        </Col>
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={6}
                                            xl={6}
                                            className="anime"
                                        >
                                            <div>
                                                <Label title={EmployeeConst.weight} className="weight" />
                                                <InputNumber
                                                    defaultValue={100}
                                                    min={0}
                                                    max={100}
                                                    formatter={(value) => `${value}%`}
                                                    parser={(value) => value.replace("%", "")}
                                                // onChange={onChange}
                                                />
                                            </div>
                                        </Col>
                                        <span className="btnDiv">
                                            <PlusOutlined />
                                        </span>
                                    </Row>
                                    <Table data={KRAData} type="kra & kpi" />
                                    <div className="bottomDiv">
                                        <div className="btn anime">
                                            <Button type="submit" className="nextBtn">
                                                {EmployeeConst.save}
                                            </Button>
                                        </div>
                                    </div>
                                </Panel>
                            </Collapse>
                            <div className="bottomDiv">
                                <div className="btn anime">
                                    <Button
                                        onClick={() => {
                                            this.setState({ count: 1 });
                                        }}
                                    >
                                        {EmployeeConst.pre}
                                    </Button>

                                    <Button type="submit" className="nextBtn">
                                        {EmployeeConst.save}
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}

                </>
            );
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <StyleContainer>
                <Header />
                <Row gutter={24} className="rowDiv">
                    <Col xs={24} sm={24} md={12} lg={12} xl={4} className="manuDiv">
                        <Menu />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={20} className="anime">
                        <Row gutter={24} className="secMain">
                            <div className="secDiv">
                                <div className="headDiv">
                                    <h2>{"List of Employees"}</h2>
                                </div>
                                <div className="feildDiv">{this.viewEmp()}</div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </StyleContainer>
        );
    }
}

export default EmployeeAdd;
