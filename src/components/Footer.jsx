import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "./ui/Reveal";
import { ContactForm } from "./ContactForm";

export function Footer() {
  return (
    <footer id="company">
      <div className="shell">
        <Reveal className="contact-panel">
          <div>
            <h2>Still tracking a game in screenshots or spreadsheets?</h2>
          </div>
          <div className="contact-copy">
            <p>Tell us how your community handles it today. We’re interested in the workflows players have built because the game itself stops short.</p>
            <ContactForm />
            <div className="contact-actions">
              <a className="text-link" href="https://dynastycentral.gg">Explore Dynasty Central <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </Reveal>

        <div className="footer-row">
          <div>
            <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /></span><span>Practice Mode Labs</span></a>
            <p>Independent software company in North Carolina</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="https://dynastycentral.gg">Dynasty Central</a>
            <a href="#company">Share a workflow</a>
          </nav>
          <p>© 2026 Practice Mode Labs LLC</p>
        </div>
      </div>
    </footer>
  );
}
