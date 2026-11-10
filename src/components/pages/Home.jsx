import FeatureSection from "../home/FeatureSection";
import HeroSection from "../home/HeroSection";
import PopularLinks from "../home/PopularLinks";
import PricingSection from "../home/PricingSection";
import TestimonialSection from "../home/TestimonialSection";
import WhyChooseSection from "../home/WhyChooseSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFAFF]">
      <HeroSection />
      <PopularLinks />
      <FeatureSection />
      <PricingSection />
      <TestimonialSection />
      <WhyChooseSection />
    </main>
  );
}
