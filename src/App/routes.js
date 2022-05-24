import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "container/Login";
import Profile from "container/Profile";
import DashBoard from "container/Dashboard";
import AddAppraisal from "container/AppraisalAddEdit";
import MyAppraisal from "container/MyAppraisal";
import MyProfile from "container/MyProfile";
import Employee from "container/Employee";
import KRAType from "container/KRAType";
import PageLoader from "components/PageLoader";
import Reports from "container/Reports";
import Master from "container/Master1";
import { getAuthUserID } from "modules/helper";
const routes = [
  {
    path: "/",
    exact: true,
    AuthRoute: true,
    component: localStorage?.auth
      ? localStorage.auth &&
        JSON.parse(localStorage.auth)?.user?.toLowerCase() === "admin"
        ? DashBoard
        : localStorage.auth && MyProfile
      : Login,
  },
  {
    path: "/login",
    exact: true,
    AuthRoute: false,
    component: Login,
  },
  {
    path: "/home",
    exact: true,
    AuthRoute: true,
    component: DashBoard,
  },
  {
    path: "/add-Appraisal",
    exact: true,
    AuthRoute: true,
    component: AddAppraisal,
  },
  // {
  //   path: "/edit-employee",
  //   exact: true,
  //   AuthRoute: true,
  //   component: AddAppraisal,
  // },
  // {
  //   path: "/profile",
  //   exact: true,
  //   AuthRoute: true,
  //   component: Profile,
  // },
  {
    path: "/basic-profile",
    exact: true,
    AuthRoute: true,
    component: Profile,
  },
  {
    path: "/my-profile",
    exact: true,
    AuthRoute: true,
    component: MyProfile,
  },
  {
    path: "/my-appraisal",
    exact: true,
    AuthRoute: true,
    component: MyAppraisal,
  },
  {
    path: "/employee",
    exact: true,
    AuthRoute: true,
    component: Employee,
  },
  {
    path: "/kra",
    exact: true,
    AuthRoute: true,
    component: KRAType,
  },
  {
    path: "/report",
    exact: true,
    AuthRoute: true,
    component: Reports,
  },
  {
    path: "/master",
    exact: true,
    AuthRoute: true,
    component: Master
  },

];
const PrivateRoute = ({ component: Component, ...rest }) => {
  if (getAuthUserID()) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/login" />;
  }
};
const RestrictedRoute = ({ component: Component, publicAccess, ...rest }) => {
  if (getAuthUserID()) {
    return (
      <Route
        {...rest}
        render={(props) =>
          publicAccess ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  } else {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
};
class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<PageLoader />}>
        <Switch>
          {routes.map((route, index) => {
            return !route.AuthRoute ? (
              <RestrictedRoute {...route} key={index} />
            ) : (
              <PrivateRoute {...route} key={index} />
            );
          })}
          <Route render={(props) => <h1>404 Page</h1>} />
        </Switch>
      </Suspense>
    );
  }
}
export default Routes;
