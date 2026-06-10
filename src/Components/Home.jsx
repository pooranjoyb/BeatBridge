import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Background from "/bag.jpg";
import PageThree from "./PageThree";
import Features from "./Features";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const sectionControls = useAnimation();
  const sectionRef = useRef(null);

  const animationControls = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionControls.start("visible");
          } else {
            sectionControls.start("hidden");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    return () =>
      sectionRef.current && sectionObserver.unobserve(sectionRef.current);
  }, [sectionControls]);

  return (
    <div className="flex flex-col min-h-screen bg-[#2A2438] overflow-x-hidden">
      <Navbar />

      {/* Hero Section Container */}
      <div className="relative flex-grow flex items-center justify-center min-h-[80vh] md:min-h-screen px-4 py-20 text-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={Background}
            alt="background"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Layer - Centered via Flexbox */}
        <motion.div
          ref={sectionRef}
          initial="hidden"
          variants={animationControls}
          animate={sectionControls}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center"
        >
          <p className="font-bold text-lg md:text-3xl tracking-tight text-cyan-400 mb-2 uppercase">
            Your Gateway to a World of Rhythm
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-tight text-[#f3ead3]">
            Welcome to <span className="block sm:inline">BeatBridge!</span>
          </h1>

          <Link to="/search" className="mt-8 md:mt-12">
            <button className="rounded-full font-bold bg-gradient-to-r from-[#2A2438] to-[#5C5470] px-10 py-4 shadow-2xl hover:scale-105 hover:shadow-inner transition-all duration-300 text-xl md:text-2xl text-[#f3ead3] tracking-wide border border-white/10">
              Explore
            </button>
          </Link>
        </motion.div>
      </div>

      <Features />
      <PageThree />
      <Footer />
    </div>
  );
}
