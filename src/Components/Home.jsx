import React, { useState } from "react";
import "../App.css";
import Background from "/Background.png";
import Hamburger from "/hamburger.png";
import FeaturesHomePage from "./FeaturesHomePage";
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <div className="bg-cover bg-center font-josh">
        <img src={Background} alt="bg img" className="w-full" />
      </div>
      <div className="absolute inset-0 items-center text-center justify-center text-white">
        <div className="pt-6 pb-4 flex flex-row justify-between">
          <div className="mx-auto flex flex-row">
            <h1 className="font-normal text-7xl inline mt-5 ml-24 pr-2">
              BEAT{" "}
            </h1>
            <h1 className="inline border-b-4 pt-6 font-serif tracking-tight border-white text-5xl">
              Bridge
            </h1>
          </div>
          <div className="pr-8 pt-4">
            <img
              src={Hamburger}
              alt="hamburger menu"
              className="w-[65px] h-[65px]  cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <hr className="border-y-[1px]" />

        <div className="mt-24">
          <p className="font-bold text-3xl tracking-tight">
            Your Gateway to a World of Rhythm
          </p>
          <p className="text-8xl font-bold mt-1 tracking-tighter">
            Welcome to BeatBridge!
          </p>
          <button className="rounded-full mt-20 font-bold bg-slate-100 px-6 py-2 shadow-xl hover:shadow-inner transition-all ease-in duration-200 text-2xl text-[#9a3412] tracking-wide">
            Explore
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 opacity-70 z-50"
          onClick={closeMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
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
      <FeaturesHomePage />
    </>
  );
}
