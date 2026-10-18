import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import NowBuilding from "@/components/sections/NowBuilding";
import Manifesto from "@/components/sections/Manifesto";
import Projects from "@/components/sections/Projects";
import Field from "@/components/sections/Field";
import Experience from "@/components/sections/Experience";
import Closing from "@/components/sections/Closing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="pg">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <NowBuilding />
        <Manifesto />
        <Projects />
        <Field />
        <Experience />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
