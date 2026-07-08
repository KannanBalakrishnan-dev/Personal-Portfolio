import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./HoverMenu.css";


//  * HoverMenu
//  * A pill-shaped nav trigger that expands into a card with a stacked
//  * menu list (label + thumbnail) and a social links section, matching
//  * the midu.design-style interaction: click (or hover) to expand, click
//  * outside / press Escape / re-click to collapse.
 
//   Usage:
// <HoverMenu
//  brand="KB"
//  badge="Available for work"
//  items={items}
//  socials={socials}
//  openOn="hover"
// />
 

const panelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: -8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], when: "beforeChildren", staggerChildren: 0.06 },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -6,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.15 } },
};

const HoverMenu = ({
  brand = "Menu",
  badge = null,
  items = [],
  socials = [],
  openOn = "hover", // "click" | "hover"
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // click outside to close
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

  const hoverProps =
    openOn === "hover"
      ? {
          onMouseEnter: () => setOpen(true),
          onMouseLeave: () => setOpen(false),
        }
      : {};

  return (
    <div className="hover-menu-wrapper" ref={wrapperRef} {...hoverProps}>
      <motion.button
        className="hover-menu-trigger"
        onClick={() => openOn === "click" && setOpen((v) => !v)}
        layout
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                <motion.li
                  key={item.label ?? i}
                  variants={rowVariants}
                  className="hover-menu-row"
                >
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