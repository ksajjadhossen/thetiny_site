import { useEffect, useRef, useState } from "react";

// Custom NumberTicker Component to animate numbers smoothly
function NumberTicker({ value, className = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Parse numeric value and suffix (e.g., "100K+" -> numeric: 100, suffix: "K+")
  const numericMatch = value.toString().match(/[\d.]+/);
  const numericVal = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.toString().replace(/[\d.]+/, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    const increment = numericVal / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericVal) {
        setCount(numericVal);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [hasStarted, numericVal]);

  // Format decimal values properly if needed
  const formattedCount =
    numericVal % 1 !== 0
      ? count.toFixed(1)
      : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {formattedCount}
      {suffix}
    </span>
  );
}

const statsData = [
  { value: "100K+", label: "Links Created" },
  { value: "1M+", label: "Total Clicks" },
  { value: "180+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

export default function StatsSection() {
  return (
    <div className="w-full bg-[#4F46E5] py-10 text-white mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <NumberTicker
              value={stat.value}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            />
            <span className="text-xs sm:text-sm text-indigo-200 font-medium mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
