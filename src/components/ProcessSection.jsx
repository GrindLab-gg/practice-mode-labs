import { Reveal } from "./ui/Reveal";
import { WorkflowStage } from "./process/WorkflowStage";

export function ProcessSection() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="shell">
        <Reveal className="section-heading section-heading-stacked process-heading">
          <h2>Games show you the data.<br /><em>They rarely let you keep it.</em></h2>
          <p>Dynasty Central turns supported screenshots into a persistent record of the program you are building, without another spreadsheet.</p>
        </Reveal>
        <Reveal><WorkflowStage /></Reveal>
      </div>
    </section>
  );
}
