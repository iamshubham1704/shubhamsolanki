import { experiences } from "@/lib/data/experience";

const journeySummary = [
  { big: "2019", label: "Started coding at 14 with Arduino" },
  { big: "2", label: "Hackathon wins: HackwithMAIT and Google Developer Challenge" },
  { big: "1", label: "Venture: CollegePaglu" },
  { big: "1,500+", label: "Users, live on Google Play" },
];

export default function Experience() {
  return (
    <section id="log" className="border-y border-white/10 bg-panel">
      <div className="wrap pb-[clamp(64px,8vw,120px)] pt-[clamp(64px,8vw,120px)]">
        <div className="rv mb-14">
          <p className="mb-[18px] font-mono text-[13px] uppercase tracking-[.14em] text-ac">03 — Operator log</p>
          <h2 className="text-[clamp(44px,6.6vw,96px)] font-bold leading-[.98] tracking-[-0.05em]">
            Shipped to <span className="font-serif italic text-ac">real users.</span>
          </h2>
        </div>

        <div className="relative pl-[clamp(20px,4vw,48px)]">
          <div
            aria-hidden="true"
            className="tl absolute bottom-2 left-0 top-2 w-px bg-[linear-gradient(var(--ac),rgba(243,241,234,.1))]"
          />
          {experiences.map((experience) => (
            <div key={experience.role + experience.company} className="row rv py-9 pr-6">
              <span
                aria-hidden="true"
                className="core absolute top-[46px] h-[11px] w-[11px] rounded-full bg-ac"
                style={{ left: "calc(-1 * clamp(20px, 4vw, 48px) - 5px)" }}
              />
              <div className="flex flex-wrap justify-between gap-x-12 gap-y-5">
                <div className="flex-[1_1_280px]">
                  <p className="font-mono text-[13px] text-ac">{experience.duration}</p>
                  <h3 className="mt-3.5 text-[clamp(28px,3.2vw,40px)] font-bold leading-[1.05] tracking-[-0.04em]">{experience.role}</h3>
                  <p className="mt-2.5 text-lg text-mut">{experience.company}</p>
                </div>
                <ul className="m-0 flex flex-[1.6_1_380px] list-none flex-col gap-4 p-0 text-[17px] leading-[1.55] text-body">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="rv mb-12 text-center">
            <p className="mb-4 font-mono text-[13px] uppercase tracking-[.14em] text-mut">The journey so far</p>
            <p className="mx-auto max-w-[900px] font-serif text-[clamp(36px,5vw,68px)] italic leading-none tracking-[-0.02em]">
              From a 9th-grade Arduino to a <span className="text-ac">Play Store launch.</span>
            </p>
          </div>
          <div className="rv grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] border-t border-white/[.14]">
            {journeySummary.map((item) => (
              <div key={item.label} className="jstat">
                <div className="text-[clamp(34px,3.6vw,52px)] font-bold leading-none tracking-[-0.05em]">{item.big}</div>
                <div className="mt-2.5 font-mono text-[11px] uppercase leading-normal tracking-[.1em] text-mut">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
