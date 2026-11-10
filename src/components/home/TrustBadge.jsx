import { TrendingUp } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#5B21F3]/10 border border-[#5B21F3]/20 text-[#5B21F3] text-xs font-medium shadow-sm">
      <TrendingUp className="w-3.5 h-3.5 text-[#5B21F3]" />
      <span>Trusted by thousands of users</span>
    </div>
  );
}
