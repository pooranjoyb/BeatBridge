import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Background from "/bag.jpg";
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
    <Navbar />
      <div ref={sectionRef} className="bg-cover bg-center font-josh h-screen">
        <img
          src={Background}
          alt="background img"
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div
        initial="hidden"
        variants={animationControls}
        animate={sectionControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="absolute inset-0 items-center text-center justify-center mt-48 text-[#f3ead3] z-50"
      >
        <p className="font-bold text-3xl tracking-tight">
          Your Gateway to a World of Rhythm
        </p>
        <p className="text-8xl font-bold mt-1 tracking-tighter">
          Welcome to BeatBridge!
        </p>
        <Link to='/search'>
          <button className="rounded-full mt-20 font-bold bg-gradient-to-r from-[#2A2438] to-[#5C5470] px-6 py-2 shadow-xl hover:shadow-inner transition-all ease-in duration-200 text-2xl text-[#f3ead3] tracking-wide">
            Explore
          </button>
        </Link>
      </motion.div>

      <Features />
      <PageThree />
      <Footer />
    </>
  );
}
