// import { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
// import Hamburger from "/hamburger.png";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
             <ul className="p-4 font-serif text-xl mb-4 text-BLACK bg-[#352f44] text-[#f3ead3]">
               <Link to="/discover">   <li className="py-2 pl-4 hover:bg-[#5c5470] cursor-pointer flex items-center">
                        <FaHome className="mr-2" />
                        Discover
                    </li>
                    </Link> 
                 <Link to="/Aroundyou" ><li className="py-2 pl-4 hover:bg-[#5c5470] cursor-pointer flex items-center">
                        <GrGallery className="mr-2" />
                        Around You
                    </li>
                    </Link>  
                <Link to="/Top"> <li className="py-2 pl-4 hover:bg-[#5c5470] cursor-pointer flex items-center">
                        <BsFillPeopleFill className="mr-2" />
                        Top Artists
                    </li></Link>   
                 <Link to="/Topcharts" ><li className="py-2 pl-4 hover:bg-[#5c5470] cursor-pointer flex items-center">
                        {" "}
                        <FaHashtag className="mr-2 " />
                        Top Charts
                    </li>
                    </Link>  
                </ul>
    </div>
  )
}

export default Sidebar
 