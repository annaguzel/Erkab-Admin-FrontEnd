import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
