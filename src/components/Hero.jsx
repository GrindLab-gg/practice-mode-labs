import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { Spotlight } from "./ui/Spotlight";
import { ExtractionDemo } from "./ExtractionDemo";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay) => ({
    initial: { opacity: reduceMotion ? 0.55 : 0, transform: reduceMotion ? "translateY(0)" : "translateY(16px)" },
    animate: { opacity: 1, transform: "translateY(0)" },
    transition: { duration: reduceMotion ? 0.18 : 0.5, delay: reduceMotion ? 0 : delay, ease: [0.23, 1, 0.32, 1] },
  });

  return (
    <section className="hero">
      <Spotlight />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <motion.p {...enter(0.05)} className="hero-intro">Software for players who keep track</motion.p>
          <motion.h1 {...enter(0.13)}>Turn game screens<br />into data <em>players can use.</em></motion.h1>
          <motion.p {...enter(0.21)} className="hero-body">
            Practice Mode Labs builds products that turn hard-to-export game information into structured, useful records. Dynasty Central does it with screenshots today. ApexLens is exploring gameplay video.
          </motion.p>
          <motion.div {...enter(0.29)} className="hero-actions">
            <a className="button button-primary" href="https://dynastycentral.gg">
              Explore Dynasty Central <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#how-it-works">
              See how it works <ArrowDown size={15} aria-hidden="true" />
            </a>
          </motion.div>
          <motion.div {...enter(0.36)} className="status-line" role="group" aria-label="Product statuses">
            <span><i className="status-live" /> Dynasty Central <b>Live</b></span>
            <span><i className="status-build" /> ApexLens <b>In development</b></span>
          </motion.div>
        </div>
        <motion.div {...enter(0.38)} className="hero-demo">
          <ExtractionDemo />
        </motion.div>
      </div>
    </section>
  );
}
