import React, { useEffect, useRef } from "react";
import page3 from "/page3.png";
import { motion, useAnimation } from "framer-motion";

export default function PageThree() {
  const animationControls = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
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
    <div
      className="relative w-full sm:h-[800px] md:h-[530px] h-[260px]"
      style={{ overflow: "hidden" }}
      ref={sectionRef}
    >
      <img src={page3} alt="bg img" className="absolute z-0" />

      <motion.div
        initial="hidden"
        animate={sectionControls}
        exit="hidden"
        variants={animationControls}
        transition={{ duration: 0.5 }}
        className="absolute top-10 left-10 z-10"
      >
        <p className="text-[5vw]  font-semibold flex flex-col ">
          <span> Wanna</span> <span>Contribute to </span>
          <span>BeatBridge?</span>
        </p>

        <div className="absolute mt-10 font-bold text-2xl hover:bg-black hover:text-white transition ease-in-out transit border-2  border-black text-black py-2 px-10 text-center rounded-full z-10">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/pooranjoyb/BeatBridge"
          >
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
