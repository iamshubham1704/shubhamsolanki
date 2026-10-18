export default function Footer() {
  return (
    <footer className="wrap flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-white/10 pb-9 pt-7 font-mono text-xs text-mut">
      <span>© {new Date().getFullYear()} Shubham Solanki</span>
      <span>Product engineer &amp; AI builder</span>
    </footer>
  );
}
