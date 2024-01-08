import React from 'react'
import "../App.css";
import Background from "/Background.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from '../assets/search.svg';
import ArtistCard from './ArtistCard';
// import HeartFill from '../assets/heart-fill.svg';
// import Pause from '../assets/pause.svg';
// import Repeat from '../assets/repeat.svg';
// import Shuffle from '../assets/shuffle.svg';
// import Previous from '../assets/previous.svg';
// import Next from '../assets/next.svg';
// import FullScreen from '../assets/full-screen.svg'

function TopArtists() {
  return (
    <>
        <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-lightest w-full">
          <div className="flex mt-16 justify-between bg-white rounded-full w-10/12 lg:w-2/3">
            <input 
              className="ml-3 rounded-full px-1 py-3" 
              type="text" 
              id="search"
              placeholder="Search..."
            />
            <img src={Search} className="w-12 h-12" />
            </div>

            <div className="flex flex-wrap justify-center items-center  box-border gap-7 p-8 my-8 bg-slate-600 bg-blur bg-opacity-40 shadow-lg rounded-2xl">

                <ArtistCard/>
                <ArtistCard/>
                <ArtistCard/>

            </div>
        </div>
        <Footer />
      </div>
    
    </>
  )
}

export default TopArtists
