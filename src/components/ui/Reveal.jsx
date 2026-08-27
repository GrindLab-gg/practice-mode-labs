import { motion, useReducedMotion } from "motion/react";

export function Reveal({ as = "div", children, className = "", delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={reduceMotion ? false : { opacity: 0, transform: "translateY(14px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={reduceMotion ? undefined : { duration: 0.46, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
