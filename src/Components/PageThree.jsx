import { useEffect, useRef } from "react";
import page3 from "/githubIcon.png";
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
    <div
      className="relative h-[800px] bg-[#2A2438]"
      style={{ overflow: "hidden" }}
      ref={sectionRef}
    >


      <motion.div
        initial="hidden"
        animate={sectionControls}
        exit="hidden"
        variants={animationControls}
        transition={{ duration: 0.5 }}
        className="absolute mt-20"
        style={{ zIndex: 2, top: "20%", left: "10%", color: '#f3ead3', backgroundColor: '#2A2438' }}
      >
        <p
          style={{
            fontSize: "5vw",
            fontWeight: "600",
            lineHeight: "70px",
            textAlign: "center",
          }}
        >
          Wanna
        </p>
        <p style={{ fontSize: "5vw", fontWeight: "600", lineHeight: "70px" }}>
          Contribute to
        </p>
        <p
          style={{
            fontSize: "5vw",
            fontWeight: "600",
            lineHeight: "70px",
            textAlign: "center",
          }}
        >
          BeatBridge?
        </p>
        <div
          className="absolute bg-gradient-to-r from-[#2A2438] to-[#5C5470] "
          style={{
            zIndex: 2,
            textAlign: "center",
            bottom: "-80%",
            maxWidth: "600px",
            height: "50px",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/pooranjoyb/BeatBridge"
            style={{ fontSize: "1.2vw", fontWeight: "600", padding: '2rem' }}
          >
            github.com/pooranjoyb/BeatBridge
          </a>
        </div>
      </motion.div>

      <motion.img
        initial="hidden"
        animate={sectionControls}
        exit="hidden"
        variants={{
          hidden: { opacity: 0, x: 500 },
          visible: { opacity: 1, x: 0 },
        }}
        src={page3} alt="bg img" className="absolute right-0 w-50 top-28" style={{ zIndex: 1, filter: 'invert(1)' }} />
    </div>
  );
}