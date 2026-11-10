import { Check } from "lucide-react";
import AnalyticsCard from "./AnalyticsCard";

const featuresList = [
  "Custom branded short links",
  "UTM parameter builder",
  "Powerful analytics dashboard",
  "QR Code generator (PNG/SVG)",
  "REST API with full documentation",
];

export default function FeatureSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start lg:col-span-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B21F3] mb-3">
            PREMIUM
          </span>

          <h2 className="text-3xl sm:text-[38px] font-black text-slate-900 leading-[1.15] mb-4">
            Unlock powerful tools for <br />
            serious growth.
          </h2>

          {/* Natural wrapping paragraph with precise width control matching original site */}
          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-115">
            Go beyond basic shortening with a full suite of marketing and
            developer tools — custom branded links, UTM builders, deep
            analytics, QR codes, and a REST API for your apps.
          </p>

          {/* Feature Checklist */}
          <ul className="flex flex-col gap-2.5">
            {featuresList.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2.5 text-slate-700 font-medium text-sm"
              >
                <div className="w-4 h-4 rounded-full bg-[#5B21F3]/10 text-[#5B21F3] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Preview Card */}
        <div className="w-full lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg">
            <AnalyticsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
