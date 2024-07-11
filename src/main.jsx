import React from "react";
import ReactDOM from "react-dom/client";
// import Home from "./Components/Home.jsx";
// import SongSearch from "./Components/SongSearch.jsx";
// import Player from "./Components/Player.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
// const MyApp = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/player",
//     element: <Player />,
//   },
//   {
//     path: "/search",
//     element: <SongSearch />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
);
