import React, { Component } from "react";
class Overly extends Component {
  state = {
    style: {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1510414842594-a61c69b5ae57)"
    }
  };
  render() {
    return (
      <div className="hero-wrap js-fullheight" style={this.state.style}>
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>
                <span>Blog</span>
              </p>
              <h1 className="mb-3 bread">Tips &amp; Articles</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overly;
