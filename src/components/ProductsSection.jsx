import { ArrowUpRight, Check, Crosshair, ImageSquare, Scan, Stack } from "@phosphor-icons/react";
import { Reveal } from "./ui/Reveal";

export function ProductsSection() {
  return (
    <section className="section products-section" id="products">
      <div className="shell">
        <Reveal className="section-heading">
          <div>
            <h2>Two products built around data<br /><em>the game won’t export.</em></h2>
          </div>
        </Reveal>

        <div className="product-grid">
          <Reveal className="product-card product-live">
            <div className="product-card-head">
              <div className="product-icon"><Stack size={22} aria-hidden="true" /></div>
              <span className="status-pill live"><i /> Live</span>
            </div>
            <div className="product-visual dynasty-visual" aria-hidden="true">
              <div className="season-track">
                <span><i /> Season 01</span>
                <span><i /> Season 02</span>
                <span className="current"><i /> Current</span>
              </div>
              <div className="history-flow">
                <span>Roster</span><b>→</b><span>Recruiting</span><b>→</b><span>History</span>
              </div>
              <small>Multi-season record</small>
            </div>
            <div>
              <p className="product-kicker">Dynasty Central</p>
              <h3>Your dynasty,<br />season after season.</h3>
              <p>Import supported roster and recruiting screens, follow your program across seasons, and turn one save into a history worth keeping.</p>
            </div>
            <ul>
              <li><ImageSquare size={15} aria-hidden="true" /><span>Import supported game screens</span></li>
              <li><Scan size={15} aria-hidden="true" /><span>Track rosters, recruiting, and seasons</span></li>
              <li><Check size={15} aria-hidden="true" /><span>Preserve the history behind your program</span></li>
            </ul>
            <a href="https://dynastycentral.gg">Explore Dynasty Central <ArrowUpRight size={15} aria-hidden="true" /></a>
          </Reveal>

          <Reveal className="product-card product-build" delay={0.08}>
            <div className="product-card-head">
              <div className="product-icon coral"><Crosshair size={22} aria-hidden="true" /></div>
              <span className="status-pill building"><i /> In development</span>
            </div>
            <div className="product-visual replay-visual" aria-hidden="true">
              <div className="replay-frames"><i /><i /><i /><i /><i /></div>
              <div className="replay-cursor"><span /></div>
              <div className="replay-labels"><span>Gameplay footage</span><span>Review pass</span></div>
              <small>Concept workflow</small>
            </div>
            <div>
              <p className="product-kicker">ApexLens</p>
              <h3>Exploring a clearer way<br />to review gameplay.</h3>
              <p>ApexLens is exploring ways to turn gameplay footage into reviewable events and patterns, beginning with Apex Legends.</p>
            </div>
            <div className="development-note">
              <span>Current focus</span>
              <p>Building and validating the first gameplay-review workflows.</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="proof-rail">
          <div><span>01</span><p><strong>Live product</strong>Dynasty Central is available today.</p></div>
          <div><span>02</span><p><strong>Real inputs</strong>Built around screenshots players already take.</p></div>
          <div><span>03</span><p><strong>Reviewable results</strong>Players confirm records before saving.</p></div>
        </Reveal>
      </div>
    </section>
  );
}
