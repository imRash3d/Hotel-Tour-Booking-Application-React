import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AllTours from "./pages/All-tours/AllTours";
import TourDetails from "./pages/Tour-details/TourDetails";
import About from "./pages/about/About";
class HomeRoute extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>

          <Route path="/home" component={HomePage} />
          <Route path="/tours" component={AllTours} />
          <Route path="/tour/:id" component={TourDetails} />
          <Route path="/about" component={About} />
          <Route path="/" component={HomePage} />
          <Redirect from="" exact to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default HomeRoute;
