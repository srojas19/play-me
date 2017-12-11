import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx'
import PlaylistPage from './PlaylistPage.jsx'
import Favorites from './FavoritesPage/Favorites.jsx'
import Following from './Following.jsx'

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
        pageToRender = <Home />;
        break;
      case 'playlist':
        pageToRender = <PlaylistPage />;
        break;
      case 'favorites':
        pageToRender = <Favorites />;
        break;
      case 'following':
        pageToRender = <Following />;
        break;
      default:
        break;
    }
    
    return (
      <div>
        <NavBar onAction = {this.onAction} />
        <div className="container-fluid my-2">
          {pageToRender}
        </div>
      </div>
    );
  }
}