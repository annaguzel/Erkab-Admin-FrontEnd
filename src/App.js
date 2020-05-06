import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import School from "./Components/Pages/School";
import AddDriver from "./Components/Pages/AddDriver";
import Login from "./Components/Login";
import SchoolForm from "./Components/Pages/SchoolForm";
import Wrapper from "./Components/Wrapper";

const wrapperDashboard = Wrapper(Dashboard);
const wrapperSchoolForm = Wrapper(SchoolForm);
const wrapperAddDriver = Wrapper(AddDriver);
const wrapperLogin = Wrapper(Login);
const wrapperSchool = Wrapper(School);
class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/add/school/" component={wrapperSchoolForm} />
          <Route path="/add/driver" component={wrapperAddDriver} />
          <Route path="/busses/:schoolID" component={wrapperSchool} />
          <Route path="/dashboard" component={wrapperDashboard} />

          <Route path="/" component={wrapperLogin} />
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    );
  }
}

export default App;
