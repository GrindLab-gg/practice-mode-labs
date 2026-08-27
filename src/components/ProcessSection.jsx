import { Check, Database, Scan, UploadSimple } from "@phosphor-icons/react";
import { Reveal } from "./ui/Reveal";

const steps = [
  { icon: UploadSimple, number: "01", title: "Capture", copy: "Upload a supported roster or recruiting screenshot." },
  { icon: Scan, number: "02", title: "Extract", copy: "Dynasty Central identifies the supported fields shown on screen." },
  { icon: Check, number: "03", title: "Review", copy: "Confirm the result and correct anything that needs attention." },
  { icon: Database, number: "04", title: "Use", copy: "Add the record to your dynasty history." },
];

export function ProcessSection() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="shell">
        <Reveal className="section-heading process-heading">
          <div>
            <h2>Games show you the data.<br /><em>They rarely let you keep it.</em></h2>
          </div>
          <p>Dynasty Central turns supported screenshots into a persistent record of the program you’re building—without another spreadsheet.</p>
        </Reveal>

        <ol className="process-list">
          {steps.map(({ icon: Icon, number, title, copy }, index) => (
            <Reveal as="li" delay={index * 0.06} key={title}>
              <span className="step-number">{number}</span>
              <span className="step-icon"><Icon size={18} aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
