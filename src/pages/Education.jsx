import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    description:
      "Focused on electrical systems, electronics, programming fundamentals, and emerging technologies. Developed practical skills through academic projects and technical training.",
    period: "2022 — 2026",
    school: "SSM Institute of Engineering and Technology",
    align: "left",
  },
  {
    degree: "Bachelor of Computer Science",
    description:
      "Focused on Software Engineering and Full-Stack Development. Recipient of the Academic Excellence Award.",
    period: "2020 — 2022",
    school: "Global Tech University",
    align: "right",
  },
  {
    degree: "Digital Design Certificate",
    description:
      "Intensive program covering UI/UX principles, typography, and visual communication.",
    period: "2017 — 2019",
    school: "Creative Design Institute",
    align: "left",
  },
  {
    degree: "Master of Interaction Design",
    description:
      "Specializing in Human-Computer Interaction and Advanced Prototyping techniques. Graduated with honors.",
    period: "2013 — 2017",
    school: "Academy of Art University",
    align: "right",
  }
];

const fadeSide = (align) => ({
  hidden: { opacity: 0, x: align === "left" ? -60 : 60, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const dotVariant = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 320, damping: 14 },
  },
};

// Splits a heading into words so each can animate in individually
const splitWords = (text) => text.split(" ");

const wordContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: "60%", rotate: 4 },
  show: {
    opacity: 1,
    y: "0%",
    rotate: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const AnimatedHeading = ({ text, className }) => (
  <motion.h3
    className={className}
    variants={wordContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.6 }}
    style={{ display: "flex", flexWrap: "wrap", gap: "0.35em" }}
  >
    {splitWords(text).map((word, i) => (
      <motion.span
        key={i}
        variants={wordItem}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        {word}
      </motion.span>
    ))}
  </motion.h3>
);

const Header = () => (
  <motion.div
    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 px-[6vw]"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
  >
    <motion.div variants={fadeUp}>
      <p className="text-[#c81d5f] tracking-[0.25em] text-sm font-semibold uppercase mb-2">
        Academic Journey
      </p>
      <h2 className="font-black uppercase text-6xl md:text-7xl leading-none tracking-tight">
        Education
      </h2>
    </motion.div>
    <motion.p
      variants={fadeUp}
      transition={{ delay: 0.15 }}
      className="text-gray-500 text-lg max-w-sm md:text-right"
    >
      Building a strong academic foundation in engineering, problem-solving, and software development through continuous learning and technical education.
    </motion.p>
  </motion.div>
);

const TimelineRow = ({ item, index }) => {
  const isLeft = item.align === "left";
  const rowRef = useRef(null);

  return (
    <motion.div
      ref={rowRef}
      className="relative grid grid-cols-[1fr_auto_1fr] gap-x-8 items-center py-14"
      whileHover="hover"
    >
      {/* Left column content (degree title, only rendered on left rows) */}
      <div className="text-right">
        {isLeft && (
          <motion.div
            variants={fadeSide("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <AnimatedHeading
              text={item.degree}
              className="font-black uppercase text-3xl md:text-4xl leading-tight mb-3 justify-end"
            />
            <motion.p
              className="text-gray-500 max-w-md ml-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        )}
      </div>

      {/* Center dot + connecting line */}
      <div className="relative flex justify-center h-full">
        <div className="absolute top-0 bottom-0 w-px bg-gray-300" />
        <motion.div
          className="absolute top-1 w-4 h-4 rounded-full"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: [0.6, 2.2], opacity: [0.5, 0] }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
          style={{ background: "#c81d5f" }}
        />
        <motion.span
          className="relative z-10 w-4 h-4 rounded-full bg-[#c81d5f] mt-1"
          variants={dotVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          whileHover={{
            scale: 1.5,
            boxShadow: "0 0 0 8px rgba(200,29,95,0.15)",
          }}
          transition={{ boxShadow: { duration: 0.3 } }}
        />
      </div>

      {/* Right column content (period/school, or degree title on right rows) */}
      <div className="text-left">
        {isLeft ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 }}
          >
            <motion.p
              className="text-[#c81d5f] font-mono text-sm tracking-wider mb-1"
              variants={fadeUp}
            >
              {item.period}
            </motion.p>
            <motion.p
              className="font-bold uppercase text-sm tracking-wide"
              variants={fadeUp}
              transition={{ delay: 0.05 }}
            >
              {item.school}
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            variants={fadeSide("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-[#c81d5f] font-mono text-sm tracking-wider mb-1">
              {item.period}
            </p>
            <p className="font-bold uppercase text-sm tracking-wide mb-3">
              {item.school}
            </p>
            <AnimatedHeading
              text={item.degree}
              className="font-black uppercase text-3xl md:text-4xl leading-tight mb-3"
            />
            <motion.p
              className="text-gray-500 max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ScrollLine = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });
  const height = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 60, damping: 20, mass: 0.5 },
  );

  return (
    <div
      ref={containerRef}
      className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
    >
      <div className="absolute inset-0 bg-gray-200" />
      <motion.div
        className="absolute top-0 left-0 w-full bg-[#c81d5f] origin-top"
        style={{ height }}
      />
    </div>
  );
};

const Education = () => {
  return (
    <section className="relative w-screen bg-[#fafafa] py-24 overflow-hidden">
      <Header />
      <div className="relative px-[6vw]">
        <ScrollLine />
        {educationData.map((item, i) => (
          <TimelineRow key={item.school} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Education;
