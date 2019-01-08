import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
  state = {
    style: {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1546847924-c44381c9e09c)"
    }
  };
  render() {
    return (
      <div className="destination">
        <Link
          to=""
          className="img img-2 d-flex justify-content-center align-items-center"
          style={this.state.style}
        >
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="icon-search2" />
          </div>
        </Link>
        <div className="text p-3">
          <div className="d-flex">
            <div className="one">
              <h3>Paris, Italy</h3>
              <p className="rate">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star-o" />
                <span>8 Rating</span>
              </p>
            </div>
            <div className="two">
              <span className="price">$200</span>
            </div>
          </div>
          <p>Far far away, behind the word mountains, far from the countries</p>
          <p className="days">
            <span>2 days 3 nights</span>
          </p>
          <p className="bottom-area d-flex">
            <span>
              <i className="icon-map-o" /> San Franciso, CA
            </span>
            <span className="ml-auto">
              <Link to="">Discover</Link>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Product;
