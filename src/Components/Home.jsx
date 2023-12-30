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
      }
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
      <div ref={sectionRef} className="bg-cover bg-center font-josh">
        <img
          src={Background}
          alt="background img"
          className="mt-[-2%] w-[100%]"
        />
      </div>
      <div className="absolute inset-0 items-center text-center justify-center">
        <Navbar />
        <motion.div
          initial="hidden"
          variants={animationControls}
          animate={sectionControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-48 text-white"
        >
          <p className="font-bold text-3xl tracking-tight">
            Your Gateway to a World of Rhythm
          </p>
          <p className="text-8xl font-bold mt-1 tracking-tighter">
            Welcome to BeatBridge!
          </p>
          <Link to='/search'>
            <button className="rounded-full mt-20 font-bold bg-slate-100 px-6 py-2 shadow-xl hover:shadow-inner hover:transition-all ease-in hover:duration-400 text-2xl text-[#9a3412] tracking-wide">
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
