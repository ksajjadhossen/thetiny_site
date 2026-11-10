import React from "react";
import PricingCard from "./PricingCard";

const pricingPlans = [
  {
    name: "FREE",
    price: "$0",
    period: "/forever",
    description: "Great for individuals and casual use.",
    isPopular: false,
    buttonText: "Get Started Free",
    buttonStyle: "bg-[#5B21F3] hover:bg-[#4c1cd4] text-white",
    features: [
      "Unlimited link shortening",
      "Basic click counter",
      "HTTPS security",
      "QR code (basic)",
      "Cross-device support",
    ],
  },
  {
    name: "PRO",
    price: "$9",
    period: "/per month",
    description: "For creators, marketers, and power users.",
    isPopular: true,
    buttonText: "Start 14-Day Trial",
    buttonStyle: "bg-white hover:bg-slate-100 text-[#5B21F3]",
    features: [
      "Everything in Free",
      "Custom short links",
      "Advanced analytics",
      "UTM builder",
      "QR code (custom)",
      "Browser extension",
      "Priority support",
    ],
  },
  {
    name: "BUSINESS",
    price: "$29",
    period: "/per month",
    description: "For teams and growing companies.",
    isPopular: false,
    buttonText: "Subscribe Now",
    buttonStyle: "bg-[#5B21F3] hover:bg-[#4c1cd4] text-white",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Developer API",
      "Bulk link creation",
      "White-label domain",
      "App integrations",
      "Dedicated support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            className="font-bold uppercase tracking-[0.1em] text-slate-400 mb-3"
            style={{ fontSize: "0.875rem" }}
          >
            PRICING
          </p>
          <h2
            className="font-black text-[#1a1a1a] mb-3 tracking-normal"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              lineHeight: "1.15",
            }}
          >
            Simple, transparent pricing.
          </h2>
          <p className="text-base text-[#7b7c80] font-normal">
            No hidden fees. Start free, scale when you're ready.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
