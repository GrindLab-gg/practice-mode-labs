import { ArrowRight, ClockCounterClockwise, GameController, Table } from "@phosphor-icons/react";
import { Reveal } from "./ui/Reveal";

const criteria = [
  { icon: GameController, title: "Deep systems", copy: "The game rewards long-term decisions, attention, and mastery." },
  { icon: ClockCounterClockwise, title: "Missing memory", copy: "Important context disappears between seasons, saves, or matches." },
  { icon: Table, title: "Work done by hand", copy: "Players care enough about the answer to build their own tracking systems." },
];

export function ApproachSection() {
  return (
    <section className="section approach-section">
      <div className="shell approach-layout">
        <Reveal className="approach-copy">
          <h2>We go where the game<br /><em>leaves work unfinished.</em></h2>
          <p>We look for committed communities that generate valuable history and still rely on screenshots, Discord threads, or spreadsheets to understand it.</p>
          <p className="approach-close">That’s where we look for the next Practice Mode Labs product. We prove the workflow before we expand.</p>
        </Reveal>

        <div className="criteria-list">
          {criteria.map(({ icon: Icon, title, copy }, index) => (
            <Reveal delay={index * 0.06} key={title}>
              <article>
                <span className="criteria-icon"><Icon size={19} /></span>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <ArrowRight size={17} aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
