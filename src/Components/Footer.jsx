import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-16 flex justify-center items-center bg-gradient-to-r from-[#352F44] to-[#5C5470] text-[#f3ead3] text-2xl">

      <Link to="https://github.com/pooranjoyb/BeatBridge" className="mr-2 hover:scale-125 ">
        <FaGithub size={30} />
      </Link>
      <div>&copy; 2023 BeatBridge</div>

    </div>
  );
};

export default Footer;
