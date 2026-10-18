import CountUp from "@/components/ui/CountUp";

const stats = [
  { to: 4, suffix: "", label: "Products shipped" },
  { to: 1500, suffix: "+", label: "Students onboarded" },
  { to: 200, suffix: "K+", label: "Content views streamed" },
  { to: 15, suffix: "M+", label: "Audience of launch partner" },
];

export default function Stats() {
  return (
    <section className="wrap rv pb-[clamp(40px,5vw,72px)] pt-[clamp(56px,7vw,96px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t border-white/[.14]">
        {stats.map((stat) => (
          <div key={stat.label} className="stat border-b border-white/[.14] py-8 pr-6">
            <div className="text-[clamp(52px,6vw,88px)] font-bold leading-none tracking-[-0.05em]">
              <CountUp to={stat.to} />
              <span className="text-ac">{stat.suffix}</span>
            </div>
            <div className="mt-3.5 font-mono text-xs uppercase tracking-[.12em] text-mut">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
