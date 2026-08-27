import { ClockCounterClockwise, GameController, Table } from "@phosphor-icons/react";
import { Reveal } from "./ui/Reveal";

const criteria = [
  {
    icon: GameController,
    title: "Deep systems",
    copy: "The game rewards long-term decisions, attention, and mastery.",
    visual: "systems",
    className: "signal-large",
  },
  {
    icon: ClockCounterClockwise,
    title: "Missing memory",
    copy: "Important context disappears between seasons, saves, or matches.",
    visual: "memory",
  },
  {
    icon: Table,
    title: "Work done by hand",
    copy: "Players care enough about the answer to build their own tracking systems.",
    image: "/assets/approach/work-by-hand.webp",
    alt: "A gamer's desk covered with gameplay, spreadsheets, chat, and handwritten tracking notes",
  },
];

export function ApproachSection() {
  return (
    <section className="section approach-section">
      <div className="shell">
        <Reveal className="approach-copy">
          <h2>We go where the game leaves work unfinished.</h2>
          <p>We look for committed communities that generate valuable history and still rely on screenshots, Discord threads, or spreadsheets to understand it.</p>
        </Reveal>

        <div className="signal-grid">
          {criteria.map(({ icon: Icon, title, copy, image, alt, visual, className }, index) => (
            <Reveal as="article" className={`signal-card ${className || ""}`} delay={index * 0.06} key={title}>
              {visual === "systems" && (
                <div className="signal-media signal-system-map" aria-hidden="true">
                  <div className="system-axis"><span>Position</span><span>Timing</span><span>Resources</span><span>Execution</span></div>
                  <div className="system-lanes">
                    <span><i />Decision 01<b>Opening</b></span>
                    <span><i />Decision 02<b>Adaptation</b></span>
                    <span><i />Decision 03<b>Commitment</b></span>
                    <span><i />Outcome<b>Review</b></span>
                  </div>
                  <div className="system-trace"><i /><i /><i /><i /></div>
                </div>
              )}
              {visual === "memory" && (
                <div className="signal-media signal-memory" aria-hidden="true">
                  <div className="memory-row"><span>Run 08</span><i /><b>Saved</b></div>
                  <div className="memory-row"><span>Match 14</span><i /><b>Saved</b></div>
                  <div className="memory-row is-lost"><span>Season 02</span><i /><b>Context lost</b></div>
                  <div className="memory-row is-faded"><span>Build 19</span><i /><b>Expired</b></div>
                </div>
              )}
              {image && <div className="signal-media"><img src={image} alt={alt} /></div>}
              <div className="signal-copy">
                <span className="criteria-icon"><Icon size={20} aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="approach-close">
          <p>That is where we look for the next Practice Mode Labs product. We prove the workflow before we expand.</p>
        </Reveal>
      </div>
    </section>
  );
}
