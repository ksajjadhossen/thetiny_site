import { Lock, ArrowRight } from "lucide-react";

export default function LoginCard() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl shadow-[#5B21F3]/10 p-8 sm:p-10 border border-slate-100 text-center flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-[#5B21F3]/10 text-[#5B21F3] flex items-center justify-center mb-5">
        <Lock className="w-6 h-6 stroke-[2.2]" />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
        Login to make your URL short
      </h3>

      <p className="text-slate-500 text-sm max-w-md mb-7 leading-relaxed">
        Sign in or create a free account to start shortening links, generating
        QR codes, and tracking every click in real time.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
        {/* Primary Button */}
        <button className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#5B21F3] hover:bg-[#4c1cd4] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm">
          <Lock className="w-4 h-4" />
          <span>Login to Make URL</span>
        </button>

        {/* Secondary Outline Button */}
        <button className="w-full sm:w-auto flex-1 flex items-center justify-center gap-1.5 bg-white border-2 border-[#5B21F3] hover:bg-[#5B21F3]/5 text-[#5B21F3] font-semibold px-5 py-2.5 rounded-xl text-sm transition-all">
          <span>Sign Up Free</span>
          <ArrowRight className="w-4 h-4 text-[#5B21F3]" />
        </button>
      </div>
    </div>
  );
}
