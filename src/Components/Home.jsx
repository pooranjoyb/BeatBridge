import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Background from "/Background.png";
import PageThree from "./PageThree";
import Features from "./Features";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const animationControls = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationControls.visible && sectionControls.start("visible");
          } else {
            animationControls.hidden && sectionControls.start("hidden");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sectionControls = useAnimation();

  return (
    <>
      <div ref={sectionRef} className="bg-cover bg-center font-josh h-screen">
        <img
          src={Background}
          alt="background img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Navbar />
        <motion.div
          initial="hidden"
          variants={animationControls}
          animate={sectionControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className=" text-white text-center"
        >
          <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight">
            Your Gateway to a World of Rhythm
          </p>
          <p className="text-5xl sm:text-6xl lg:text-8xl font-bold mt-1 tracking-tighter">
            Welcome to BeatBridge!
          </p>
          <Link to="/search">
            <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold bg-slate-100 text-xl sm:text-2xl text-[#FF86C8] hover:bg-slate-50 hover:text-[#ff34a3] shadow-xl transition-all ease-in duration-400">
              Explore
            </button>
          </Link>
        </motion.div>
      </div>

      <Features />
      <PageThree />
      <Footer />
    </>
  );
}
