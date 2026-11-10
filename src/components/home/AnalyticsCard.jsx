import { useEffect, useRef, useState } from "react";

const analyticsData = [
  { link: "shorturl.bd/ig9Kp2", clicks: 1247, progress: 85 },
  { link: "shorturl.bd/yt3Nm8", clicks: 589, progress: 55 },
  { link: "shorturl.bd/1k7Rv1", clicks: 312, progress: 35 },
  { link: "shorturl.bd/fb2Wx9", clicks: 198, progress: 20 },
];

function AnimatedCounter({ end, hasStarted }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1800; // 1.8 seconds animation
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return <span>{count.toLocaleString()}</span>;
}

export default function AnalyticsCard() {
  const cardRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [hasStarted]);

  return (
    <div
      ref={cardRef}
      className="w-full bg-[#5B21F3] text-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#5B21F3]/30 border border-white/10"
    >
      <h4 className="text-base font-bold text-white mb-7 tracking-wide">
        Link Analytics Dashboard
      </h4>

      <div className="flex flex-col gap-6">
        {analyticsData.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-mono font-semibold">
              <span className="text-white/90">{item.link}</span>
              <span className="font-bold text-white">
                <AnimatedCounter end={item.clicks} hasStarted={hasStarted} />
              </span>
            </div>

            {/* Smooth Animated Progress Bar */}
            <div className="w-full h-2 bg-white/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/80 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: hasStarted ? `${item.progress}%` : "0%",
                  transitionDelay: `${index * 150}ms`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
