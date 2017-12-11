import React, { Component } from 'react';
import { Meteor } from "meteor/meteor";
import Follower from "./Follower.jsx";

export default class FollowersPage extends Component {
  
  constructor(props) {
    super (props)
    this.state = {
      following: [],
      followers: []
    }
  }

  componentDidMount() {
    this.retrieveFollowers();
    this.retrieveFollowing();
  }

  retrieveFollowers() {
    Meteor.call('getMe', (error, result) => {
      if (error) console.error(error);
      else {
        console.log(result)
        this.setState({followers: result.followers});
      }
    });
  }

  retrieveFollowing() {
    Meteor.call('getFollowing', (error, result) => {
      if (error) console.error(error);
      else {
        console.log(result)
        this.setState({following: result.items});
      }
    });
  }
  
  renderFollowing() {
    return this.state.following.map((follower) => 
      <Follower follower={follower} key={follower.id}  />
    );
  }
  
  render() {
    return (
      <div className="container">
        <h1>Following</h1>
        <div className="row">
          {this.renderFollowing()}
        </div>
      </div>
    );
  }
}