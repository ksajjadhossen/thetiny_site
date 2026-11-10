import { Zap, BarChart3, Globe, QrCode, Lock, Clock } from "lucide-react";
import FeatureGridCard from "./FeatureGridCard";

const featuresData = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Shorten URLs instantly with our optimized infrastructure",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track clicks, referrers, locations, and devices",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Fast redirects from anywhere in the world",
  },
  {
    icon: QrCode,
    title: "QR Codes",
    description: "Generate QR codes for any shortened link",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "All links are encrypted and malware scanned",
  },
  {
    icon: Clock,
    title: "Expiration Control",
    description: "Set expiry dates or click limits",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-black text-[#1a1a1a] mb-3 tracking-normal"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              lineHeight: "1.15",
            }}
          >
            Why Choose Our Platform?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Everything you need to manage and track your links
          </p>
        </div>

        {/* 3x2 Grid Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {featuresData.map((item, index) => (
            <FeatureGridCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
