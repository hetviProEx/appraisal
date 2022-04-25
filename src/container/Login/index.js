import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

import {
  Label,
  Input,
  Button,
  Header,
  FormGroup,
  FormItem,
} from "components/Form";
import { login } from "redux/login/actions";
import { FormValidation } from "App/AppConstant";
import { StyleContainer } from "./style";
import { LoginConstant } from "./constant";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    // .max(45, FormValidation.inputMax)
    // .email(FormValidation.emailInvalid)
    .required(FormValidation.emailRequired),
  password: Yup.string().trim(),
  // .min(6, FormValidation.passwordMin)
  // .max(25, FormValidation.passwordMax)
  // .required(FormValidation.passwordRequired),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, isblock: false };
  }
  async componentDidUpdate(prevProps) {
    const { loading } = this.props;
    if (prevProps.loading !== loading) {
      this.setState({ loading });
      setInterval(() => {
        this.state.loading && this.setState({ loading: false });
      }, 4000);
    }
  }
  handleSubmit = async (values, { setSubmitting }) => {
    try {
      this.setState({ isblock: true });
      setTimeout(() => {
        this.setState({ isblock: false });
      }, 4500);
      let data = {
        Email: values.email.trim(),
        Password: "", //values.password,
        userId: 1, //response.userId,
        userName: "abc", //response.userName,
      };
      await this.props.login(data);
      setSubmitting(false);
    } catch (error) {
      console.log(error, "handle error");
    }
  };
  render() {
    const { loading, isblock } = this.state;
    return (
      <Spin spinning={loading} size="large">
        <StyleContainer>
          <Header />
          <div className="form-div anime">
            <Label className="head anime" title={LoginConstant.login} />
            <div className="loginDiv anime">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={loginValidationSchema}
                onSubmit={this.handleSubmit}
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
                  <Form onSubmit={handleSubmit} noValidate>
                    <FormItem>
                      <FormGroup>
                        <Input
                          autoFocus
                          placeholder={LoginConstant.emailplaceholder}
                          onBlur={handleBlur}
                          name="email"
                          type="email"
                          value={values.email}
                          handleChange={handleChange}
                        />
                        {errors.email && touched.email ? (
                          <div className="form-error">{errors.email}</div>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        <Input
                          password={true}
                          max={25}
                          onBlur={handleBlur}
                          placeholder={LoginConstant.passwordplaceholder}
                          type="password"
                          name="password"
                          value={values.password.trim()}
                          handleChange={handleChange}
                        />
                        {errors.password && touched.password ? (
                          <div className="form-error">{errors.password}</div>
                        ) : null}
                        <NavLink to="/forget-pasword" className="forgetlbl">
                          {LoginConstant.forgerPwd}
                        </NavLink>
                      </FormGroup>
                      <div className="btnDiv">
                        <Button htmlType="submit" disabled={isblock}>
                          {LoginConstant.login}
                        </Button>
                      </div>
                    </FormItem>
                  </Form>
                )}
              </Formik>
              <div className="btmDiv">
                <NavLink to="/register-profile" className="lbl">
                  {LoginConstant.donthave}
                  <b>{LoginConstant.register}</b>
                </NavLink>
              </div>
            </div>
          </div>
        </StyleContainer>
      </Spin>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
  loading: state.login.loading,
  error: state.login.error,
  message: state.login.message,
});
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
