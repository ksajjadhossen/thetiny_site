import { Lock, ArrowRight } from "lucide-react";

export default function LoginCard() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl shadow-indigo-100/50 p-8 sm:p-10 border border-slate-100 text-center flex flex-col items-center">
      <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center mb-6">
        <Lock className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2">
        Login to make your URL short
      </h3>

      <p className="text-slate-500 text-sm max-w-md mb-8 leading-relaxed">
        Sign in or create a free account to start shortening links, generating
        QR codes, and tracking every click in real time.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
        <button className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm">
          <Lock className="w-4 h-4" />
          <span>Login to Make URL</span>
        </button>

        <button className="w-full sm:w-auto flex-1 flex items-center justify-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors">
          <span>Sign Up Free</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
