import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "./ui/Reveal";

export function ProductRail() {
  return (
    <section className="product-rail" aria-label="Practice Mode Labs products">
      <div className="shell product-rail-inner">
        <Reveal className="rail-intro">
          <p>One lab. Two ways to recover the game data players care about.</p>
        </Reveal>
        <Reveal as="a" className="rail-product rail-product-live" href="https://dynastycentral.gg" delay={0.06}>
          <img src="/assets/products/dynasty-central/real/dashboard.webp" alt="" />
          <span><strong>Dynasty Central</strong><small>Live product</small></span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </Reveal>
        <Reveal as="a" className="rail-product" href="https://apexlens.gg/#waitlist" delay={0.1}>
          <img src="/assets/products/apexlens/decisive-frame.jpg" alt="" />
          <span><strong>ApexLens</strong><small>Private beta</small></span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
