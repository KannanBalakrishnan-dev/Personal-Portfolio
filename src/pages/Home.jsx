import { useRef } from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import Blackbgbtn from "../components/btns/Blackbgbtn";
import Whitebgbtn from "../components/btns/Whitebgbtn";
import TechStack from "./Techstack";
// import Education from "./Education"; // new section, created below
import "./Home.css";

import arrowCursorImg from "../assets/arrow.webp";
import heroImg from "../assets/img/pro.webp";

// ---------------------------------------------------------------------------
// Animation variants (shared across sections)
// ---------------------------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.85, y: 60 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const btnContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 1.1 },
  },
};

const btnItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ---------------------------------------------------------------------------
// Section: Greeting
// ---------------------------------------------------------------------------
const Greeting = () => (
  <motion.h3
    className="capitalize text-2xl"
    initial="hidden"
    animate="show"
    variants={fadeUp}
  >
    👋, Hello my name is KannanBalakrishnan
  </motion.h3>
);

// ---------------------------------------------------------------------------
// Section: Hero text stack ("Webdeveloper" / "Webdesigner" hover-swap effect)
// ---------------------------------------------------------------------------
const HeroTextStack = ({ topText2, topText3, bottomText2, bottomText3 }) => (
  <div className="relative text-grp h-full w-full">
    <motion.h2
      className="big-text main-text-1 absolute left-[50%] top-[0%] -translate-x-1/2 z-0 text-[12vw]"
      initial="hidden"
      animate="show"
      custom={0.15}
      variants={fadeUp}
    >
      Webdeveloper
    </motion.h2>
    <motion.h2
      ref={topText2}
      className="big-text main-text-2 absolute left-[50%] top-[0%] -translate-x-1/2 z-1 text-[12vw]"
      initial="hidden"
      animate="show"
      custom={0.25}
      variants={fadeUp}
      transition={{ duration: 0.4 }}
    >
      Webdeveloper
    </motion.h2>
    <motion.h2
      ref={topText3}
      className="big-text main-text-3 absolute left-[50%] top-[0%] -translate-x-1/2 z-3 text-[12vw]"
      initial="hidden"
      animate="show"
      custom={0.35}
      variants={fadeUp}
      transition={{ duration: 0.4 }}
    >
      Webdeveloper
    </motion.h2>

    <motion.h2
      className="big-text main-b-text-1 absolute left-[50%] top-[0%] -translate-x-1/2 z-0 text-[12vw] mt-[13vw]"
      initial="hidden"
      animate="show"
      custom={0.2}
      variants={fadeUp}
    >
      Webdesigner
    </motion.h2>
    <motion.h2
      ref={bottomText2}
      className="big-text main-b-text-2 absolute left-[50%] top-[0%] -translate-x-1/2 z-1 text-[12vw] mt-[13vw]"
      initial="hidden"
      animate="show"
      custom={0.3}
      variants={fadeUp}
      transition={{ duration: 0.4 }}
      style={{ transition: "opacity 0.4s ease" }}
    >
      Webdesigner
    </motion.h2>
    <motion.h2
      ref={bottomText3}
      onMouseEnter={() => {
        bottomText2.current.style.opacity = "1";
        bottomText3.current.style.opacity = "1";
        topText2.current.style.opacity = "0";
        topText3.current.style.opacity = "0";
      }}
      onMouseLeave={() => {
        bottomText2.current.style.opacity = "0";
        bottomText3.current.style.opacity = "0";
        topText2.current.style.opacity = "1";
        topText3.current.style.opacity = "1";
      }}
      className="big-text main-b-text-3 absolute left-[50%] top-[0%] -translate-x-1/2 z-3 text-[12vw] mt-[13vw] cursor-pointer"
      initial="hidden"
      animate="show"
      custom={0.4}
      variants={fadeUp}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      style={{ transition: "opacity 0.4s ease, transform 0.3s ease" }}
    >
      Webdesigner
    </motion.h2>
  </div>
);

// ---------------------------------------------------------------------------
// Section: Hero image
// ---------------------------------------------------------------------------
const HeroImage = () => (
  <motion.img
    className="w-[45vw] max-w-[820px] absolute z-2 top-[-10vw] left-1/2 -translate-x-1/2 object-contain"
    src={heroImg}
    alt="Portrait"
    initial="hidden"
    animate="show"
    variants={imageReveal}
    whileHover={{ y: -10, transition: { duration: 0.4 } }}
  />
);

// ---------------------------------------------------------------------------
// Section: Custom mouse cursor
// ---------------------------------------------------------------------------
const CustomCursor = ({ moveCursor }) => (
  <motion.img
    ref={moveCursor}
    className="cursor-img absolute w-20 h-20 object-contain p-3 rounded-full bg-white object-cover z-50 border-2 border-black hidden top-0 left-0"
    src={arrowCursorImg}
    alt=""
  />
);

// ---------------------------------------------------------------------------
// Section: CTA buttons
// ---------------------------------------------------------------------------
const CtaButtons = () => (
  <motion.div
    className="flex justify-center gap-5 absolute bottom-10"
    initial="hidden"
    animate="show"
    variants={btnContainer}
  >
    <motion.div variants={btnItem} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Blackbgbtn text={"you need a designer"} />
    </motion.div>
    <motion.div variants={btnItem} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Whitebgbtn text={"You need a web developer"} />
    </motion.div>
  </motion.div>
);

