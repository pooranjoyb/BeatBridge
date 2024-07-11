// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Components/Home.jsx"
import Discover from './Components/sidebars/discover.jsx'
import Aroundyou from './Components/sidebars/aroundyou.jsx'
import TopCharts from './Components/sidebars/topCharts.jsx'
import TopArtists from './Components/sidebars/topArtists.jsx'
import Navbar from './Components/Navbar.jsx'
import Player from './Components/Player.jsx'
import SongSearch from './Components/SongSearch.jsx'

const App = () => {
  return (
    <div>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/Aroundyou' element={<Aroundyou/>}/>
        <Route path='/Top' element={<TopArtists/>}/>
        <Route path='/Topchart' element={<TopCharts/>}/>
        <Route path='/player' element={<Player/>} />
        <Route path='/search' element={<SongSearch/>} />
       </Routes>
    </div>
  )
}

export default App
