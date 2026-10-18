import { cssVars } from "@/lib/style";

const dots = Array.from({ length: 400 }, (_, index) => index);

export default function NowBuilding() {
  return (
    <section id="now" className="wrap pb-[clamp(56px,7vw,96px)] pt-[clamp(24px,4vw,56px)]">
      <div className="bigcard">
        <div aria-hidden="true" className="blob1 pointer-events-none absolute -left-[120px] -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,123,255,.3),transparent_68%)] blur-[30px]" />
        <div className="relative flex flex-wrap items-center gap-x-14 gap-y-12">
          <div className="min-w-0 flex-[1_1_360px]">
            <span className="inline-flex min-h-8 items-center gap-2.5 rounded-full bg-ac/[.12] px-3.5 font-mono text-xs uppercase tracking-[.1em] text-ac">
              <span className="relative inline-flex h-[7px] w-[7px]">
                <span className="ping absolute inset-0 rounded-full bg-ac" />
                <span className="relative h-[7px] w-[7px] rounded-full bg-ac" />
              </span>
              Now building · In pilot
            </span>
            <h2 className="shim mt-7 text-[clamp(64px,10vw,150px)] font-extrabold leading-[.9] tracking-[-0.06em]">Broll AI</h2>
            <p className="mt-5 font-mono text-base leading-relaxed">
              <a className="lnk text-ac" href="https://trybroll.com" target="_blank" rel="noreferrer">
                trybroll.com ↗
              </a>
            </p>
            <div className="mt-10 flex flex-wrap items-baseline gap-4">
              <span
                className="cnt text-[clamp(72px,9vw,128px)] font-extrabold leading-[.85] tracking-[-0.03em] text-ac"
                role="img"
                aria-label="400 plus pilot customers"
              />
              <span className="font-mono text-[13px] uppercase tracking-[.12em] text-soft">pilot customers</span>
            </div>
          </div>
          <div className="dots min-w-0 flex-[1.3_1_460px]" aria-hidden="true">
            {dots.map((index) => (
              <span key={index} className="dot" style={cssVars({ "--i": index })} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
