import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Admin from "./admin/Admin";
import Home from "./home/Home";

class RouteFile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
          <Redirect from="" exact to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default RouteFile;
