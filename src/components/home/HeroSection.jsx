import TrustBadge from "./TrustBadge";
import LoginCard from "./LoginCard";
import StatsSection from "./StatsSection";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-b from-[#F7F6FF] via-[#FBFAFF] to-[#F2EFFF] pt-10 sm:pt-12 flex flex-col justify-between min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-5">
          <TrustBadge />
        </div>

        <h1 className="text-[44px] sm:text-[52px] md:text-[56px] font-black text-slate-900 leading-[1.1] hero-title">
          Shorten Your URL <br />
          <span className="text-[#5B21F3]">in seconds</span>
        </h1>

        <p className="mt-4 text-slate-505 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Create short, memorable links that you can share anywhere.{" "}
          <br className="hidden sm:inline" />
          Track every click with powerful analytics.
        </p>

        <div className="mt-8 sm:mt-10">
          <LoginCard />
        </div>
      </div>

      <StatsSection />
    </section>
  );
}
