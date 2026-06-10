import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHashtag } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
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
      <div className="w-full z-50 bg-[#2A2438] sticky top-0 shadow-md">
        {/* Mobile: Simple flex container with standard spacing 
                  Desktop (md and up): 3-Column structural grid configuration
                */}
        <div className="py-3 px-4 max-w-7xl mx-auto flex flex-row justify-between items-center md:grid md:grid-cols-3">
          {/* Left Column Spacer: Only occupies structural layout space on desktop layouts */}
          <div className="hidden md:flex justify-start"></div>

          {/* Middle Column Block: Perfectly centered on desktop windows, naturally inline on mobile devices */}
          <div className="flex justify-start md:justify-center text-center">
            <Link
              to="/"
              className="flex flex-row items-center justify-center cursor-pointer"
            >
              <h1 className="font-normal text-2xl sm:text-4xl inline pr-2 text-[#f3ead3] tracking-wider whitespace-nowrap">
                BEAT{" "}
              </h1>
              <h1 className="inline border-b-4 pt-1 font-serif tracking-tight border-[#f3ead3] text-xl sm:text-2xl text-[#f3ead3] whitespace-nowrap">
                Bridge
              </h1>
            </Link>
          </div>

          {/* Right Column Action Element: Holds the menu icon */}
          <div className="flex justify-end">
            <img
              src={Hamburger}
              alt="hamburger menu"
              className="w-8 h-8 cursor-pointer object-contain filter invert"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <hr className="border-y-[1px] border-[#352f44]" />
      </div>

      {/* Side Navigation Menu Overlay Panel Container */}
      {menuOpen && (
        <div
          className="fixed inset-0 opacity-70 z-50 bg-[#2A2438]"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#352f44] shadow-2xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out duration-300 z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-[#f3ead3] hover:text-[#5c5470] p-2 rounded bg-[#2A2438]"
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

        <ul className="p-4 font-serif text-xl space-y-2 bg-[#352f44] text-[#f3ead3]">
          <Link to="/" onClick={closeMenu} className="block">
            <li className="py-3 pl-4 rounded hover:bg-[#5c5470] cursor-pointer flex items-center transition-colors">
              <FaHome className="mr-3" />
              Discover
            </li>
          </Link>

          <li className="py-3 pl-4 rounded hover:bg-[#5c5470] cursor-pointer flex items-center transition-colors">
            <GrGallery className="mr-3" />
            Around You
          </li>
          <li className="py-3 pl-4 rounded hover:bg-[#5c5470] cursor-pointer flex items-center transition-colors">
            <BsFillPeopleFill className="mr-3" />
            Top Artists
          </li>
          <li className="py-3 pl-4 rounded hover:bg-[#5c5470] cursor-pointer flex items-center transition-colors">
            <FaHashtag className="mr-3" />
            Top Charts
          </li>
        </ul>
      </div>
    </>
  );
}
