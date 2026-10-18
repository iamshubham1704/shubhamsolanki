const words = [
  { text: "Ship fast", style: "" },
  { text: "Scale quietly", style: "outline hot" },
  { text: "Own the outcome", style: "outline" },
  { text: "Build for real users", style: "outline hot" },
  { text: "Zero to one", style: "" },
];

const items = [...words, ...words];

export default function Marquee() {
  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-white/10 bg-panel py-7">
      <div className="mq whitespace-nowrap text-[clamp(40px,6vw,84px)] font-bold leading-[1.1] tracking-[-0.04em]">
        {items.map((word, index) => (
          <span key={index} className={`pr-[.5em] ${word.style}`}>
            {word.text} <span className="text-ac [-webkit-text-stroke:0]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
