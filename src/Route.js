import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./home/pages/HomePage/HomePage";

class RouteFile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
          <Redirect from="" exact to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default RouteFile;
