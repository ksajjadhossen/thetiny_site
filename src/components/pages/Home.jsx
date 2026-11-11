import AnimatedSection from "../home/AnimatedSection";
import FeatureSection from "../home/FeatureSection";
import HeroSection from "../home/HeroSection";
import PopularLinks from "../home/PopularLinks";
import PricingSection from "../home/PricingSection";
import TestimonialSection from "../home/TestimonialSection";
import WhyChooseSection from "../home/WhyChooseSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFAFF] overflow-hidden">
      <HeroSection />

      <AnimatedSection>
        <PopularLinks />
      </AnimatedSection>

      <AnimatedSection>
        <FeatureSection />
      </AnimatedSection>

      <AnimatedSection>
        <PricingSection />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhyChooseSection />
      </AnimatedSection>
    </main>
  );
}
