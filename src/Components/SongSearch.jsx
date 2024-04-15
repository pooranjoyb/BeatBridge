import { useEffect, useState } from "react";
import "../App.css";
import Background from "/bag.jpg";
import Search from '../assets/search.svg';
import Navbar from "./Navbar";
import Footer from "./Footer";

import API_Controller from "../../utils/API_Controller";

export default function SongSearch() {
    const [searchInput, setSearchInput] = useState("Trending");
    const [token, setToken] = useState('')
    const [tracks, setTracks] = useState([]);

    const clientID = import.meta.env.VITE_CLIENT_ID;
    const secret = import.meta.env.VITE_CLIENT_SECRET;

    const user = new API_Controller(clientID, secret)

    useEffect(() => {
        user?.getToken().then((data) => {
            setToken(data)
        })
        console.log("Set token ran")
    }, [])

    useEffect(() => {
        getTracks();
        console.log("tracks")
    }, [])

    const getTracks = async () => {
        try {
            await user.searchSong(searchInput, token).then((data) => {
                setTracks(data.tracks.items)
            }).catch((err) => {
                console.log("Fetch Failed " + err)
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div
                className="w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${Background})` }}
            >
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-screen w-full">
                    <div className="flex mt-16 justify-between bg-white rounded-full w-10/12 lg:w-2/3">
                        <input
                            className="ml-3 rounded-full w-full px-1 py-3"
                            type="text"
                            id="search"
                            placeholder="Search..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter')
                                    getTracks();
                            }}
                        />
                        <img onClick={getTracks} src={Search} className="w-12 h-12 cursor-pointer" />
                    </div>
                    <section className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-10">
                        {
                            tracks.map((elem, index) => {
                                return (
                                    <div key={index} className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-lg rounded p-3 w-2/3 m-10">
                                        <div className="group relative">
                                            <img className="w-full block rounded" src={elem.album.images[1].url} alt="Album Image" />
                                            <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                                                <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                    </svg>
                                                </button>

                                                <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                                    </svg>
                                                </button>

                                                <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-[#f3ead3] font-bold text-lg">{elem.album.name}</h3>
                                            <p className="text-[#f3ead3]">{elem.artists[0].name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </section>

                </div>
                <Footer />
            </div>
        </>
    );
}
