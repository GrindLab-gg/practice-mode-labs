import { CheckCircle, ClockCounterClockwise, Cube, FlowArrow, FrameCorners } from "@phosphor-icons/react";
import { Reveal } from "./ui/Reveal";

const capabilities = [
  { icon: FrameCorners, title: "Supported uploads", copy: "Start with the screenshots and media players already create.", className: "cap-wide" },
  { icon: FlowArrow, title: "Game-specific extraction", copy: "Identify the fields and relationships that matter in context." },
  { icon: CheckCircle, title: "Human review", copy: "Make uncertain results visible and easy to correct." },
  { icon: ClockCounterClockwise, title: "Structured records", copy: "Turn isolated screens and moments into searchable history.", className: "cap-wide" },
  { icon: Cube, title: "Product experiences", copy: "Use that history for tracking, analysis, storytelling, and review.", className: "cap-wide" },
];

export function TechnologySection() {
  return (
    <section className="section technology-section" id="technology">
      <div className="shell">
        <Reveal className="section-heading tech-heading">
          <div>
            <h2>The format changes.<br /><em>The job stays the same.</em></h2>
          </div>
          <p>Turn screenshots and footage into records players can review, correct, and use. We’re building reusable systems around that workflow, then adapting them to each game and community.</p>
        </Reveal>

        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, copy, className }, index) => (
            <Reveal className={className} delay={index * 0.04} key={title}>
              <article>
                <Icon size={19} aria-hidden="true" />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
