import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home.jsx'
import Player from './Components/Player.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'

const MyApp = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/player",
    element: <Player/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MyApp} />
  </React.StrictMode>,
)
