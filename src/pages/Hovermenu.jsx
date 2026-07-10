import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./HoverMenu.css";

const overlayVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
};

const panelVariants = {
  hidden: {},
  show: {
    transition: { when: "beforeChildren", staggerChildren: 0.06, delayChildren: 0.1 },
  },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

const HoverMenu = ({
  brand = "N",
  badge = null,
  items = [],
  socials = [],
}) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true); // false = hidden while scrolling down
  const wrapperRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Scroll direction: hide when scrolling down, show when scrolling up.
  // Skipped while the overlay is open, so the pill doesn't vanish mid-use.
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (open) return; // never hide while the menu is open
      const currentY = window.scrollY;
      const goingUp = currentY < lastScrollY.current;

      // ignore tiny jitters near the very top
      if (currentY < 10) {
        setVisible(true);
      } else {
        setVisible(goingUp);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  // Lock page scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Trigger pill — logo + hamburger, centered like the reference */}
      <div className="hm-trigger-wrapper" ref={wrapperRef}>
        <motion.button
          className="hm-trigger"
          onClick={() => setOpen((v) => !v)}
          layout
          animate={{
            y: visible || open ? 0 : "-120%",
            opacity: visible || open ? 1 : 0,
          }}
          style={{ pointerEvents: visible || open ? "auto" : "none" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hm-trigger-logo">{brand}</span>
          <span className={`hm-trigger-burger ${open ? "hm-trigger-burger-open" : ""}`}>
            <span />
            <span />
          </span>
          {badge && <span className="hm-trigger-badge">{badge}</span>}
        </motion.button>
      </div>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="hm-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <button className="hm-close-bar" onClick={() => setOpen(false)}>
              CLOSE
            </button>

            <motion.div
              className="hm-overlay-body"
              variants={panelVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {/* Left column: newsletter + featured card */}
              <motion.div className="hm-col hm-col-left" variants={rowVariants}>
                <div className="hm-newsletter-pill">
                  ✉️ Start subscribing to our newsletter
                </div>
                <p className="hm-newsletter-note">
                  By subscribing to the newsletter you agree to{" "}
                  <strong>Terms and Conditions &amp; GDPR</strong>
                </p>
                {items[0]?.image && (
                  <div className="hm-feature-card">
                    <img src={items[0].image} alt="" />
                  </div>
                )}
              </motion.div>

              {/* Center column: big numbered nav */}
              <nav className="hm-col hm-col-center">
                {items.map((item, i) => (
                  <motion.a
                    key={item.label ?? i}
                    href={item.href || "#"}
                    className="hm-nav-row"
                    variants={rowVariants}
                    onClick={() => setOpen(false)}
                  >
                    <span className="hm-nav-label">{item.label}</span>
                    <span className="hm-nav-index">{String(i + 1).padStart(2, "0")}</span>
                  </motion.a>
                ))}
              </nav>

              {/* Right column: rubrics / socials */}
              {socials.length > 0 && (
                <motion.div className="hm-col hm-col-right" variants={rowVariants}>
                  <p className="hm-rubrics-title">Social</p>
                  <div className="hm-rubrics-list">
                    {socials.map((s, i) => (
                      <a
                        key={s.label ?? i}
                        href={s.href || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="hm-rubrics-link"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HoverMenu;