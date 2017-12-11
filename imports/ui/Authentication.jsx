import React, { Component } from 'react';
import Authentication from './Authentication.jsx';
import { Meteor } from "meteor/meteor";

export default class App extends Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this);
    this.test = this.test.bind(this);
  }

  test() {
    console.log('test')
    console.log(Meteor.call('getFollowerCount'));
  }

  login() {
    var options = {
      showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
      requestPermissions: ['user-read-email user-read-private playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative user-top-read user-read-recently-played user-library-read user-library-modify user-follow-modify user-follow-read'] // Spotify access scopes.
    };
    Meteor.loginWithSpotify(options, function(err) {
      if(err) console.log(err);
    });
  } 

  render() {
    return (
      <div>
        {Meteor.user()==null ? <button onClick={this.login}>Click me!</button> : <p>{Meteor.user()._id}</p>}
        <button onClick={this.test}>Test</button>
      </div>
       
    );
  }
}