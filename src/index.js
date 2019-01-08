import React from "react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import "./assets/css/open-iconic-bootstrap.min.css";
import "./assets/css/animate.css";

// import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/magnific-popup.css";

import "./assets/css/aos.css";

// import "./assets/css/ionicons.min.css";

// import "./assets/css/bootstrap-datepicker.css";
// // import "./assets/css/jquery.timepicker.css";

// import "./assets/css/flaticon.css";
// import "./assets/css/icomoon.css";
import "./assets/css/style.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
