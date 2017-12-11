import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import Authentication from "./Authentication.jsx";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.onSelection = this.onSelection.bind(this)
  }

  onSelection(page) {
    this.props.onAction(page);
  }

  render() { 
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Play-me</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" onClick={(e) => this.onSelection('playlist')} href="#">Create a playlist</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={(e) => this.onSelection('favorites')} href="#">Favorites</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={(e) => this.onSelection('following')} href="#">Following</a>
      </li>
    </ul>
    <ul className="navbar-nav my-2 my-lg-0">
      <Authentication />
    </ul>
  </div>
</nav>
    );
  }
}
export default NavBar;