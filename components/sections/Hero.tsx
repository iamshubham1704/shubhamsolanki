"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cssVars } from "@/lib/style";

const slotWords = ["wild ideas", "3am hunches", "napkin sketches", "rough drafts", "wild ideas"];

export default function Hero() {
  const trackMouse = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="top" onMouseMove={trackMouse} className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,255,61,.14),transparent_65%)] transition-[left,top] duration-300 ease-out"
        style={{ left: "var(--mx, 700px)", top: "var(--my, 260px)" }}
      />
      <div aria-hidden="true" className="blob1 pointer-events-none absolute -right-20 -top-[120px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(139,123,255,.38),transparent_68%)] blur-[30px]" />
      <div aria-hidden="true" className="blob2 pointer-events-none absolute -bottom-[200px] -left-40 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(200,255,61,.2),transparent_68%)] blur-[30px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(243,241,234,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(243,241,234,.05)_1px,transparent_1px)] bg-[length:64px_64px] [mask-image:radial-gradient(ellipse_at_40%_40%,#000_20%,transparent_75%)]"
      />

      <div className="wrap flex flex-wrap items-center gap-x-10 gap-y-14 pb-[clamp(64px,8vw,112px)] pt-[clamp(48px,7vw,96px)]">
        <div className="min-w-0 flex-[1_1_560px]">
          <h1 className="m-0 text-[clamp(52px,8.4vw,128px)] font-bold leading-[.96] tracking-[-0.05em]">
            <span className="wm"><span className="w" style={cssVars({ "--d": "150ms" })}>I turn</span></span><br />
            <span className="wm">
              <span className="w" style={cssVars({ "--d": "300ms" })}>
                <span className="slot" aria-label="wild ideas">
                  <span aria-hidden="true" className="block">
                    {slotWords.map((word, index) => (
                      <span key={index} className="block font-serif italic">{word}</span>
                    ))}
                  </span>
                </span>
              </span>
            </span><br />
            <span className="wm"><span className="w" style={cssVars({ "--d": "450ms" })}>into live</span></span><br />
            <span className="wm"><span className="w shim" style={cssVars({ "--d": "600ms" })}>products.</span></span>
          </h1>
          <p className="fu mt-9 max-w-[520px] text-[clamp(17px,1.5vw,20px)] leading-[1.55] text-soft" style={cssVars({ "--d": "900ms" })}>
            I own the whole thing: product, backend, mobile, AI. Then I put it in front of real users. A campus super-app with 1,500+ students. An AI micro-drama platform with 200K+ views.
          </p>
          <div className="fu mt-10 flex flex-wrap gap-3.5" style={cssVars({ "--d": "1050ms" })}>
            <a className="btn-p" href="#work">
              Explore the work <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </a>
          </div>
          <div className="fu mt-7 flex flex-wrap gap-x-6 font-mono text-[13px]" style={cssVars({ "--d": "1200ms" })}>
            <a className="lnk" href="https://github.com/iamshubham1704" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="lnk" href="https://www.linkedin.com/in/iamshubhamsolanki" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>

        <div className="fu relative mx-auto w-full max-w-[460px] flex-[0_1_460px] pb-[70px]" style={cssVars({ "--d": "500ms" })}>
          <div className="fl relative rotate-2" style={cssVars({ "--d": "0ms" })}>
            <div aria-hidden="true" className="absolute -inset-3.5 rounded-[38px] bg-[conic-gradient(from_200deg,var(--ac),#8B7BFF,transparent_60%)] opacity-50 blur-[24px]" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/[.18] bg-card shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)]">
              <Image
                src="/milestones/4.png"
                alt="Team photo with trophies and certificates at an Azure Developer Community event"
                width={1024}
                height={576}
                priority
                className="block h-auto w-full"
              />
            </div>
          </div>
          <div className="fl absolute -left-7 bottom-0 w-[230px] -rotate-3 rounded-[20px] border border-white/[.14] bg-[#17171A] px-5 py-[18px] shadow-[0_30px_60px_-20px_rgba(0,0,0,.8)]" style={cssVars({ "--d": "900ms" })}>
            <div className="text-[34px] font-bold leading-none tracking-[-0.05em]">200K+</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[.1em] text-mut">views · MicroKahani</div>
          </div>
          <div className="fl absolute -right-3 bottom-[18px] w-[190px] rotate-3 rounded-[20px] border border-ac/40 bg-[#17171A] px-5 py-[18px] shadow-[0_30px_60px_-20px_rgba(0,0,0,.8)]" style={cssVars({ "--d": "1700ms" })}>
            <div className="text-[34px] font-bold leading-none tracking-[-0.05em] text-ac">15M+</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[.1em] text-mut">audience launched to</div>
          </div>
        </div>
      </div>
    </section>
  );
}
