import { CheckCircle, ClockCounterClockwise, Cube, FlowArrow, FrameCorners } from "@phosphor-icons/react";
import { Reveal } from "./ui/Reveal";

const capabilities = [
  { icon: FrameCorners, title: "Supported media", copy: "Start with the screenshots and footage players already create." },
  { icon: FlowArrow, title: "Game-specific extraction", copy: "Identify the fields and relationships that matter in context." },
  { icon: CheckCircle, title: "Human review", copy: "Make uncertain results visible and easy to correct." },
  { icon: ClockCounterClockwise, title: "Structured records", copy: "Turn isolated screens and moments into durable history." },
  { icon: Cube, title: "Product experiences", copy: "Use that history for tracking, analysis, storytelling, and review." },
];

export function TechnologySection() {
  return (
    <section className="section technology-section" id="technology">
      <div className="shell">
        <Reveal className="section-heading section-heading-stacked tech-heading">
          <h2>The format changes. The job stays the same.</h2>
          <p>Screenshots and footage enter through different doors, but both need game-aware extraction, visible uncertainty, and human review. The result can power tracking, storytelling, analysis, and coaching.</p>
        </Reveal>

        <Reveal>
          <ol className="data-pipeline">
            {capabilities.map(({ icon: Icon, title, copy }) => (
              <li key={title}>
                <span className="pipeline-icon"><Icon size={22} aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
