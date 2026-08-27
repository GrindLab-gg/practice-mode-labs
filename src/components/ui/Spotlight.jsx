import { motion, useReducedMotion } from "motion/react";

export function Spotlight() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: reduceMotion ? 0.55 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0.18 : 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="spotlight spotlight-left" />
      <div className="spotlight spotlight-right" />
    </motion.div>
  );
}
