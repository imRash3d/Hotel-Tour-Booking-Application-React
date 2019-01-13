import React, { Component } from "react";
import Axios from "axios";
class BookingPage extends Component {
  state = {
    booking: []
  };
  getBooking() {
    Axios.get("https://trabel-booking.firebaseio.com/booking.json").then(
      res => {
        if (res.status === 200) {
          const data = res.data;
          for (const c in data) {
            const obj = {
              id: c,
              package_id: data[c].package_id,
              name: data[c].first_name + " " + data[c].last_name,
              total_person: data[c].total_person,
              arrival_date: data[c].arrival_date,
              arrival_time: data[c].arrival_time
            };
            this.state.booking.push(obj);
            this.setState({ booking: this.state.booking });
          }
        }
        console.log(this.state.booking);
      }
    );
  }
  componentDidMount() {
    this.getBooking();
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Package Id</th>
            <th> Name</th>
            <th>No of Person </th>
            <th>Date </th>
            <th>Time </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.booking.map((item, index) => (
            <tr key={index}>
              <td>{item.package_id}</td>
              <td>{item.name}</td>
              <td>{item.total_person}</td>
              <td>{item.arrival_date}</td>
              <td>{item.arrival_time}</td>
              <td>
                <i style={{ cursor: "pointer" }} className="fa fa-trash-alt" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BookingPage;
