import React from "react";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import ReactDOM from "react-dom/client";
import SongSearch from "./Components/SongSearch.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";

const MyApp = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/player",
    element: <App />,
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
