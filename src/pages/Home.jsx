import { useRef, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import Blackbgbtn from "../components/btns/Blackbgbtn";
import Whitebgbtn from "../components/btns/Whitebgbtn";
import TechStack from "./Techstack";
import HoverMenu from "../pages/Hovermenu";
// import Education from "./Education";
import "./Home.css";

import arrowCursorImg from "../assets/arrow.webp";
import heroImg from "../assets/img/pro.webp";

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
  show: { transition: { staggerChildren: 0.15, delayChildren: 1.1 } },
};

const btnItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Hoisted outside the component so identity is stable across renders
const NAV_ITEMS = [
  { label: "Home", image: heroImg, href: "#home" },
  { label: "Work", image: heroImg, href: "#work" },
  { label: "About", image: heroImg, href: "#about" },
];

const NAV_SOCIALS = [
  { label: "GitHub", href: "https://github.com/KannanBalakrishnan-dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kannan-balakrishnan-409911282/" },
  { label: "Twitter / X", href: "https://x.com/" },
];

// Config describing the 3 stacked layers per text row, instead of hand-duplicating JSX.
const buildLayers = (prefix, refs, delays) => [
  { className: `main-${prefix}-1`, z: 0, delay: delays[0] },
  { className: `main-${prefix}-2`, z: 1, delay: delays[1], ref: refs[0] },
  { className: `main-${prefix}-3`, z: 3, delay: delays[2], ref: refs[1] },
];

const Greeting = () => (
  <motion.h3 className="capitalize text-2xl" initial="hidden" animate="show" variants={fadeUp}>
    👋, Hello my name is KannanBalakrishnan
  </motion.h3>
);

// Top navigation bar hosting the expanding hover/click menu.
// Swap the `items`/`socials` arrays above with your real routes,
// thumbnail images, and profile links.
const NavBar = () => (
  <motion.div
    className="fixed top-6 left-6 z-50"
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
  >
    <HoverMenu brand="Menu" badge="Open to work" items={NAV_ITEMS} socials={NAV_SOCIALS} />
  </motion.div>
);

const HeroTextStack = ({ topText2, topText3, bottomText2, bottomText3 }) => {
  const handleHoverIn = useCallback(() => {
    bottomText2.current.style.opacity = "1";
    bottomText3.current.style.opacity = "1";
    topText2.current.style.opacity = "0";
    topText3.current.style.opacity = "0";
  }, [bottomText2, bottomText3, topText2, topText3]);

  const handleHoverOut = useCallback(() => {
    bottomText2.current.style.opacity = "0";
    bottomText3.current.style.opacity = "0";
    topText2.current.style.opacity = "1";
    topText3.current.style.opacity = "1";
  }, [bottomText2, bottomText3, topText2, topText3]);

  return (
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
        className="big-text main-b-text-2 absolute left-[50%] top-[0%] -translate-x-1/2 z-1 text-[12vw] mt-[13vw] transition-opacity duration-[400ms] ease-out"
        initial="hidden"
        animate="show"
        custom={0.3}
        variants={fadeUp}
        transition={{ duration: 0.4 }}
      >
        Webdesigner
      </motion.h2>
      <motion.h2
        ref={bottomText3}
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverOut}
        className="big-text main-b-text-3 absolute left-[50%] top-[0%] -translate-x-1/2 z-3 text-[12vw] mt-[13vw] cursor-pointer transition-opacity duration-[400ms] ease-out"
        initial="hidden"
        animate="show"
        custom={0.4}
        variants={fadeUp}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        Webdesigner
      </motion.h2>
    </div>
  );
};

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

const CustomCursor = ({ moveCursor }) => (
  <motion.img
    ref={moveCursor}
    className="cursor-img absolute w-20 h-20 object-contain p-3 rounded-full bg-white object-cover z-50 border-2 border-black hidden top-0 left-0"
    src={arrowCursorImg}
    alt=""
    aria-hidden="true"
  />
);

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

const Home = () => {
  const topText2 = useRef(null);
  const topText3 = useRef(null);
  const bottomText2 = useRef(null);
  const bottomText3 = useRef(null);
  const cursorAreaRef = useRef(null);
  const moveCursor = useRef(null);
  const cursorRectRef = useRef(null); // cached bounding rect, avoids reflow on every mousemove

  const handleCursorEnter = useCallback(() => {
    moveCursor.current.style.display = "block";
    cursorRectRef.current = cursorAreaRef.current.getBoundingClientRect();
  }, []);

  const handleCursorLeave = useCallback(() => {
    moveCursor.current.style.display = "none";
  }, []);

  const handleCursorMove = useCallback((e) => {
    const rect = cursorRectRef.current;
    if (!rect) return;
    const x = e.clientX - rect.left - 40;
    const y = e.clientY - rect.top - 40;
    moveCursor.current.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  return (
    <div className="w-full">
      <NavBar />

      <section className="w-screen h-screen overflow-hidden">
        <div className="h-full w-full flex flex-col justify-center items-center px-[14vw]">
          <Greeting />

          <div
            ref={cursorAreaRef}
            className="relative w-full h-full flex flex-col justify-center items-center"
            onMouseEnter={handleCursorEnter}
            onMouseLeave={handleCursorLeave}
            onMouseMove={handleCursorMove}
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
        </div>
      </section>

      <section className="w-screen">
        <TechStack />
      </section>

      <section className="w-screen">
        {/* <Education /> */}
      </section>
    </div>
  );
};

export default Home;