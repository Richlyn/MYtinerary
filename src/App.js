import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav/Nav.js";
import Home from "./Pages/Home/Home.js";
import Cities from "./Pages/Cities/Cities.js";
import BecameAMember from "./Pages/Member/Create/Create.js";
import Error from "./Pages/Error/Error.js";
import Footer from "./Components/Footer/Footer.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="page-wrap">
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Cities" component={Cities} />
              <Route path="/BecomeAMember" component={BecameAMember} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
