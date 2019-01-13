import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
  state = {
    package: this.props.packages
  };
  render() {
    // console.log(this.state.package);
    return (
      <div className="destination">
        <Link
          to=""
          className="img img-2 d-flex justify-content-center align-items-center"
          style={{ background: this.state.package.bg_img }}
        >
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="icon-search2" />
          </div>
        </Link>
        <div className="text p-3" style={{ height: "200px" }}>
          <div className="row">
            <div className="one col-md-12">
              <h3>{this.state.package.name}</h3>
            </div>
            <div className="two col-md-12">
              <span className="price">${this.state.package.price}</span>
            </div>
          </div>

          <p className="bottom-area d-flex">
            <span>
              <i className="icon-map-o" /> {this.state.package.location}
            </span>
            <span className="ml-auto">
              <Link to={`/tour/${this.state.package.id}`}>Discover</Link>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Product;
