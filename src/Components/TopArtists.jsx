import React from 'react'
import "../App.css";
import Background from "/Background.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

import ArtistCard from './ArtistCard';

function TopArtists() {
  return (
    <>
        <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-lightest w-full">

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
