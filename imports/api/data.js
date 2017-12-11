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
  'getMyTopArtists'() {
    let spotifyApi = new SpotifyWebApi(),
        response;
    spotifyApi.refreshAndUpdateAccessToken();
    const syncFunction = Meteor.wrapAsync(spotifyApi.getMyTopArtists, spotifyApi);    
    response = syncFunction('');
    return response.body;
  },
  'getMyTopTracks'() {
    let spotifyApi = new SpotifyWebApi(),
        response;
    spotifyApi.refreshAndUpdateAccessToken();
    const syncFunction = Meteor.wrapAsync(spotifyApi.getMyTopTracks, spotifyApi);
    response = syncFunction('');
    return response.body;
  },
  'getAlbum'(albumId) {
    let spotifyApi = new SpotifyWebApi();
    let response = spotifyApi.getAlbum(albumId);
    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.getAlbum(albumId);
    }
    return response.data.body;
  },
  'getMe'() {
    let spotifyApi = new SpotifyWebApi();
    let response = spotifyApi.getMe();
    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.getMySavedTracks({});
    }
    return response.data.body;
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
  },
  'searchAlbums'(query, options) {
    options = options || {};
    let spotifyApi = new SpotifyWebApi();
    let response = spotifyApi.searchAlbums(query, options);
    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.searchAlbums(query, options);
    }
    console.log(response.data.body);
    return response.data.body;
  },
  'searchArtists'(query, options) {
    options = options || {};
    let spotifyApi = new SpotifyWebApi();
    let response = spotifyApi.searchArtists(query, options);
    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.searchArtists(query, options);
    }
    console.log(response.data.body);
    return response.data.body;
  },
  'searchSongs'(query, options) {
    options = options || {};
    let spotifyApi = new SpotifyWebApi();
    let response = spotifyApi.searchSongs(query, options);
    if (checkTokenRefreshed(response, spotifyApi)) {
      response = spotifyApi.searchSongs(query, options);
    }
    console.log(response.data.body);
    return response.data.body;
  }
});

