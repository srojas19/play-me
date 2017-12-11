import React, { Component } from 'react';
import { Meteor } from "meteor/meteor";
import SongRow from "./SongRow.jsx";
import ArtistBrief from './ArtistBrief.jsx';

export default class Favorites extends Component {
  
  constructor(props) {
    super (props)
    this.state = {
      tracks: [],
      artists: []
    }
  }

  componentDidMount() {
    this.retrieveSongs();
    this.retrieveArtists();
  }

  retrieveSongs() {
    Meteor.call('getMyTopTracks', (error, result) => {
      if (error) console.error(error);
      else {
        this.setState({tracks: result.items});
      }
    });
  }

  retrieveArtists() {
    Meteor.call('getMyTopArtists', (error, result) => {
      if (error) console.error(error);
      else {
        this.setState({artists: result.items});
      }
    });
  }

  renderSongs() {
    return this.state.tracks.map((track, index) =>
			<SongRow track={track} index={index+1} key={track.id} />
		);
  }

  renderArtists() {
    return this.state.artists.map((artist) => 
      <ArtistBrief artist={artist} key={artist.id}  />
    );
  }
  
  render() {
    return (
      <div className="row">
      <div className="col-6" id='tracks'>
        <h1>Favorite songs</h1>
        <p className='font-weight-light'>Take a look at your favorite songs!</p>
        <table className="table font-weight-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Song</th>
              <th scope="col">Album</th>
              <th scope="col">Artist</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
          <tbody>
            { this.renderSongs() }
          </tbody>
        </table>  
      </div>
      <div className="col-6" id='artists'>
        <h1>Favorite artists</h1>
        <div className="row">
          {this.renderArtists()}
        </div>
        
      </div>
      </div>
    );
  }
}