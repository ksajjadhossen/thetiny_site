import FeatureSection from "../home/FeatureSection";
import HeroSection from "../home/HeroSection";
import PopularLinks from "../home/PopularLinks";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFAFF]">
      <HeroSection />
      <PopularLinks />
      <FeatureSection />
    </main>
  );
}
