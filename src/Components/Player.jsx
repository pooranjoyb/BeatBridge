import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import API_Controller from "../../utils/API_Controller";

import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";
import Background from "/bag.jpg";

const clientID = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

export default function Player() {
  const location = useLocation();
  const navigatorData = location.state;
  const [token, setToken] = useState("");
  const [songData, setSongData] = useState(null);
  const audioRef = useRef(new Audio());

  const user = new API_Controller(clientID, secret);

  useEffect(() => {
    setSongData(navigatorData);

    const fetchData = async () => {
      try {
        const fetchedToken = await user.getToken();
        setToken(fetchedToken);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    if (navigatorData) {
      fetchData();
    }
  }, [navigatorData]);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (songData && token) {
          const track = await user.getTrack(songData.href, token);
          if (track.preview_url) {
            audioRef.current.src = track.preview_url;
            audioRef.current.play();
          }
        }
      } catch (error) {
        console.error("Error loading track:", error);
      }
    };

    playAudio();
  }, [songData, token]);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex flex-col relative pb-16"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Navbar />

      <div className="flex-grow flex items-center justify-center p-4">
        {songData && token ? (
          <div className="w-full max-w-xl bg-[#2A2438]/90 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
                <img
                  src={songData.album.images[1].url}
                  alt="Album Art"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-slate-100 object-cover shadow-md"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1 space-y-1 font-semibold">
                  <p className="text-cyan-400 text-xs tracking-wider uppercase truncate">
                    {songData.album.name}
                  </p>
                  <p className="text-[#f3ead3] text-xl sm:text-2xl truncate">
                    {songData.name}
                  </p>
                  <h2 className="text-slate-400 text-sm font-normal truncate">
                    {songData.artists[0].name}
                  </h2>
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative pt-4">
                  <div className="bg-slate-700 h-1 w-full rounded-full overflow-hidden">
                    <audio ref={audioRef} />
                    <div className="bg-cyan-500 h-full w-1/3 rounded-full"></div>
                  </div>
                  {/* Progress Indicator Pin */}
                  <div className="absolute left-1/3 top-3 w-3 h-3 bg-white rounded-full shadow ring-2 ring-cyan-500"></div>
                </div>
                <div className="flex justify-between text-xs font-medium text-slate-400 tabular-nums">
                  <div className="text-cyan-400">1:15</div>
                  <div>3:20</div>
                </div>
              </div>
            </div>

            {/* Controller Toolbar */}
            <div className="bg-[#352f44] px-6 py-4 flex items-center justify-between text-[#f3ead3]">
              <button
                type="button"
                aria-label="Add to favorites"
                className="hover:text-cyan-400 transition-colors"
              >
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-6">
                <button
                  type="button"
                  aria-label="Previous"
                  className="hover:text-cyan-400 transition-colors"
                >
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="m10 12 8-6v12l-8-6Z"
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6v12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Pause"
                  className="bg-[#f3ead3] text-[#2A2438] w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <svg width="20" height="22" fill="currentColor">
                    <rect x="4" y="3" width="4" height="16" rx="1" />
                    <rect x="12" y="3" width="4" height="16" rx="1" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Next"
                  className="hover:text-cyan-400 transition-colors"
                >
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M14 12 6 6v12l8-6Z"
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 6v12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <button
                type="button"
                className="rounded-md text-xs font-semibold px-2 py-1 ring-1 ring-slate-500 hover:bg-slate-500 transition-colors"
              >
                1x
              </button>
            </div>
          </div>
        ) : (
          <div className="text-white text-xl animate-pulse font-medium bg-[#2A2438]/80 px-6 py-3 rounded-full">
            Loading Track View...
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
