import { motion } from "framer-motion";
import "./TechStack.css";

// Using simple inline SVGs instead of emoji so icons render crisp & consistent
// across OS/browsers. Swap these for react-icons or devicon classes if you'd
// rather pull from a library (see note at bottom).
const techs = [
  {
    name: "REACT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "NEXT.JS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 8v8l7-8v8" />
      </svg>
    ),
  },
  {
    name: "TYPESCRIPT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 12h4M10 12v6" />
        <path d="M15 12.5c0-1 .8-1.5 1.8-1.5s1.8.5 1.8 1.3c0 1.8-3.6 1.3-3.6 3.2 0 .9.9 1.5 1.9 1.5s1.9-.5 1.9-1.5" />
      </svg>
    ),
  },
  {
    name: "TAILWIND",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 12c1-3 3-4.5 6-4.5s4 1.5 6 4.5c-1 3-3 4.5-6 4.5s-4-1.5-6-4.5Z" />
        <path d="M2 15.5c.8-2.3 2.3-3.4 4.5-3.4" />
      </svg>
    ),
  },
  {
    name: "NODE.JS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    name: "FRAMER",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 3h12v6h-6l6 6h-6v6l-6-6" />
      </svg>
    ),
  },
  {
    name: "GITHUB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </svg>
    ),
  },
  {
    name: "MONGODB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2c3 4 4.5 7.5 4.5 11a4.5 4.5 0 0 1-9 0c0-3.5 1.5-7 4.5-11Z" />
        <path d="M12 16v6" />
      </svg>
    ),
  },
  {
    name: "SQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </svg>
    ),
  },
  {
    name: "FIGMA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 2h4a3 3 0 0 1 0 6H9V2Z" />
        <path d="M9 8h4a3 3 0 0 1 0 6H9V8Z" />
        <path d="M9 14h4a3 3 0 1 1-4 3v-3Z" />
        <path d="M9 2a3 3 0 1 0 0 6" />
      </svg>
    ),
  },
];

const marqueeItems = [...techs, ...techs];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TechStack = () => {
  return (
    <section className="tech-stack-section">
      <motion.div
        className="tech-stack-header"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div custom={0} variants={fadeUp}>
          <p className="tech-eyebrow">ARCHITECTURE &amp; TOOLS</p>
          <h2 className="tech-title">TECH STACK</h2>
        </motion.div>
        <motion.p className="tech-description" custom={0.15} variants={fadeUp}>
          Leveraging the latest modern frameworks to build performant,
          scalable, and visually stunning digital experiences.
        </motion.p>
      </motion.div>

      <div className="marquee-wrapper">
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />

        <div className="marquee-track">
          {marqueeItems.map((tech, i) => (
            <div className="tech-card" key={i}>
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* second row scrolling opposite direction for visual depth */}
      <div className="marquee-wrapper marquee-wrapper-reverse">
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />

        <div className="marquee-track marquee-track-reverse">
          {[...marqueeItems].reverse().map((tech, i) => (
            <div className="tech-card" key={i}>
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;