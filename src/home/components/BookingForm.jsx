import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import React, { Component } from "react";
import Axios from "axios";
class BookingForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.toggle = this.toggle.bind(this);
  }
  state = {
    isSubmitted: false,
    modal: false,
    className: "",
    first_name: "",
    last_name: "",
    arrival_date: "",
    arrival_time: "",
    email: "",
    total_person: "",
    submitting: false
  };
  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  SubmitHandler(e) {
    this.setState({
      submitting: true
    });
    const booking = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      arrival_date: this.state.arrival_date,
      arrival_time: this.state.arrival_time,
      emaiL: this.state.email,
      total_person: this.state.total_person,
      package_id: this.props.package_id
    };
    Axios.post(
      "https://trabel-booking.firebaseio.com/booking.json",
      booking
    ).then(res => {
      if (res.status === 200) {
        this.setState({
          isSubmitted: true,
          submitting: false
        });
        this.successHandler();
      }
    });
    e.preventDefault();
  }

  successHandler() {
    setTimeout(() => {
      this.setState({
        isSubmitted: false
      });
    }, 3000);
    setTimeout(() => {
      this.toggle();
    }, 4000);
  }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Book Now
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <form className="row" onSubmit={e => this.SubmitHandler(e)}>
              <div className="col-md-6 form-group">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  onChange={this.onChangeHandler}
                  className="form-control"
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  onChange={this.onChangeHandler}
                  className="form-control"
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="">Email </label>
                <input
                  type="text"
                  name="email"
                  onChange={this.onChangeHandler}
                  className="form-control"
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="">Arrival Date </label>
                <input
                  name="arrival_date"
                  onChange={this.onChangeHandler}
                  type="date"
                  className="form-control"
                  //    placeholder="Email Address"
                />
              </div>
              <div className="col-md-6 form-group mt-3">
                <select
                  name="total_person"
                  onChange={this.onChangeHandler}
                  className="form-control mt-4 pt-1"
                  id=""
                >
                  <option value="">Select Person</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="">Arrival Time </label>
                <input
                  type="text"
                  name="arrival_time"
                  onChange={this.onChangeHandler}
                  className="form-control"
                />
              </div>
              <div className="col-md-12">
                {this.state.isSubmitted && (
                  <div className=" alert alert-success" role="alert">
                    Your booking added successfully
                  </div>
                )}
              </div>
              <div className="col-md-12 row mt-5 mb-5 justify-content-end  ">
                <Button className="mr-4 " type="submit" color="primary">
                  Submit
                  <span>
                    {this.state.submitting && (
                      <i className="fa ml-2 fa-spinner fa-spin" />
                    )}
                  </span>
                </Button>
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default BookingForm;
