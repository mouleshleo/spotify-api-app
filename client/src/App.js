import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import './output.css';
import DarkMode from "./DarkMode";

const spotifyWebApi = new SpotifyWebApi();

function App() {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const [playlistDetails, setPlaylistDetails] = useState(null);

  useEffect(() => {
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
      spotifyWebApi.getUserPlaylists().then((response) => {
        setPlaylists(response.items);
      });
    }
  }, []);

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
    <div className="App flex flex-col justify-center items-center gap-10 dark:bg-slate-800 dark:text-white">
      <DarkMode />
      <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="text-center text-6xl font-bold pt-10 text-slate-800 dark:text-gray-100">Spotify Playlist Song Lister</h1>
      {!loggedIn && (
        <a href="http://localhost:8888" className="linkspotify border p-3 rounded-lg dark:text-gray-200 hover:bg-slate-800 hover:text-slate-50 border-slate-700 border-solid">
          Log in to Spotify
        </a>
      )}
      </div>
      {loggedIn && (
        <>
          <h2 className="text-2xl font-semibold text-slate-500 dark:text-gray-300">Select a Playlist</h2>
          {playlists.length > 0 ? (
            <ul>
              {playlists.map((playlist) => (

                <li key={playlist.id}  className="border text-black font-normal hover:bg-slate-800 hover:text-slate-50 hover:scale-110 dark:text-gray-100">
                  <button className="p-3"
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
              <h3 className="text-3xl text-slate-700 font-semibold dark:text-gray-300 pb-3">Playlist Details</h3>
              <p>Name: {playlistDetails.name}</p>
              {console.log(playlistDetails.name)}
              <p>Total Tracks: {playlistDetails.totalTracks}</p>
              <h4>Tracks:</h4>
              <ul className="list-decimal">
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
