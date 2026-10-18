export default function Closing() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10">
      <div
        aria-hidden="true"
        className="blob1 pointer-events-none absolute -bottom-[260px] left-1/2 -ml-[360px] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(200,255,61,.22),transparent_68%)] blur-[30px]"
      />
      <div className="wrap pb-[clamp(56px,7vw,96px)] pt-[clamp(72px,10vw,150px)] text-center">
        <p className="mb-7 font-mono text-[13px] uppercase tracking-[.14em] text-ac">04 — So far</p>
        <h2 className="rv text-[clamp(52px,10vw,152px)] font-bold leading-[.92] tracking-[-0.06em]">
          That is the work.
          <br />
          <span className="shim font-serif italic">More coming.</span>
        </h2>
        <p className="mx-auto mt-9 max-w-[480px] text-lg leading-[1.55] text-soft">
          Everything above is real, shipped and live. Still building.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-x-7 font-mono text-[13px]">
          <a className="lnk" href="https://github.com/iamshubham1704" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="lnk" href="https://www.linkedin.com/in/iamshubhamsolanki" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}
