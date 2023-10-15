import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-16 flex justify-center items-center bg-custom-pink border-t-2 border-white">
      <Link to="https://github.com/pooranjoyb/BeatBridge" className="mr-2">
        <FaGithub size={24} />
      </Link>
      <div>&copy; 2023 BeatBridge</div>
    </div>
  );
};

export default Footer;
