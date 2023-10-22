import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-60 flex justify-evenly items-center bg-black  text-custom-pink text-4xl">
      {/* border-t-2 border-white  */}
      <div className="left flex justify-between items-center">
        <Link to="https://github.com/pooranjoyb/BeatBridge" className="mr-2 hover:scale-125">
          <FaGithub size={30} />
        </Link>
        <div>&copy; 2023 BeatBridge</div>
      </div>

      <div className="right">
        <div className="col-items text-4xl text-white">Services</div>
        <div className="col-items text-2xl hover:underline cursor-pointer">Discover</div>
        <div className="col-items text-2xl hover:underline cursor-pointer">Around You</div>
        <div className="col-items text-2xl hover:underline cursor-pointer">Top Artists</div>
        <div className="col-items text-2xl hover:underline cursor-pointer">Top Charts</div>
      </div>

    </div>
  );
};

export default Footer;
