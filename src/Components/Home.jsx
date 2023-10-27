import { useEffect, useMemo, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Background from "/Background.png";
import PageThree from "./PageThree";
import Features from "./Features";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  const animationControls = useMemo(() => {
    return {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    };
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const sectionControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // When the section is in the viewport, trigger the animation
      animationControls.visible && sectionControls.start("visible");
    } else {
      // When the section is out of the viewport, reset the animation
      animationControls.hidden && sectionControls.start("hidden");
    }
  }, [isInView, animationControls, sectionControls]);

  return (
    <>
      <div ref={sectionRef} className="bg-center bg-cover font-josh">
        <img
          src={Background}
          alt="background img"
          className="mt-[-2%] w-[100%]"
        />
      </div>
      <div className="absolute inset-0 items-center justify-center text-center">
        <Navbar />
        <motion.div
          initial="hidden"
          variants={animationControls}
          animate={sectionControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-48 text-white"
        >
          <p className="text-3xl font-bold tracking-tight">
            Your Gateway to a World of Rhythm
          </p>
          <p className="mt-1 font-bold tracking-tighter text-8xl">
            Welcome to BeatBridge!
          </p>
          <button className="rounded-full mt-20 font-bold bg-slate-100 px-6 py-2 shadow-xl hover:shadow-inner transition-all ease-in duration-200 text-2xl text-[#9a3412] tracking-wide">
            Explore
          </button>
        </motion.div>
      </div>

      <Features />
      <PageThree />
      <Footer />
    </>
  );
}
