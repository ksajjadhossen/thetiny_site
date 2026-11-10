import React from "react";
import { Star } from "lucide-react";

export default function TestimonialCard({ item }) {
  return (
    <div className="w-[300px] sm:w-[320px] bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm shrink-0 flex flex-col justify-between text-left">
      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#5B21F3] text-[#5B21F3]" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-slate-800 text-sm font-medium mb-4 leading-normal">
          "{item.review}"
        </p>
      </div>

      {/* User Info */}
      <div className="flex flex-col gap-0.5">
        <h4 className="text-sm font-bold text-slate-900 leading-tight">
          {item.name}
        </h4>
        <span className="text-xs text-slate-400 font-normal">{item.role}</span>
      </div>
    </div>
  );
}
