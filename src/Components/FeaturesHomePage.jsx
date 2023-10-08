import { Link } from "react-router-dom";
import Guitar from "../assests/guitar.jpg";

export default function FeaturesHomePage() {
  return (
    <>
      <div className="text-white bg-gradient-to-r from-[#FF86C8] to-[#FBA277]">
        <h1 className="flex font-josh font-bold justify-center text-7xl py-3">
          Ready to make some noise
        </h1>
        <div className="flex gap-4 p-5 justify-center items-center font-josh">
          <div className="gap-[2rem] flex flex-col">
            <h1 className="text-6xl p-5">Get Started With Beat Bridge</h1>
            <ul className="text-xl font-bold list-disc pl-5">
              <li className="text-2xl">Who are we:</li>
              <ul className="text-lg list-disc pl-5">
                <li>We are passionate about connecting people with music</li>
              </ul>
            </ul>
            <ul className="text-xl list-disc pl-5">
              <li className="text-3xl">Our Mission:</li>
              <ul className="text-2xl font-bold list-disc pl-5">
                <li className="text-xl">
                  To provide a platform that resonates with every music lover
                </li>
              </ul>
            </ul>
            <Link
              to={"/player"}
              className="text-2xl uppercase w-[40%] rounded-r-xl rounded-l-xl px-4 py-2 bg-white text-pink-500 flex justify-center items-center"
            >
              Get Started
            </Link>
          </div>
          <div className="flex flex-col items-center p-6 relative">
            <img
              src={Guitar}
              className="relative top-[13rem] right-[1.5rem] w-64 h-64 z-10 rounded-full"
              alt="guitat_img"
            />
            <div className="rounded-full w-64 z-0 h-64 bg-violet-800/60"></div>
          </div>
        </div>
      </div>
    </>
  );
}
