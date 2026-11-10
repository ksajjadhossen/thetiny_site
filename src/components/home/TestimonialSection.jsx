import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Nadim Majid",
    role: "User",
    review: "A good platform for Link management.",
  },
  {
    name: "Tanvir Ahmed",
    role: "Full-Stack Developer",
    review:
      "The custom branded links and analytics dashboard made marketing campaigns so much easier.",
  },
  {
    name: "Rahim Khan",
    role: "Digital Marketer",
    review:
      "Super clean interface and lightning-fast redirection. Highly recommended!",
  },
  {
    name: "Sabrina Sultana",
    role: "UI/UX Designer",
    review:
      "Love the simplicity and the QR code generation feature. Works seamlessly.",
  },
  {
    name: "Khandaker Sajjad",
    role: "Software Engineer",
    review:
      "Extremely reliable API and robust link tracking features for all our enterprise tools.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-14 text-center">
        {/* Section Header */}
        <p
          className="font-bold uppercase tracking-widest text-slate-400 mb-3"
          style={{ fontSize: "0.875rem" }}
        >
          TESTIMONIALS
        </p>
        <h2
          className="font-black text-[#1a1a1a] mb-3 tracking-normal"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            lineHeight: "1.15",
          }}
        >
          Loved by 80,000+ users worldwide.
        </h2>
      </div>

      {/* Infinite Sliding Marquee Effect */}
      <div className="w-full relative flex overflow-x-hidden group">
        <div className="flex gap-6 animate-marquee py-4">
          {testimonials.concat(testimonials).map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
