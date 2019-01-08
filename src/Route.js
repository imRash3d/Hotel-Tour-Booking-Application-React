import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./home/pages/HomePage/HomePage";
import AllTours from "./home/pages/All-tours/AllTours";
import About from "./home/pages/about/About";
import TourDetails from "./home/pages/Tour-details/TourDetails";

class RouteFile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/tours" component={AllTours} />
          <Route path="/tour/:id" component={TourDetails} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
          <Redirect from="" exact to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default RouteFile;
