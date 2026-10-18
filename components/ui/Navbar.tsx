const links = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#log" },
  { name: "So far", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="wrap z-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pb-3 pt-6">
      <a href="#top" aria-label="Shubham Solanki, home" className="inline-flex min-h-11 items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ac text-base font-extrabold tracking-[-0.04em] text-ink">
          SS
        </span>
        <span className="text-[17px] font-semibold tracking-[-0.02em]">Shubham Solanki</span>
      </a>
      <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-7 text-[15px]">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="lnk">
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
