import "../App.css";
import Background from "/Background.png";
import Hamburger from "/hamburger.png";
import FeaturesHomePage from "./FeaturesHomePage";

export default function Home() {
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
                className="w-[65px] h-[65px]"
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
        <FeaturesHomePage />
    </>
  );
}
