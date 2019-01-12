import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
class AddForm extends Component {
  state = {
    setOpen: false,
    open: false,
    fullWidth: true,
    maxWidth: "sm"
  };
  //  const [open, setOpen] = React.useState(false);
  handleClickOpen() {
    console.log("open");
    this.setState({ open: true, setOpen: true });
  }

  handleClose() {
    console.log("close");
    this.setState({ open: false, setOpen: false });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form action="" />
          </div>
        </div>
      </div>
    );
  }
}

export default AddForm;
