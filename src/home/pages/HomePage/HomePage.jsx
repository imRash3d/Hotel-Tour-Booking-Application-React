import React, { Component } from "react";
import TourPlaces from "./TourPlaces";
import TourPackage from "./TourPackages";
import Blog from "./Blog";
import Hotels from "./TopHotels";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <TourPlaces />
        <TourPackage />
        {/* <Hotels /> */}
        {/* <Blog /> */}
      </div>
    );
  }
}

export default HomePage;
