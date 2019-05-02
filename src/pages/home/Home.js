import React, { Component } from "react";
import Logo from "../assets/MYtineraryLogo.png";

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={Logo} className="MYtinerary-logo" alt="logo" />
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
          <h2>Start Browsing</h2>
          <img
            src="assets/circled-right-2.png"
            className="circledArrow"
            alt="circle arrow"
          />

          <p>Want to build your own MYtinerary?</p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log in
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create Account
          </a>

          <img src="assets/homeIcon.png" className="homeIcon" alt="home" />
        </header>
      </div>
    );
  }
}

export default Home;
