import React, { Component } from "react";
import HomeRoute from "./HomeRoute";
import Header from "./layouts/Header";
import Overly from "./layouts/Overly";
import Footer from "./layouts/Footer";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Overly />
        <HomeRoute />
        <Footer />
      </div>
    );
  }
}

export default Home;
