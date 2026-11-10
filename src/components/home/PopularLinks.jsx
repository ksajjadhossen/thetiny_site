import { Copy, Check, QrCode, Sparkles } from "lucide-react";
import { useState } from "react";

const popularLinksData = [
  {
    id: 1,
    shortUrl: "https://thetiny.site/ARLSEN",
    originalUrl:
      "https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+...",
    clicks: "421 clicks",
  },
  {
    id: 2,
    shortUrl: "https://thetiny.site/BArxCj",
    originalUrl: "https://leena45945.softr.app",
    clicks: "269 clicks",
  },
  {
    id: 3,
    shortUrl: "https://thetiny.site/kLrnXd",
    originalUrl:
      "https://supportersframe.com/blog/supportersframecom-introduces-qr-code...",
    clicks: "85 clicks",
  },
  {
    id: 4,
    shortUrl: "https://thetiny.site/qQNTp0",
    originalUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3aBliGp4uunkBsQVLy-zLWcwkWh...",
    clicks: "65 clicks",
  },
  {
    id: 5,
    shortUrl: "https://thetiny.site/k4DiP8",
    originalUrl: "https://solverfirm.com/",
    clicks: "33 clicks",
  },
];

export default function PopularLinks() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
            Most Popular Links
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Check out the most clicked links on our platform
          </p>
        </div>

        {/* Links Container - Extended width for wider option bars */}
        <div className="w-full max-w-5xl md:max-w-[85%] flex flex-col gap-4">
          {popularLinksData.map((item) => (
            <div
              key={item.id}
              className="w-full bg-[#F9FAFB] rounded-xl px-6 py-4 sm:py-5 border border-[#E5E7EB] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {/* Short & Long URLs */}
              <div className="flex flex-col min-w-0 flex-1">
                <a
                  href={item.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm sm:text-base font-medium text-[#5B21F3] hover:underline inline-block truncate"
                >
                  {item.shortUrl}
                </a>
                <span className="text-xs sm:text-sm text-slate-400 truncate mt-1 font-sans">
                  {item.originalUrl}
                </span>
              </div>

              {/* Actions & Click Counter */}
              <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
                {/* Clicks count with Sparkle Icon */}
                <div className="flex items-center gap-1.5 text-slate-700 text-xs sm:text-sm font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.clicks}</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(item.shortUrl, item.id)}
                    className="flex items-center gap-1.5 bg-[#5B21F3] hover:bg-[#4c1cd4] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  {/* QR Code Button */}
                  <button className="flex items-center gap-1.5 bg-[#F2EFFF] hover:bg-[#e4dffd] text-[#5B21F3] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95">
                    <QrCode className="w-4 h-4" />
                    <span>QR</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
