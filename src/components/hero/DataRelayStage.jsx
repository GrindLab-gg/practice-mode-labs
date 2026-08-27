import { motion, useReducedMotion } from "motion/react";

export function DataRelayStage() {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.72, ease: [0.23, 1, 0.32, 1] };

  return (
    <figure className="relay-stage relay-stage-product">
      <motion.img
        className="relay-art"
        src="/assets/products/dynasty-central/real/dashboard.webp"
        alt="Dynasty Central program command center from the live staging product"
        fetchPriority="high"
        initial={reduceMotion ? false : { opacity: 0, transform: "scale(1.04) translateX(24px)" }}
        animate={{ opacity: 1, transform: "scale(1) translateX(0)" }}
        transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
      />
    </figure>
  );
}
