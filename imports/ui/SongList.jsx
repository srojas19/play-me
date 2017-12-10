import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Song from './Song.jsx';

class SongList extends Component {
  
  constructor(props) {
    super(props);
  }


  renderSongs() {
    return this.props.songs.map((song) => (
      <Song key= {song._id} song={song} />
    ));
  }

  render() {
    return (
      <div>
        <ul className="songs">{this.renderSongs()}</ul>
      </div>
    );
  }
}

SongList.propTypes = {
};

export default SongList;