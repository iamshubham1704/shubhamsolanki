export default function Manifesto() {
  return (
    <section className="wrap rv pb-[clamp(56px,7vw,96px)] pt-[clamp(24px,4vw,56px)]">
      <p className="mb-7 font-mono text-[13px] uppercase tracking-[.14em] text-ac">How I operate</p>
      <div className="border-b border-white/[.14]">
        <div className="mf">
          <span className="no">01</span>
          <span className="hl">Ship ugly,</span>
          <span className="font-serif italic">then ship better.</span>
          <span className="sub">Real feedback beats a perfect roadmap every time.</span>
        </div>
        <div className="mf">
          <span className="no">02</span>
          <span>Users</span>
          <span className="hl font-serif italic">over opinions.</span>
          <span className="sub">1,500+ students told me more than any spec could.</span>
        </div>
        <div className="mf">
          <span className="no">03</span>
          <span className="hl">Own it</span>
          <span className="font-serif italic">end to end.</span>
          <span className="sub">Product, backend, mobile, ML. I do not hand off the hard parts.</span>
        </div>
      </div>
    </section>
  );
}
