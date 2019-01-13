import React, { Component } from "react";
import Table from "../components/Table";
import { Link } from "react-router-dom";
class Places extends Component {
  state = {
    places: []
  };
  getPlaces() {
    const data = fetch(
      "https://trabel-booking.firebaseio.com/listing_places.json"
    );
    data
      .then(res => {
        return res.json();
      })
      .then(res => {
        for (const c in res) {
          const obj = {
            id: c,
            name: res[c].name,
            listing_count: res[c].listing_count,
            bg_img: `url(${res[c].bg_img})`
          };
          this.state.places.push(obj);
          this.setState({ places: this.state.places });
        }
      });
  }
  componentDidMount() {
    this.getPlaces();
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-end">
          <button className="btn col-md-2 m-3 btn-primary">Add New</button>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Table places={this.state.places} />
          </div>
        </div>
      </div>
    );
  }
}

export default Places;
