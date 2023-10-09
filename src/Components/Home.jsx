import { motion } from "framer-motion";
import Background from "/Background.png";
import PageThree from "./PageThree";
import Features from "./Features";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-cover bg-center font-josh">
        <img
          src={Background}
          alt="background img"
          className="mt-[-2%] w-[100%]"
        />
      </div>
      <div className="absolute inset-0 items-center text-center justify-center">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 0.5 }}
          className="mt-48 text-white"
        >
          <p className="font-bold text-3xl tracking-tight">
            Your Gateway to a World of Rhythm
          </p>
          <p className="text-8xl font-bold mt-1 tracking-tighter">
            Welcome to BeatBridge!
          </p>
          <button className="rounded-full mt-20 font-bold bg-slate-100 px-6 py-2 shadow-xl hover:shadow-inner transition-all ease-in duration-200 text-2xl text-[#9a3412] tracking-wide">
            Explore
          </button>
        </motion.div>
      </div>

      <Features />
      <PageThree />
    </>
  );
}
