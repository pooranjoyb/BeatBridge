import { useEffect, useRef } from "react";
import page3 from "/githubIcon.png";
import { motion, useAnimation } from "framer-motion";

export default function PageThree() {
  const animationControls = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionRef = useRef(null);
  const sectionControls = useAnimation();

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
        threshold: 0.2,
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
      className="relative min-h-[600px] bg-[#2A2438] flex flex-col lg:flex-row items-center justify-center px-6 py-16 overflow-hidden max-w-7xl mx-auto w-full"
      ref={sectionRef}
    >
      <motion.div
        initial="hidden"
        animate={sectionControls}
        variants={animationControls}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 text-[#f3ead3]"
      >
        <h2 className="text-4xl sm:text-6xl font-bold leading-tight mb-2">
          Wanna
        </h2>
        <h2 className="text-4xl sm:text-6xl font-bold leading-tight text-cyan-400 mb-2">
          Contribute to
        </h2>
        <h2 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
          BeatBridge?
        </h2>

        <div className="bg-gradient-to-r from-[#2A2438] to-[#5C5470] p-[2px] rounded-full shadow-lg max-w-md w-full">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/pooranjoyb/BeatBridge"
            className="block text-center bg-[#2A2438] hover:bg-transparent transition-colors py-3 px-6 rounded-full text-sm sm:text-lg font-semibold tracking-wide border border-[#f3ead3]/10 text-[#f3ead3]"
          >
            github.com/pooranjoyb/BeatBridge
          </a>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={sectionControls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 0.2, scale: 1, transition: { duration: 0.5 } },
        }}
        className="absolute lg:relative w-72 h-72 sm:w-96 sm:h-96 lg:w-1/2 flex items-center justify-center opacity-20 lg:opacity-100 z-0 lg:z-10 mt-8 lg:mt-0"
      >
        <img
          src={page3}
          alt="bg img"
          className="w-full h-full object-contain filter invert max-w-[300px] sm:max-w-none"
        />
      </motion.div>
    </div>
  );
}
