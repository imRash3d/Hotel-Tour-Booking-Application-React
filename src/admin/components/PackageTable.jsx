import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
class PackageTable extends Component {
  state = {};
  deletePackage(id) {
    Axios.delete(
      `https://trabel-booking.firebaseio.com/packages/${id}.json`
    ).then(res => {
      if (res.status === 200) {
        this.props.onSuccess();
      }
    });
  }
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Img </th>
            <th>Category</th>
            <th>Location</th>
            <th>Name</th>
            <th>Price</th>
            {/* <th>Rating </th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.packages.map(item => (
            <tr key={item.id}>
              <td style={{ height: "100px", width: "100px" }}>
                <img
                  style={{ width: "100%" }}
                  src={item.bg_img}
                  alt={item.name}
                />
              </td>
              <td>{item.category}</td>
              <td>{item.location}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              {/* <td>
              <Rating rating={item.rating} />
            </td> */}
              <td>
                <Link to={`/admin/package/edit/${item.id}`}>
                  <i className="fa mr-4 pointer fa-pencil-alt" />
                </Link>
                <i
                  onClick={e => this.deletePackage(item.id)}
                  className="fa  pointer fa-trash-alt"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PackageTable;
