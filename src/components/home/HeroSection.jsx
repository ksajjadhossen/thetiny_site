import TrustBadge from "./TrustBadge";
import LoginCard from "./LoginCard";
import StatsSection from "./StatsSection";

export default function HeroSection() {
  return (
    <section className="bg-slate-50/50 pt-10 sm:pt-14 flex flex-col justify-between min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <TrustBadge />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Shorten Your URL <br />
          <span className="text-[#4F46E5]">in seconds</span>
        </h1>

        <p className="mt-4 text-slate-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
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
