import { ArrowUpRight } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import { projects } from "@/lib/data/projects";

const moreProjects = projects.filter((project) => !project.featured);

function SectionHead() {
  return (
    <div className="rv mb-14 flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
      <div>
        <p className="mb-[18px] font-mono text-[13px] uppercase tracking-[.14em] text-ac">01 — Selected work</p>
        <h2 className="text-[clamp(44px,6.6vw,96px)] font-bold leading-[.98] tracking-[-0.05em]">
          Proof, not <span className="font-serif italic text-ac">promises.</span>
        </h2>
      </div>
      <p className="max-w-[340px] text-[17px] leading-[1.55] text-mut">
        Products where I owned the hard parts, from first idea to real users.
      </p>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((project) => project.featured);

  return (
    <section id="work" className="wrap pb-[clamp(56px,7vw,96px)] pt-[clamp(40px,6vw,88px)]">
      <SectionHead />

      {featured && (
        <div className="gb rv">
          <div className="relative flex flex-wrap items-end justify-between gap-10 overflow-hidden rounded-[29px] bg-[#0F0F11] p-[clamp(28px,4vw,56px)]">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(200,255,61,.16),transparent_70%)]" />
            <div className="relative min-w-0 flex-[1_1_440px]">
              <span className="inline-flex min-h-8 items-center gap-2.5 rounded-full bg-ac/[.12] px-3.5 font-mono text-xs uppercase tracking-[.1em] text-ac">
                <span className="relative inline-flex h-[7px] w-[7px]">
                  <span className="ping absolute inset-0 rounded-full bg-ac" />
                  <span className="relative h-[7px] w-[7px] rounded-full bg-ac" />
                </span>
                Featured · Live on Google Play
              </span>
              <h3 className="mt-7 text-[clamp(48px,7vw,104px)] font-bold leading-[.95] tracking-[-0.055em]">{featured.name}</h3>
              <p className="mt-6 max-w-[520px] text-lg leading-[1.6] text-soft">
                A student super-app for campus commerce, food ordering, deliveries and community services, built for real-time orders and authentication.
              </p>
              <div className="mt-8">
                <a className="btn-p" href={featured.link} target="_blank" rel="noreferrer">
                  View on Google Play <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="relative flex-[0_1_380px]">
              <div className="shim text-[clamp(88px,12vw,176px)] font-extrabold leading-[.85] tracking-[-0.05em]">
                <CountUp to={1500} />+
              </div>
              <div className="mt-4 font-mono text-[13px] uppercase tracking-[.12em] text-soft">students onboarded</div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {moreProjects.map((project, index) => (
          <a
            key={project.name}
            className="card rv min-h-[380px] p-8"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative flex items-center justify-between">
              <span className="font-mono text-[13px] text-mut">0{index + 2}</span>
              <span className="arr inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
                <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </span>
            </div>
            <h3 className="relative mt-12 text-[28px] font-bold leading-[1.1] tracking-[-0.035em]">{project.name}</h3>
            <p className="relative mt-4 flex-grow text-base leading-[1.6] text-mut">{project.desc}</p>
            <p className="relative mt-7 font-mono text-xs leading-[1.8] text-ac">{project.tags.join(" · ")}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
