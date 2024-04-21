import React from "react";
import Home from "./Components/Home.jsx";
import ReactDOM from "react-dom/client";
import SongSearch from "./Components/SongSearch.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import Player from "./Components/Player.jsx";

const MyApp = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/player",
    element: <Player />,
  },
  {
    path: "/search",
    element: <SongSearch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={MyApp} />
  </React.StrictMode>,
);
