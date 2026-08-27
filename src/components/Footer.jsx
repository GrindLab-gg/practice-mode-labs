import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "./ui/Reveal";

export function Footer() {
  return (
    <footer id="company">
      <div className="shell">
        <Reveal className="contact-panel">
          <div>
            <h2>Still tracking a game in<br /><em>screenshots or spreadsheets?</em></h2>
          </div>
          <div className="contact-copy">
            <p>Tell us how your community handles it today. We’re interested in the workflows players have built because the game itself stops short.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:team@dynastycentral.gg">Tell us about the workflow <ArrowRight size={16} aria-hidden="true" /></a>
              <a className="text-link" href="https://dynastycentral.gg">Explore Dynasty Central <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </Reveal>

        <div className="footer-row">
          <div>
            <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /></span><span>Practice Mode Labs</span></a>
            <p>Independent software company · North Carolina</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="https://dynastycentral.gg">Dynasty Central</a>
            <a href="mailto:team@dynastycentral.gg">Contact</a>
          </nav>
          <p>© 2026 Practice Mode Labs LLC</p>
        </div>
      </div>
    </footer>
  );
}
