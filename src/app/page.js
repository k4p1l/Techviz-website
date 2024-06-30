"use client";
import Image from "next/image";
import "../../public/css/Home.css";
import img from "../../public/images/Untitled.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import About from "./about/page";
import HowItWorks from "./howitworks";
import Problem from "./problem";
import TheSolution from "./solution";
import { Link, Element } from "react-scroll";

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className=" relative h-[510vh]">
      <main ref={container} className="relative h-[200vh]">
        <Section1 scrollYProgress={scrollYProgress} />
        <Element name="theProblem">
          <Section2 scrollYProgress={scrollYProgress} />
        </Element>
      </main>
    </div>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.98, 1], [1, 0.8, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"]
  );
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 rounded-2xl h-screen bg-[#ffe2d2] text-[3.5vw] pb-[10vh]"
    >
      <Image className="w-full h-full object-contain z-0" src={img} alt="" />
      <div className="content absolute top-2 left-6 ">
        <h1 className="techviz z-50 text-[#ff8543]">TECHVIZ</h1>
        <p className="text-[#ff8543] btm-text">
          Enhancing <span>Mobility</span> and <span>Independence</span> for the
          Blind
        </p>
      </div>
      <Link to="theProblem" smooth={true} duration={1000}>
        <button className="bottomText">
          <p>Learn More</p>
          <ion-icon name="arrow-down-sharp"></ion-icon>
        </button>
      </Link>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative overflow-y-hidden overflow-x-hidden   h-[410vh]"
    >
      <Problem />
      <HowItWorks />
      <TheSolution />
      <About />
    </motion.div>
  );
};
