import Image from "next/image";
import { cssVars } from "@/lib/style";

const photos = [
  { wide: true, rot: -1, src: "/milestones/4.png", alt: "Group photo at an Azure Developer Community event with trophies and certificates", title: "Azure Developer Community", sub: "Team photo with trophies and certificates" },
  { wide: false, rot: 1.5, src: "/milestones/1.jpg", alt: "Receiving a certificate in a computer lab", title: "Certificate handover", sub: "Recognised on stage" },
  { wide: false, rot: -1.5, src: "/milestones/2.png", alt: "Build with Stellar Bootcamp hacker badge and speaking on stage", title: "Build with Stellar Bootcamp", sub: "Hacker · on stage" },
  { wide: false, rot: 1, src: "/milestones/3.png", alt: "Trying a VR headset in a classroom", title: "Hands-on with VR", sub: "Always testing what is next" },
  { wide: true, rot: -0.8, src: "/milestones/5.png", alt: "Group photo in front of an Azure Developer Community slide", title: "Azure Developer Community", sub: "With the organising team" },
];

export default function Field() {
  return (
    <section id="moments" className="wrap pb-[clamp(64px,8vw,120px)] pt-[clamp(24px,4vw,56px)]">
      <div className="rv mb-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
        <div>
          <p className="mb-[18px] font-mono text-[13px] uppercase tracking-[.14em] text-ac">02 — Beyond the code</p>
          <h2 className="text-[clamp(44px,6.6vw,96px)] font-bold leading-[.98] tracking-[-0.05em]">
            Out in <span className="font-serif italic text-ac">the field.</span>
          </h2>
        </div>
        <p className="max-w-[340px] text-[17px] leading-[1.55] text-mut">
          Building startups, showing up at bootcamps and community events.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {photos.map((photo) => (
          <figure key={photo.src} className={`ph rv ${photo.wide ? "wide" : ""}`} style={cssVars({ "--rot": `${photo.rot}deg` })}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 900px) 40vw, 100vw" />
            <figcaption className="cap">
              <b>{photo.title}</b>
              <span className="text-soft">{photo.sub}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
