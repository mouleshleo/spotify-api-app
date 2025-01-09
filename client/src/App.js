import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyWebApi = new SpotifyWebApi();

function App() {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const [playlistDetails, setPlaylistDetails] = useState(null);

  useEffect(() => {
    // Extract token from URL
    const token = window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        const parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {}).access_token;

    if (token) {
      setSpotifyToken(token);
      spotifyWebApi.setAccessToken(token);
      setLoggedIn(true);
      window.location.hash = "";
      // Fetch user's playlists
      spotifyWebApi.getUserPlaylists().then((response) => {
        setPlaylists(response.items); // Save playlists to state
      });
    }
  }, []);

  // Fetch playlist tracks when a playlist is selected
  const fetchPlaylistTracks = (playlistId) => {
    spotifyWebApi.getPlaylist(playlistId).then((response) => {
      setPlaylistDetails({
        name: response.name,
        totalTracks: response.tracks.total,
        tracks: response.tracks.items.map((item) => item.track.name),
      });
    });
  };

  return (
    <div className="App">
      {!loggedIn && (
        <a href="http://localhost:8888" className="linkspotify">
          Log in to Spotify
        </a>
      )}
      {loggedIn && (
        <>
          <h2>Select a Playlist</h2>
          {playlists.length > 0 ? (
            <ul>
              {playlists.map((playlist) => (
                <li key={playlist.id}>
                  <button
                    onClick={() => {
                      setSelectedPlaylistId(playlist.id);
                      fetchPlaylistTracks(playlist.id);
                    }}
                  >
                    {playlist.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading playlists...</p>
          )}

          {selectedPlaylistId && playlistDetails && (
            <div>
              <h3>Playlist Details</h3>
              <p>Name: {playlistDetails.name}</p>
              {console.log(playlistDetails.name)}
              <p>Total Tracks: {playlistDetails.totalTracks}</p>
              <h4>Tracks:</h4>
              <ul>
                {playlistDetails.tracks.map((track, index) => (
                  <li key={index}>{track}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
