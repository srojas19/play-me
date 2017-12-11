import React, { Component } from 'react';
import { Meteor } from "meteor/meteor";

export default class Authentication extends Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this);
    this.state = {
      authenticated: Meteor.user()!=null
    }
  }

  login() {
    var options = {
      showDialog: true,
      requestPermissions: ['user-read-email user-read-private playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative user-top-read user-read-recently-played user-library-read user-library-modify user-follow-modify user-follow-read'] // Spotify access scopes.
    };
    Meteor.loginWithSpotify(options, function(err) {
      if(err) console.log(err);
    });
    this.setState({authenticated: true});
  } 

  render() {
    return (
      <li className='nav-item'>
        { !this.state.authenticated ? 
          <a className='nav-link' href='#' onClick={this.login}>Log in</a> :
          <a className='nav-link'>Logged in</a>
        }
      </li>
       
    );
  }
}