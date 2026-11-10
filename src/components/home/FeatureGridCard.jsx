export default function FeatureGridCard({ item }) {
  const { icon: Icon, title, description } = item;

  return (
    <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left">
      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-[#5B21F3]/10 text-[#5B21F3] flex items-center justify-center mb-5 shrink-0">
        <Icon className="w-5 h-5 stroke-2" />
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
        {description}
      </p>
    </div>
  );
}
