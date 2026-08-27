import { ArrowUpRight, Check, ImageSquare, Stack } from "@phosphor-icons/react";
import { Reveal } from "./ui/Reveal";

export function ProductsSection() {
  return (
    <section className="section products-section" id="products">
      <div className="shell">
        <Reveal className="section-heading section-heading-stacked products-heading">
          <h2>Two products. Two kinds of game data worth keeping.</h2>
          <p>One product is live today. The next is exploring how the same discipline can make gameplay footage easier to review.</p>
        </Reveal>

        <Reveal as="article" className="product-world dynasty-world">
          <div className="product-world-copy">
            <div className="product-name"><Stack size={22} aria-hidden="true" /><span>Dynasty Central</span><strong>Live</strong></div>
            <h3>Your dynasty, season after season.</h3>
            <p>Import supported roster and recruiting screens, follow your program across seasons, and turn one save into a history worth keeping.</p>
            <ul>
              <li><ImageSquare size={17} aria-hidden="true" /> Import supported game screens</li>
              <li><Check size={17} aria-hidden="true" /> Review records before they are saved</li>
              <li><Stack size={17} aria-hidden="true" /> Keep the history behind your program</li>
            </ul>
            <a className="button button-primary" href="https://dynastycentral.gg">Explore Dynasty Central <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="dynasty-collage">
            <img className="dc-screen dc-dashboard" src="/assets/products/dynasty-central/real/dashboard.webp" alt="Dynasty Central program command center" />
            <img className="dc-screen dc-roster" src="/assets/products/dynasty-central/real/roster.webp" alt="Dynasty Central roster and scheme-fit view" />
            <img className="dc-screen dc-recruiting" src="/assets/products/dynasty-central/real/recruiting.webp" alt="Dynasty Central recruiting board with active targets, offers, and commitments" />
          </div>
        </Reveal>

        <Reveal as="article" className="product-world apexlens-world" delay={0.08}>
          <div className="apexlens-art">
            <img className="apexlens-gameplay" src="/assets/products/apexlens/decisive-frame.jpg" alt="Apex Legends combat frame showing a player exposed to two opponents during a reload" />
            <img className="apexlens-review" src="/assets/products/apexlens/demo-ui.jpg" alt="ApexLens match review interface with fight timeline and player stats" />
          </div>
          <div className="product-world-copy">
            <div className="product-name"><span>ApexLens</span><strong>Private beta</strong></div>
            <h3>A clearer way to review gameplay.</h3>
            <p>ApexLens turns Apex Legends recordings into evidence-backed fight reviews, connecting each result to the exact frames behind it.</p>
            <p className="coaching-vision">The vision is an AI coach that helps a player understand what happened, why it mattered, and what to practice next—without replacing the player’s judgment.</p>
            <a className="button button-primary" href="https://apexlens.gg/#waitlist">Join the private beta <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
