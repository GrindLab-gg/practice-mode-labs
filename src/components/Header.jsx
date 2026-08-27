import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const links = [
  ["Products", "#products"],
  ["Technology", "#technology"],
  ["Company", "#company"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (open) {
      document.body.style.overflow = "hidden";
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
    } else {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className={open ? "site-header menu-open" : "site-header"}>
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="Practice Mode Labs home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>Practice Mode Labs</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <a className="button button-small header-cta" href="https://dynastycentral.gg">
          Explore Dynasty Central <ArrowUpRight size={14} aria-hidden="true" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-lines" aria-hidden="true"><i /><i /></span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: reduceMotion ? 0.55 : 0, transform: reduceMotion ? "translateY(0)" : "translateY(-12px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            exit={{ opacity: 0, transform: reduceMotion ? "translateY(0)" : "translateY(-8px)" }}
            transition={{ duration: reduceMotion ? 0.18 : 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="mobile-nav"
          >
            <div className="shell">
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
              ))}
              <a className="mobile-product-link" href="https://dynastycentral.gg" onClick={() => setOpen(false)}>
                Explore Dynasty Central <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
