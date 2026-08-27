import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductRail } from "./components/ProductRail";
import { ProcessSection } from "./components/ProcessSection";
import { ProductsSection } from "./components/ProductsSection";
import { TechnologySection } from "./components/TechnologySection";
import { ApproachSection } from "./components/ApproachSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>
      <Header />
      <main id="top">
        <Hero />
        <ProductRail />
        <ProcessSection />
        <ProductsSection />
        <TechnologySection />
        <ApproachSection />
      </main>
      <Footer />
    </>
  );
}
