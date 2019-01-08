import React, { Component } from "react";
import "./App.css";
import Header from "./home/layouts/Header";
import RouteFile from "./Route";
import Home from "./home/pages/HomePage/HomePage";
import Footer from "./home/layouts/Footer";
import Overly from "./home/layouts/Overly";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Overly />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
