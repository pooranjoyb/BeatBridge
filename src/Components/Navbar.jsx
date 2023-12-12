import { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import Hamburger from "/hamburger.png";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className="fixed inset-0 items-center text-center justify-center text-white z-[60]">
                <div className="pt-1 pb-1 flex flex-row justify-between">
                    <div className="mx-auto flex flex-row mb-2">
                        <h1 className="font-normal text-4xl inline mt-1 ml-24 pr-2">
                            BEAT{" "}
                        </h1>
                        <h1 className="inline border-b-4 pt-2 font-serif tracking-tight border-white text-2xl">
                            Bridge
                        </h1>
                    </div>
                    <div className="pr-8 pt-2">
                        <img
                            src={Hamburger}
                            alt="hamburger menu"
                            className="w-8 h-8  cursor-pointer"
                            onClick={toggleMenu}
                        />
                    </div>
                </div>
                <hr className="border-y-[1px]" />
            </div>
            {
                menuOpen && (
                    <div
                        className="fixed inset-0 bg-gray-800 opacity-70 z-50"
                        onClick={closeMenu}
                    ></div>
                )
            }
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform ease-in-out duration-300 z-50`}
            >
                <div className="flex justify-end p-2">
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={closeMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <ul className="p-4 font-serif text-xl mb-4">
                    <li className="py-2 pl-4 hover:bg-gray-200 cursor-pointer flex items-center">
                        <FaHome className="mr-2" />
                        Discover
                    </li>
                    <li className="py-2 pl-4 hover:bg-gray-200 cursor-pointer flex items-center">
                        <GrGallery className="mr-2" />
                        Around You
                    </li>
                    <li className="py-2 pl-4 hover:bg-gray-200 cursor-pointer flex items-center">
                        <BsFillPeopleFill className="mr-2" />
                        Top Artists
                    </li>
                    <li className="py-2 pl-4 hover:bg-gray-200 cursor-pointer flex items-center">
                        {" "}
                        <FaHashtag className="mr-2" />
                        Top Charts
                    </li>
                </ul>
            </div>
        </>
    )
}


