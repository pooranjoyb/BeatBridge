import Player from "./Components/Player";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [accessToken, setAccessToken] = useState("");

  const SPOTIFY_CLIENT_ID = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_SECRET;

  useEffect(() => {
    // to access the token
    const authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        SPOTIFY_CLIENT_ID +
        "&client_secret=" +
        SPOTIFY_CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  return (
    <>
      <Player accessToken={accessToken} />
    </>
  );
}

export default App;
