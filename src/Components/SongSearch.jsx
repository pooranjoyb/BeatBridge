import { useEffect, useState } from "react";
import API_Controller from "../../utils/API_Controller";
import { useNavigate } from "react-router-dom";

// assets
import Background from "/bag.jpg";
import Search from "../assets/search.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";

export default function SongSearch() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("Trending");
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);

  const clientID = import.meta.env.VITE_CLIENT_ID;
  const secret = import.meta.env.VITE_CLIENT_SECRET;

  const user = new API_Controller(clientID, secret);

  useEffect(() => {
    user?.getToken().then((data) => {
      setToken(data);
    });
    getTracks();
  }, []);

  const getTracks = async () => {
    try {
      await user
        .searchSong(searchInput, token)
        .then((data) => {
          setTracks(data.tracks.items);
        })
        .catch((err) => {
          console.log("Fetch Failed " + err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const redirectSongData = (elem) => {
    navigate("/player", { state: elem });
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Navbar />

      <div className="flex flex-col items-center flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar Wrapper */}
        <div className="flex mt-8 mb-10 items-center justify-between bg-white rounded-full w-full max-w-2xl shadow-xl overflow-hidden border border-[#5C5470]/30">
          <input
            className="ml-5 rounded-full w-full py-3 text-slate-800 bg-transparent text-lg focus:outline-none"
            type="text"
            id="search"
            placeholder="Search songs, artists..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") getTracks();
            }}
          />
          <div
            onClick={getTracks}
            className="bg-[#352F44] p-3 cursor-pointer hover:bg-[#5C5470] transition-colors flex items-center justify-center"
          >
            <img
              src={Search}
              className="w-6 h-6 filter invert"
              alt="search icon"
            />
          </div>
        </div>

        {/* Tracks Responsive Grid View */}
        {tracks && tracks.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-12">
            {tracks.map((elem, index) => (
              <div
                key={index}
                className="bg-[#2A2438]/80 backdrop-blur-md border border-white/10 shadow-xl rounded-xl p-4 flex flex-col justify-between transform hover:scale-[1.02] transition-all"
              >
                <div className="group relative rounded-lg overflow-hidden shadow-md">
                  <img
                    className="w-full block object-cover aspect-square"
                    src={elem.album.images[1].url}
                    alt="Album Image"
                  />
                  <div className="absolute bg-black/60 opacity-0 group-hover:opacity-100 w-full h-full top-0 left-0 flex items-center justify-center gap-4 transition-all duration-200">
                    <button className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-transform transform translate-y-2 group-hover:translate-y-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </button>

                    <button
                      className="p-3 bg-cyan-500 hover:bg-cyan-400 rounded-full text-white scale-110 shadow-lg transition-transform transform translate-y-2 group-hover:translate-y-0"
                      onClick={() => redirectSongData(elem)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                      </svg>
                    </button>

                    <button className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-transform transform translate-y-2 group-hover:translate-y-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="pt-4 px-1 text-left">
                  <h3 className="text-[#f3ead3] font-bold text-base truncate">
                    {elem.name}
                  </h3>
                  <p className="text-slate-400 text-sm truncate">
                    {elem.artists[0].name}
                  </p>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="flex items-center justify-center text-[#f3ead3] font-medium text-lg h-64 animate-pulse">
            Loading songs ...
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
