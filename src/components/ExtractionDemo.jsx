import { Check, ImageSquare, Scan } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const sourceRows = [
  ["C. Johnson", "WR", "92"],
  ["M. Reed", "CB", "89"],
  ["D. Brooks", "QB", "87"],
  ["A. Lewis", "MLB", "86"],
];

const fields = [
  ["player", "C. Johnson"],
  ["position", "WR"],
  ["overall", "92"],
  ["status", "Committed"],
];

export function ExtractionDemo() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="demo-wrap" role="group" aria-label="Illustrative Dynasty Central screenshot import workflow">
      <div className="demo-topbar">
        <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
        <span>dynastycentral.gg / import</span>
        <span className="live-label"><i /> live workflow</span>
      </div>

      <div className="demo-stage">
        <div className="capture-pane">
          <div className="pane-label"><ImageSquare size={13} aria-hidden="true" /> Supported screenshot</div>
          <div className="game-screen">
            <div className="game-screen-head">
              <span>RECRUITING BOARD</span>
              <span>WEEK 06</span>
            </div>
            {sourceRows.map((row, index) => (
              <div className={index === 0 ? "game-row active" : "game-row"} key={row[0]}>
                <span className="avatar-block" />
                <span>{row[0]}</span><span>{row[1]}</span><strong>{row[2]}</strong>
              </div>
            ))}
            {!reduceMotion && (
              <motion.span
                className="scan-line"
                initial={{ transform: "translateY(0)", opacity: 0 }}
                animate={{ transform: ["translateY(0)", "translateY(148px)", "translateY(0)"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3.8, repeat: 1, ease: [0.77, 0, 0.175, 1], times: [0, 0.1, 0.88, 1] }}
              />
            )}
          </div>
        </div>

        <div className="process-rail" aria-hidden="true">
          <motion.span
            animate={reduceMotion ? {} : { transform: ["translateY(-42px)", "translateY(42px)", "translateY(-42px)"], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 3.2, repeat: 1, ease: [0.77, 0, 0.175, 1] }}
          />
          <Scan size={16} aria-hidden="true" />
        </div>

        <div className="record-pane">
          <div className="pane-label"><Check size={13} aria-hidden="true" /> Ready for review</div>
          <div className="record-card">
            <div className="record-head"><span>Extracted record</span><span>4 fields</span></div>
            <dl>
              {fields.map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: reduceMotion ? 0.55 : 0, transform: reduceMotion ? "translateX(0)" : "translateX(8px)" }}
                  animate={{ opacity: 1, transform: "translateX(0)" }}
                  transition={{ delay: reduceMotion ? 0 : 0.45 + index * 0.06, duration: reduceMotion ? 0.18 : 0.24, ease: [0.23, 1, 0.32, 1] }}
                >
                  <dt>{key}</dt><dd className={key === "status" ? "success" : ""}>{value}</dd>
                </motion.div>
              ))}
            </dl>
            <div className="save-row" aria-hidden="true"><Check size={14} /> Add to season 2028</div>
          </div>
        </div>
      </div>
      <p className="demo-caption">Illustrative Dynasty Central workflow</p>
    </div>
  );
}