// ---------------------------------------------------------------------------
// Home page (composes all sections above)
// Each direct child section is 100vw wide and takes at least 100vh so they
// stack full-screen on top of each other as the user scrolls down.
// ---------------------------------------------------------------------------
const Home = () => {
  const topText2 = useRef(null);
  const topText3 = useRef(null);
  const bottomText2 = useRef(null);
  const bottomText3 = useRef(null);
=======
import Blackbgbtn from "../components/btns/Blackbgbtn";
import Whitebgbtn from "../components/btns/Whitebgbtn";
import "./Home.css";
const Home = () => {
  // use ref
  // ^top text ref
  const topText2 = useRef(null);
  const topText3 = useRef(null);

  // ^ bottom text ref
  const bottomText2 = useRef(null);
  const bottomText3 = useRef(null);

  // ^ cursor code
>>>>>>> 70ef8f7eb4c5eb38bb5836c40dc530e0d474ef11
  const mouseCursor = useRef(null);
  const moveCursor = useRef(null);

  return (
<<<<<<< HEAD
    <div className="w-full">
      {/* ---------------- HERO SECTION (100vw x 100vh) ---------------- */}
      <section className="w-screen h-screen overflow-hidden">
        <div className="h-full w-full flex flex-col justify-center items-center px-[14vw]">
          <Greeting />

          <div
            ref={mouseCursor}
            className="relative w-full h-full flex flex-col justify-center items-center"
            onMouseEnter={() => {
              moveCursor.current.style.display = "block";
            }}
            onMouseLeave={() => {
              moveCursor.current.style.display = "none";
            }}
            onMouseMove={(e) => {
              const rect = mouseCursor.current.getBoundingClientRect();
              const x = e.clientX - rect.left - 40;
              const y = e.clientY - rect.top - 40;
              moveCursor.current.style.transform = `translate(${x}px, ${y}px)`;
            }}
          >
            <CustomCursor moveCursor={moveCursor} />

            <HeroTextStack
              topText2={topText2}
              topText3={topText3}
              bottomText2={bottomText2}
              bottomText3={bottomText3}
            />

            <HeroImage />
          </div>

          <CtaButtons />
=======
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col justify-center items-center px-[14vw]">
        <h3 className="capitalize text-2xl">
          👋,Hello my name is KannanBalakrishnan
        </h3>

        <div
          ref={mouseCursor}
          className="relative w-full h-full flex flex-col justify-center items-center "
          onMouseEnter={() => {
            moveCursor.current.style.display = "block";
          }}
          onMouseLeave={() => {
            moveCursor.current.style.display = "none";
          }}
          onMouseMove={(e) => {
            const rect = mouseCursor.current.getBoundingClientRect();

            const x = e.clientX - rect.left - 40;
            const y = e.clientY - rect.top - 40;

            moveCursor.current.style.transform = `translate(${x}px, ${y}px)`;
          }}
        >
          {/* cursor  */}

          <img
            ref={moveCursor}
            className="cursor-img absolute w-20 h-20 object-contain p-3 rounded-full bg-white bject-cover z-50 border-2 border-black hidden top-0 left-0"
            src="./src/assets/arrow.webp"
            alt=""
          />

          {/* main big text top */}
          <div className="relative text-grp h-full w-full ">
            <h2 className="big-text main-text-1 absolute left-[50%] top-[0%] -translate-x-1/2  z-0 text-[12vw]">
              Webdeveloper
            </h2>
            <h2
              ref={topText2}
              className="big-text main-text-2 absolute left-[50%] top-[0%] -translate-x-1/2  z-1 text-[12vw]"
            >
              Webdeveloper
            </h2>
            <h2
              ref={topText3}
              className="big-text main-text-3 absolute left-[50%] top-[0%] -translate-x-1/2  z-3 text-[12vw]"
            >
              Webdeveloper
            </h2>

            {/* bottom text */}
            <h2 className="big-text main-b-text-1 absolute left-[50%] top-[0%] -translate-x-1/2  z-0 text-[12vw] mt-[13vw]">
              Webdesigner
            </h2>

            <h2
              ref={bottomText2}
              className="big-text main-b-text-2 absolute left-[50%] top-[0%] -translate-x-1/2  z-1 text-[12vw] mt-[13vw]"
            >
              Webdesigner
            </h2>

            <h2
              onMouseEnter={() => {
                bottomText2.current.style.opacity = "1";
                bottomText3.current.style.opacity = "1";
                topText2.current.style.opacity = "0";
                topText3.current.style.opacity = "0";
              }}
              onMouseLeave={() => {
                bottomText2.current.style.opacity = "0";
                bottomText3.current.style.opacity = "0";
                topText2.current.style.opacity = "1";
                topText3.current.style.opacity = "1";
              }}
              ref={bottomText3}
              className="big-text main-b-text-3 absolute left-[50%] top-[0%] -translate-x-1/2  z-3 text-[12vw] mt-[13vw]"
            >
              Webdesigner
            </h2>
            {/* bottom text */}
          </div>
          {/* main big text top */}

          {/* img */}
          <img
            className="w-[30vw] absolute z-2 top-0"
            // src="../src/assets/img/pro.webp"
            alt=""
          />
          {/* img */}
>>>>>>> 70ef8f7eb4c5eb38bb5836c40dc530e0d474ef11
        </div>
      </section>

<<<<<<< HEAD
      {/* ---------------- TECH STACK SECTION (100vw) ---------------- */}
      <section className="w-screen">
        <TechStack />
      </section>

      {/* ---------------- EDUCATION SECTION (100vw) ---------------- */}
      <section className="w-screen">
        {/* <Education /> */}
      </section>
=======
        {/* bottom btns */}
        <div className="flex justify-center gap-5 absolute bottom-10">
          <Blackbgbtn text={"you need a designer"} />
          <Whitebgbtn text={"You need a web developer"} />
        </div>
      </div>
>>>>>>> 70ef8f7eb4c5eb38bb5836c40dc530e0d474ef11
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 70ef8f7eb4c5eb38bb5836c40dc530e0d474ef11
