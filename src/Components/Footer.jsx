import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-16 flex justify-center items-center gap-4 bg-gradient-to-r from-[#352F44] to-[#5C5470] text-[#f3ead3] text-lg sm:text-2xl shadow-inner px-4 border-t border-white/5">
      <Link
        to="https://github.com/pooranjoyb/BeatBridge"
        className="hover:scale-110 transition-transform p-1"
      >
        <FaGithub size={28} />
      </Link>
      <div className="tracking-wide font-light">&copy; 2023 BeatBridge</div>
    </div>
  );
};

export default Footer;
