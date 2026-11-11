import { Check, ArrowRight } from "lucide-react";

export default function PricingCard({ plan }) {
  const {
    name,
    price,
    period,
    description,
    features,
    isPopular,
    buttonText,
    buttonStyle,
  } = plan;

  return (
    <div
      className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        isPopular
          ? "bg-[#5B21F3] text-white shadow-xl shadow-[#5B21F3]/25 scale-[1.03] z-10"
          : "bg-white text-slate-900 border border-[#E5E7EB] shadow-sm hover:shadow-md"
      }`}
    >
      <div>
        {/* Plan Header */}
        <span
          className={`text-[11px] font-bold uppercase tracking-wider ${
            isPopular ? "text-white/80" : "text-slate-400"
          }`}
        >
          {name}
        </span>

        <div className="flex items-baseline gap-1 mt-2.5 mb-2">
          <span className="text-4xl sm:text-[42px] font-black tracking-tight">
            {price}
          </span>
          <span
            className={`text-xs font-medium ${
              isPopular ? "text-white/80" : "text-slate-500"
            }`}
          >
            {period}
          </span>
        </div>

        <p
          className={`text-xs sm:text-[13px] mb-7 font-normal ${
            isPopular ? "text-white/85" : "text-slate-500"
          }`}
        >
          {description}
        </p>

        {/* Features List */}
        <ul className="flex flex-col gap-3 mb-8">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium"
            >
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                  isPopular
                    ? "bg-white/20 text-white"
                    : "bg-[#5B21F3]/10 text-[#5B21F3]"
                }`}
              >
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className={isPopular ? "text-white" : "text-slate-700"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button with Premium Hover & Moving Arrow Effect */}
      <button
        className={`group w-full py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 ${buttonStyle}`}
      >
        <span>{buttonText}</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </button>
    </div>
  );
}
