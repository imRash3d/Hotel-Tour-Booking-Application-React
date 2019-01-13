import React, { Component } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // ES6
import axios from "axios";
import Alert from "../../modules/Alert";
class AddForm extends Component {
  state = {
    name: "",
    price: "",
    description: "",
    location: "",
    includes: [],
    category: "",
    room_type: [],
    bg_img: "",
    isSubmitted: null
  };

  getData(id) {
    axios
      .get(`https://trabel-booking.firebaseio.com/packages/${id}.json`)
      .then(res => {
        for (const c in res) {
          this.setState({
            name: res[c].name,
            description: res[c].description,
            price: res[c].price,
            bg_img: res[c].bg_img,
            location: res[c].location,
            category: res[c].category
          });
        }
        console.log(this.state);
      });
  }

  changeHandler = event => {
    if (event.target.type === "checkbox") {
      if (event.target.checked) {
        if (event.target.name === "includes") {
          this.setState({
            ...this.state,
            includes: this.state.includes.concat(event.target.value)
          });
        } else {
          this.setState({
            ...this.state,
            room_type: this.state.room_type.concat(event.target.value)
          });
        }
      }
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.getData(id);
      this.setState({
        package_id: id
      });
    }
  }
  submitHandler(e) {
    e.preventDefault();
    const packageData = {
      bg_img: this.state.bg_img,
      category: this.state.category,
      description: this.state.description,
      includes: this.state.includes,
      isSubmitted: this.state.bg_img,
      location: this.state.location,
      name: this.state.name,
      price: this.state.price,
      room_type: this.state.room_type
    };
    if (this.state.package_id) {
      this.editPackage(packageData);
    } else {
      this.addPackage(packageData);
    }
  }

  addPackage(packageData) {
    axios
      .post("https://trabel-booking.firebaseio.com/packages.json", packageData)
      .then(res => {
        console.log(res);
        this.setState({
          isSubmitted: true
        });
      })
      .catch(err => {
        alert("Something wrong Please try again ");
        this.setState({
          isSubmitted: false
        });
      });
  }

  editPackage(packageData) {
    axios
      .put(
        `https://trabel-booking.firebaseio.com/packages/${
          this.state.package_id
        }.json`,
        packageData
      )
      .then(res => {
        console.log(res);
        this.setState({
          isSubmitted: true
        });
      })
      .catch(err => {
        alert("Something wrong Please try again ");
        this.setState({
          isSubmitted: false
        });
      });
  }
  handleDescription(value) {
    console.log(value);
    this.setState({
      description: value
    });
  }
  render() {
    const locations = [
      { id: 110901, name: "Bangldaesh" },
      { id: 3423, name: "Italy, Venice" },
      { id: 33443, name: "Lion, Singapur" },
      { id: 133454543, name: " Phuket, Thailand " }
    ];
    const categories = [
      { id: 1, name: "Package" },
      { id: 2, name: "Restaurant" }
    ];
    const includes = [
      { id: 1, name: "Free Wifi" },
      { id: 2, name: "Airport pickup service" },
      { id: 3, name: "Swimming pool" },
      { id: 4, name: "Lunch / DInner" },
      { id: 5, name: "GYM" }
    ];
    const room_types = [
      { id: 1, name: " 1 Bed Room (Single)" },
      { id: 2, name: "2 Bed Room (Single)" },
      { id: 3, name: "Swimming pool" },
      { id: 4, name: "1 Bed Room (Double)" },
      { id: 5, name: "2 Bed Room (Double)" },
      { id: 6, name: "1 Suites" }
    ];
    return (
      <div className="container">
        {this.state.isSubmitted && (
          <div className="row justify-content-center">
            <Alert
              title={
                this.state.package_id
                  ? "Package updated Successfully"
                  : "package added Successfulyy"
              }
            />
          </div>
        )}
        <div className="row text-center">
          <h3>
            {this.state.package_id ? "Edit " : "Add New "}
            Package
          </h3>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5 mt-5 ">
            <form onSubmit={e => this.submitHandler(e)}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.changeHandler}
                    value={this.state.name}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="">Price</label>
                  <input
                    name="price"
                    onChange={this.changeHandler}
                    value={this.state.price}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="">Insert img link </label>
                  <input
                    name="bg_img"
                    onChange={this.changeHandler}
                    value={this.state.bg_img}
                    placeholder="https://images.unsplash....."
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    onChange={this.changeHandler}
                    value={this.state.description}
                    cols="30"
                    rows="5"
                  />

                  {/* <ReactQuill
                  
                    value={this.state.description}
                    onChange={this.handleDescription}
                  /> */}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="">Location</label>
                  <select
                    className="form-control"
                    name="location"
                    onChange={this.changeHandler}
                    value={this.state.location}
                  >
                    <option value="">Select Location</option>
                    {locations.map(item => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="">Category</label>
                  <select
                    name="category"
                    onChange={this.changeHandler}
                    className="form-control"
                    id=""
                  >
                    <option value="">Select Category</option>
                    {categories.map(item => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className="col-md-12 mb-3 mt-3 ">
                  Includes
                </label>

                {includes.map(item => (
                  <div key={item.id} className="col-md-3">
                    <input
                      type="checkbox"
                      value={item.name}
                      name="includes"
                      onChange={this.changeHandler}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
              <div className="row">
                <label htmlFor="" className="col-md-12 mb-3 mt-3 ">
                  Room Type
                </label>

                {room_types.map(item => (
                  <div key={item.id} className="col-md-3">
                    <input
                      type="checkbox"
                      value={item.name}
                      name="rom_type"
                      onChange={this.changeHandler}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
              <div className="row justify-content-center">
                <button className="btn btn-success col-md-4 ">
                  {this.state.package_id ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddForm;
