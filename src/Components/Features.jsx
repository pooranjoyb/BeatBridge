import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";

export default function Features() {
  const animationControls = useMemo(() => {
    return {
      hidden: { opacity: 0, x: -500 },
      visible: { opacity: 1, x: 0 },
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
      <div
        ref={sectionRef}
        className="text-white bg-gradient-to-r from-[#FF86C8] to-[#FBA277]"
      >
        <div>
          <div>
            <h1 className="flex justify-center pt-20 font-bold font-josh text-7xl">
              Ready to make some noise?
            </h1>
            <div className="flex items-center justify-center text-3xl font-josh">
              Bringing Harmony to Your Ears.
            </div>
          </div>
          <div className="flex items-center justify-center gap-16 font-josh">
            <motion.div
              initial="hidden"
              animate={sectionControls}
              exit="hidden"
              variants={animationControls}
              transition={{ duration: 0.5 }}
              className="gap-[2rem] flex flex-col"
            >
              <h1 className="p-5 text-6xl">Get Started With Beat Bridge</h1>
              <ul className="pl-5 text-xl font-bold list-disc">
                <li className="text-2xl">Who are we:</li>
                <ul className="pl-5 text-lg list-disc">
                  <li>We are passionate about connecting people with music</li>
                </ul>
              </ul>
              <ul className="pl-5 text-xl list-disc">
                <li className="text-3xl">Our Mission:</li>
                <ul className="pl-5 text-2xl font-bold list-disc">
                  <li className="text-xl">
                    To provide a platform that resonates with every music lover
                  </li>
                </ul>
              </ul>
              <Link to={"/player"}>
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
              <div className="z-0 w-64 h-64 rounded-full bg-violet-800/60"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
