import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const stages = [
  {
    title: "Capture",
    copy: "Start with the supported screens players already take.",
    image: "/assets/products/dynasty-central/real/import.webp",
    alt: "Dynasty Central Sync Data screen for uploading college football screenshots",
    caption: "Players upload supported CFB dynasty screens through the real Sync Data workspace.",
  },
  {
    title: "Extract",
    copy: "Identify the fields and relationships that matter in context.",
    image: "/assets/products/dynasty-central/real/roster.webp",
    alt: "Dynasty Central roster showing structured player positions, ratings, and scheme fit",
    caption: "The vision pipeline resolves names, positions, ratings, and relationships into structured roster records.",
  },
  {
    title: "Review",
    copy: "Confirm the result and correct anything that needs attention.",
    image: "/assets/products/dynasty-central/real/import-review-full.png",
    alt: "Dynasty Central import review showing extracted players, ratings, and abilities before saving",
    caption: "Players inspect the extracted records and keep control of what gets saved.",
  },
  {
    title: "Use",
    copy: "Add the record to the history of the dynasty you are building.",
    image: "/assets/products/dynasty-central/real/dashboard.webp",
    alt: "Dynasty Central program command center with coaching priorities and Dynasty Live previews",
    caption: "The records power the real command center, coaching prompts, and Dynasty Live coverage.",
  },
];

export function WorkflowStage() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const stage = stages[active];

  return (
    <div className="workflow-stage">
      <ol className="workflow-controls">
        {stages.map((item, index) => (
          <li key={item.title}>
            <button type="button" aria-pressed={active === index} onClick={() => setActive(index)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <small>{item.copy}</small>
            </button>
          </li>
        ))}
      </ol>

      <div className="workflow-visual" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure
            key={stage.title}
            initial={reduceMotion ? false : { opacity: 0, transform: "translateY(18px) scale(.985)" }}
            animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
            exit={reduceMotion ? undefined : { opacity: 0, transform: "translateY(-12px) scale(.99)" }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.23, 1, 0.32, 1] }}
          >
            <img src={stage.image} alt={stage.alt} />
            <figcaption><strong>{stage.title}</strong><span>{stage.caption}</span></figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </div>
  );
}
