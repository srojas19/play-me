import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

function checkTokenRefreshed(response, api) {
  if (response.error && response.error.statusCode === 401) {
    api.refreshAndUpdateAccessToken();
    return true;
  } else {
    return false;
  }
}

Meteor.methods({
  'getTopSongs'() {
    let spotifyApi = new SpotifyWebApi();

    // let response = 

  },
  'typeaheadTracks'(query, options) {
    options = options || {};

    // guard against client-side DOS: hard limit to 50
    if (options.limit) {
      options.limit = Math.min(6, Math.abs(options.limit));
    } else {
      options.limit = 6;
    }

    // Spotify call.
    let spotifyApi = new SpotifyWebApi();
    let response = spotifyApi.searchTracks(query, { limit: options.limit });

    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.searchTracks(query, { limit: options.limit });
    }

    return response.data.body.tracks.items;
  },
  'createPlaylist'(selectedTracks, playlistName) {
    if (!selectedTracks || !playlistName || selectedTracks.length > 20) throw new Error("No tracks or playlist name specified");
    let spotifyApi = new SpotifyWebApi();
    let response = spotifyApi.createPlaylist(Meteor.user().services.spotify.id, playlistName, { public: false });
    
    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.createPlaylist(Meteor.user().services.spotify.id, playlistName, { public: false });
    }

    // Put songs into the playlist.
    let uris = selectedTracks.map(function(track) {
      return track.uri;
    });
    spotifyApi.addTracksToPlaylist(Meteor.user().services.spotify.id, response.data.body.id, uris, {});

    return response.data.body;
  },
  'getFollowerCount'() {
    let spotifyApi = new SpotifyWebApi();
    let response = spotifyApi.getMe();
    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.getMySavedTracks({});
    }

    return response;
    // return response.data.body.followers.total;

  },
  'getSavedTracksCount'() {
    let spotifyApi = new SpotifyWebApi();
    let response = spotifyApi.getMySavedTracks({});
    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.getMySavedTracks({});
    }

    return response.data.body.total;
  },
  'getSavedPlaylists'() {
    let spotifyApi = new SpotifyWebApi();
    let response = spotifyApi.getUserPlaylists(Meteor.user().services.spotify.id, {});
    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.getUserPlaylists(Meteor.user().services.spotify.id, {});
    }

    return response.data.body;
  }
});