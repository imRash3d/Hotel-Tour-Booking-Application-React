import React, { Component } from "react";
import Product from "../../components/product";
import axios from "axios";
class AllTours extends Component {
  state = {
    packages: []
  };
  getPackages() {
    axios
      .get("https://trabel-booking.firebaseio.com/packages.json")
      .then(res => {
        for (const c in res.data) {
          const obj = {
            id: c,
            name: res.data[c].name,
            includes: res.data[c].includes,
            location: res.data[c].location,
            price: res.data[c].price,
            rating: res.data[c].rating,
            bg_img: `url(${res.data[c].bg_img})`
          };

          this.state.packages.push(obj);
          this.setState({ packages: this.state.packages });
        }
      });
  }
  componentDidMount() {
    this.getPackages();
  }
  render() {
    return (
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <p>Side bar </p>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {this.state.packages.map(item => (
                  <div key={item.id} className="col-md-4 ftco-animate">
                    <Product packages={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AllTours;
