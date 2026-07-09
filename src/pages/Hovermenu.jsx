import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./HoverMenu.css";

const panelVariants = {
  hidden: { opacity: 0, scale: 0.94, y: -14 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // smooth "expo-out" feel — professional, no bounce
      when: "beforeChildren",
      staggerChildren: 0.09,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -10,
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

const HoverMenu = ({
  brand = "Menu",
  badge = null,
  items = [],
  socials = [],
  closeDelay = 150, // ms grace period before closing on mouse leave
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const closeTimer = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  // Click outside + Escape to close
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Opens only when the mouse actually enters the wrapper (pill or panel),
  // closes shortly after it truly leaves. No proximity/pre-touch trigger.
  const handleMouseEnter = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), closeDelay);
  };

  useEffect(() => clearCloseTimer, []);

  return (
    <div
      className="hover-menu-wrapper"
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        className="hover-menu-trigger"
        onClick={() => setOpen((v) => !v)} // tap-to-toggle for touch devices
        layout
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="hover-menu-trigger-icon">
          <span className={`hm-dot ${open ? "hm-dot-open" : ""}`} />
        </span>
        <span className="hover-menu-trigger-label">{brand}</span>
        {badge && <span className="hover-menu-badge">{badge}</span>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="hover-menu-panel"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <ul className="hover-menu-list">
              {items.map((item, i) => (
                <motion.li key={item.label ?? i} variants={rowVariants} className="hover-menu-row">
                  <a
                    href={item.href || "#"}
                    className="hover-menu-row-link"
                    onClick={() => setOpen(false)}
                  >
                    <span className="hover-menu-row-label">{item.label}</span>
                    <span className="hover-menu-row-thumb">
                      {item.image ? (
                        <img src={item.image} alt="" />
                      ) : (
                        <span className="hover-menu-row-thumb-fallback" />
                      )}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {socials.length > 0 && (
              <motion.div className="hover-menu-socials" variants={rowVariants}>
                <p className="hover-menu-socials-label">Social</p>
                <div className="hover-menu-socials-list">
                  {socials.map((s, i) => (
                    <a
                      key={s.label ?? i}
                      href={s.href || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="hover-menu-social-link"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverMenu;