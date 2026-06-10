import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Features() {
  const sectionRef = useRef(null);
  const sectionControls = useAnimation();

  // Detect if screen is mobile to serve optimal layout animations
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const animationControlsLeft = {
    hidden: { opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 40 : 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const animationControlsRight = {
    hidden: { opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 40 : 0 },
    visible: { opacity: 1, x: 0, y: 0 },
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
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Lower threshold ensures it fires easily on short screens
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
  }, [sectionControls]);

  return (
    <div
      ref={sectionRef}
      className="text-[#f3ead3] bg-[#2A2438] py-16 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl sm:text-6xl mb-4">
            Ready to make some noise?
          </h2>
          <p className="text-xl sm:text-2xl text-slate-400 font-light">
            Bringing Harmony to Your Ears.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-center">
          <motion.div
            initial="hidden"
            animate={sectionControls}
            variants={animationControlsLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="gap-6 flex flex-col w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left"
          >
            <h3 className="text-3xl sm:text-5xl font-semibold text-cyan-400">
              Get Started With Beat Bridge
            </h3>

            <div className="space-y-4">
              <ul className="text-xl font-bold list-disc pl-5 inline-block text-left">
                <li className="text-xl sm:text-2xl text-[#f3ead3]">
                  Who are we:
                </li>
                <ul className="text-base sm:text-lg list-circle pl-5 font-normal text-slate-300">
                  <li>We are passionate about connecting people with music</li>
                </ul>
              </ul>

              <ul className="text-xl list-disc pl-5 inline-block text-left">
                <li className="text-xl sm:text-3xl text-[#f3ead3]">
                  Our Mission:
                </li>
                <ul className="text-lg sm:text-xl font-bold list-circle pl-5 text-slate-300">
                  <li className="font-normal text-base sm:text-lg">
                    To provide a platform that resonates with every music lover
                  </li>
                </ul>
              </ul>
            </div>

            <Link to={"/player"} className="mt-4">
              <button className="rounded-full font-bold bg-gradient-to-r from-[#2A2438] to-[#5C5470] px-8 py-3 shadow-xl hover:scale-105 transition-all text-xl text-[#f3ead3] tracking-wide border border-[#f3ead3]/20">
                GET STARTED
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={sectionControls}
            variants={animationControlsRight}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-center justify-center w-full lg:w-1/2 relative h-72"
          >
            <div className="absolute rounded-full w-48 h-48 sm:w-64 sm:h-64 bg-violet-800/40 blur-sm z-0"></div>
            <img
              src="./guitar.png"
              className="w-48 h-48 sm:w-64 sm:h-64 z-10 rounded-full object-cover border-4 border-[#5C5470]/50"
              alt="guitar_img"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
