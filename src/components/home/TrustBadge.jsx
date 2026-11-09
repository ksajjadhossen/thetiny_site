import { Sparkles } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#E0E7FF] text-[#4F46E5] text-xs font-medium">
      <Sparkles className="w-3.5 h-3.5" />
      <span>Trusted by thousands of users</span>
    </div>
  );
}
