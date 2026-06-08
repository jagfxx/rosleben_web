import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { IngredientsSection } from "@/components/sections/IngredientsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowToUseSection } from "@/components/sections/HowToUseSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductsSection />
        <IngredientsSection />
        <BenefitsSection />
        <HowToUseSection />
        <ComparisonSection />
        <TestimonialsSection />
        <OfferSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
