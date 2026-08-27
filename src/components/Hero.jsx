import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { Spotlight } from "./ui/Spotlight";
import { DataRelayStage } from "./hero/DataRelayStage";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, transform: "translateY(18px)" },
    animate: { opacity: 1, transform: "translateY(0)" },
    transition: { duration: reduceMotion ? 0 : 0.58, delay: reduceMotion ? 0 : delay, ease: [0.23, 1, 0.32, 1] },
  });

  return (
    <section className="hero">
      <Spotlight />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <motion.p {...enter(0.05)} className="hero-intro">Software for players who keep track</motion.p>
          <motion.h1 {...enter(0.13)}>Game screens <em>become history.</em></motion.h1>
          <motion.p {...enter(0.21)} className="hero-body">We turn hard-to-export game screens and footage into records players can review, keep, and use.</motion.p>
          <motion.div {...enter(0.29)} className="hero-actions">
            <a className="button button-primary" href="https://dynastycentral.gg">
              Explore Dynasty Central <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="hero-text-link" href="#how-it-works">
              See how it works <ArrowRight size={15} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
        <div className="hero-demo"><DataRelayStage /></div>
      </div>
    </section>
  );
}
