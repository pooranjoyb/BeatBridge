import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Features() {
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
            // When the section is in the viewport, trigger the animation
            animationControls.visible && sectionControls.start("visible");
          } else {
            // When the section is out of the viewport, reset the animation
            animationControls.hidden && sectionControls.start("hidden");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
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
      <div
        ref={sectionRef}
        className="text-white bg-gradient-to-r from-[#FF86C8] to-[#FBA277]"
      >
        <div>
          <div>
            <h1 className="flex font-bold justify-center text-7xl pt-20">
              Ready to make some noise?
            </h1>
            <div className="flex text-3xl justify-center items-center">
              Bringing Harmony to Your Ears.
            </div>
          </div>
          <div className="flex gap-16 justify-center items-center">
            <motion.div
              initial="hidden"
              animate={sectionControls}
              exit="hidden"
              variants={animationControls}
              transition={{ duration: 0.5 }}
              className="gap-[2rem] flex flex-col"
            >
              <h1 className="text-6xl p-5">Get Started With Beat Bridge</h1>
              <ul className="text-xl font-bold list-disc pl-5">
                <li className="text-2xl">Who are we:</li>
                <ul className="text-lg list-disc pl-5">
                  <li>We are passionate about connecting people with music</li>
                </ul>
              </ul>
              <ul className="text-xl list-disc pl-5">
                <li className="text-3xl">Our Mission:</li>
                <ul className="text-2xl font-bold list-disc pl-5">
                  <li className="text-xl">
                    To provide a platform that resonates with every music lover
                  </li>
                </ul>
              </ul>
              <Link to={"/player"} className="w-[27%]">
                <button className="rounded-full font-bold bg-slate-100 px-6 py-2 shadow-xl hover:shadow-inner transition-all ease-in duration-200 text-2xl text-[#9a3412] tracking-wide">
                  GET STARTED
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={sectionControls}
              exit="hidden"
              variants={{
                hidden: { opacity: 0, x: 500 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center mb-40"
            >
              <img
                src="./guitar.png"
                className="relative top-[13rem] right-[1.5rem] w-64 h-64 z-10 rounded-full"
                alt="guitat_img"
              />
              <div className="rounded-full w-64 z-0 h-64 bg-violet-800/60"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
