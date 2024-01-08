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
        className="text-white sm:px-20 px-10 py-10 grid grid-cols-2 sm:grid-cols-2 gap-10 bg-gradient-to-r from-[#FF86C8] to-[#FBA277]"
      >
        {/* 1st div */}
        <div className="col-span-2 md:col-span-2 text-center">
          <h1 className="font-bold text-5xl md:text-7xl ">
            Ready to make some noise?
          </h1>
          <div className="text-2xl mt-2 md:text-3xl">
            Bringing Harmony to Your Ears.
          </div>
        </div>

        {/* 2nd div */}

        <div className="col-span-2 sm:col-span-1 text-center">
          <motion.div
            initial="hidden"
            animate={sectionControls}
            exit="hidden"
            variants={animationControls}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl">
              Get Started With Beat Bridge
            </h1>
            <ul className="text-lg md:text-xl font-bold list-disc ">
              <li className="text-2xl my-2">Who are we:</li>
              <ul className="text-base md:text-lg list-inside ">
                <li>We are passionate about connecting people with music</li>
              </ul>
            </ul>
            <ul className="text-lg md:text-xl font-bold list-disc">
              <li className="text-2xl my-2">Our Mission:</li>
              <ul className="text-base md:text-lg  list-inside">
                <li className="text-lg">
                  To provide a platform that resonates with every music lover
                </li>
              </ul>
            </ul>
            <Link to={"/player"} className="w-full md:w-[27%]">
              <button className="rounded-full my-5 font-bold bg-slate-100 px-4 md:px-6 py-2 md:py-3 shadow-xl hover:shadow-inner transition-all ease-in duration-200 text-xl md:text-2xl text-[#FF86C8] tracking-wide">
                GET STARTED
              </button>
            </Link>
          </motion.div>
        </div>
        {/* 3rd div */}
        <div className="col-span-2 sm:col-span-1">
          <motion.div
            initial="hidden"
            animate={sectionControls}
            exit="hidden"
            variants={{
              hidden: { opacity: 0, x: 500 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="flex justify-center sm:justify-end relative items-center"
          >
            <img
              src="./guitar.png"
              className=" w-40 h-40 bottom-4  md:w-64 md:h-64 z-10 rounded-full "
              alt="guitar_img"
            />
            <div className="rounded-full absolute right-5 top-3 w-40 h-40 z-0 md:w-64 md:h-64 bg-violet-800/60"></div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
