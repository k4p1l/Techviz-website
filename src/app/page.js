"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../../public/css/Home.css";
import img from "../../public/images/Untitled.png";
import { useScroll, useTransform, motion, easeInOut } from "framer-motion";
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
      duration: 0.8,
      easing: "ease-in-out",
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
        <Element className="sticky top-0 rounded-2xl h-screen" name="section1">
          <Section1 scrollYProgress={scrollYProgress} />
        </Element>
        <Element name="theProblem">
          <Section2 scrollYProgress={scrollYProgress} />
        </Element>
      </main>
    </div>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const router = useRouter();
  const navigateToForm = () => {
    router.push("/form");
  };

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
          <span>Illuminating</span> possibilities for an <span>Inclusive</span>
          tomorrow.
        </p>
      </div>
      <div className="absolute links">
        <a class="wave-link" href="">
          Download{" "}
          <svg
            class="link__graphic link__graphic--slide"
            width="300%"
            height="100%"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
          </svg>
        </a>
        <a onClick={navigateToForm} className="wave-link">
          Contact Us
          <svg
            className="link__graphic link__graphic--slide"
            width="300%"
            height="100%"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
          </svg>
        </a>
      </div>

      <Link to="theProblem" smooth={true} duration={1500}>
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
      id="section2"
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
