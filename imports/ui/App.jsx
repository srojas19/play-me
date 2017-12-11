import React, { Component } from 'react';
import NavBar from './NavBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : 'home'
    };

    this.onAction = this.onAction.bind(this);
  }

  onAction(page) {
    this.setState({currentPage: page});
  }


  render() {
    let currentPage = this.state.currentPage;
    let pageToRender = null;

    switch (currentPage) {
      case 'home':
        pageToRender = <h1>home</h1>; 
        break;
      case 'playlist':
        pageToRender = <PlaylistPage />
      case 'favorites':
        pageToRender = <Favorites />
      case 'following':
        pageToRender = <Following />
      default:
        break;
    }
    
    return (
      <div>
        <NavBar onAction = {this.onAction} />
        {currentPage}
      </div>
    );
  }
}