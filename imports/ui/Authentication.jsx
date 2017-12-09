import React, { Component } from 'react';
import Authentication from './Authentication.jsx';
import { Meteor } from "meteor/meteor";

export default class App extends Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this);
  }

  login() {
    var options = {
      showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
      requestPermissions: ['user-read-email'] // Spotify access scopes.
    };
    Meteor.loginWithSpotify(options, function(err) {
      console.log(err || "No error");
    });
  } 

  render() {
    return (
      <div>
        {Meteor.user()==null ? <button onClick={this.login}>Click me!</button> : <p>{Meteor.user()._id}</p>}
      </div>
       
    );
  }
}

