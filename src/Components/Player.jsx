import { useEffect, useState } from "react";
import "../App.css";
import Background from "/Background.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from '../assets/search.svg';
import HeartFill from '../assets/heart-fill.svg';
import Pause from '../assets/pause.svg';
import Repeat from '../assets/repeat.svg';
import Shuffle from '../assets/shuffle.svg';
import Previous from '../assets/previous.svg';
import Next from '../assets/next.svg';
import FullScreen from '../assets/full-screen.svg'

export default function Player({ accessToken }) {
  const [searchInput, setSearchInput] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [clock, setClock] = useState(new Date());

  // Search songs functionality
  async function search() {
    var trackParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + accessToken,
      },
    };
    var trackId = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=track",
      trackParams,
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  const toggleFullScreen = () => {
    const element = document.querySelector(".fullscreen-div");

    if (element) {
      if (!isFullScreen) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
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
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <img onClick={search} src={Search} className="w-12 h-12" />
          </div>
          <div className="flex flex-col md:flex-row items-center w-10/12 lg:w-2/3 lg:h-96 p-8 my-8 bg-slate-300 bg-blur relative bg-opacity-40 shadow-lg rounded-2xl">
          <div className={`w-64 md:w-1/3 h-64 md:h-full bg-white mx-2 my-6 md:my-0 rounded-xl ${isFullScreen ? "fullscreen-styles" : ""}`}>
              <img className="w-full h-full rounded-xl" src="https://i.ibb.co/jWnV2tR/music-player.jpg" alt="music-player" />
            </div>
            <div className="w-full md:w-2/3 h-full bg-white mx-2 rounded-xl p-2 sm:p-4">
              <div className="h-28">
                <div className="w-full flex items-center justify-between">
                  <p className="font-bold text-2xl md:text-3xl">Shape of You</p>
                  <span className="flex items-center">
                    <img src={HeartFill} className="w-10 h-10 mx-3 cursor-pointer" />
                    <div className="text-red-lighter" onClick={toggleFullScreen}>
                      <img src={FullScreen} className="w-10 h-10 mx-3 cursor-pointer"/>
                    </div>
                  </span>
                </div>
                <div className="w-full flex items-center justify-between">
                  <p className="my-3 text-lg md:text-xl">Ed Sheeran</p>
                  <div className="time">
                    {clock.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </div>
                </div>
              </div>
              <div className="h-16 my-5">
                <div className="mx-3 bg-slate-200 h-3 rounded-full">
                  <div className="bg-rose-300 h-3 rounded-full" style={{width: '50%'}}></div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p>02:00</p>
                  <p>04:00</p>
                </div>
              </div>
              <div className="flex justify-around items-center">
                <img src={Shuffle} className="w-6 md:w-10 md:h-10 cursor-pointer" />
                <img src={Previous} className="w-6 md:w-10 md:h-10 cursor-pointer" />
                <div className="w-12 h-12 md:w-16 md:h-16 bg-stone-100 border-4 border-rose-400 rounded-full flex items-center justify-center">
                  <img src={Pause} className="w-6 md:w-10 md:h-10 cursor-pointer" />
                </div>
                <img src={Next} className="w-6 md:w-10 md:h-10 cursor-pointer" />
                <img src={Repeat} className="w-6 md:w-10 md:h-10 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
