import Experience from "@/component/Experience";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Project from "@/component/Project";
import Skills from "@/component/Skills";
import Contact from "@/component/Contact";
import Timeline from "@/component/Timeline";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Timeline />
      <Project/>
      <Experience/>
      <Skills/>
      <Contact />
    </div>
  );
}
