import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import School from "./Components/School";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import LocationPicking from "./Components/LocationPicking";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/add/school/" component={LocationPicking} />
        <Route path="/login" component={Login} />
        <Route path="/busses/:schoolID" component={School} />
        <Route path="/" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
