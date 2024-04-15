import { useEffect, useState } from "react";
import "../App.css";
import Background from "/bag.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Search from '../assets/search.svg';
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
        <div className="absolute inset-0 mt-32">
          <div className="mx-auto w-[50rem]">
            <div className="flex items-center w-full h-12 rounded-lg  ">
             

              <input
                className="rounded-full font-bold bg-gradient-to-r from-[#2A2438] to-[#5C5470] px-6 py-2 shadow-xl hover:shadow-inner transition-all ease-in duration-200 text-2xl text-[#000000] tracking-wide"
                type="text"
                id="search"
                placeholder="Search your song..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                className="rounded-full font-bold bg-gradient-to-r from-[#2A2438] to-[#5C5470] px-6 py-2  text-[#000000] tracking-wide"
                onClick={search}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-screen bg-red-lightest">
          <div
            className={`fullscreen-div relative mt-24${isFullScreen
                ? "fullscreen-styles"
                : " bg-transparent shadow-lg rounded-lg w-[50rem]"
              }`}
          >
            <div className={`${isFullScreen ? "clock" : "no-clock"}`}>
              <div className="time">
                {clock.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
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
