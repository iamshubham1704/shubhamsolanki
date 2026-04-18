import React from "react";

const experiences = [
  {
    role: "Founding Engineer",
    company: "Micro Kahani",
    duration: "Dec 2025 - Present",
    desc: "Building a micro drama platform, working on full-stack systems and scalable features.",
  },
  {
    role: "AI Mentor",
    company: "Google Developer Groups MAIT",
    duration: "Sep 2025 - Present",
    desc: "Mentoring students in AI/ML, guiding projects and real-world implementations.",
  },
  {
    role: "Co-Head Venture Lab",
    company: "Startup Sphere",
    duration: "Sep 2025 - Present",
    desc: "Leading innovation initiatives and helping students build startups.",
  },
  {
    role: "Contributor",
    company: "Social (Script Foundation)",
    duration: "Jun 2025 - Present",
    desc: "Contributing to community-driven tech initiatives.",
  },
  {
    role: "Head of Finance",
    company: "AnalytixLabs",
    duration: "Mar 2025 - May 2025",
    desc: "Managed financial planning and operations during internship.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#05070d] text-white py-20 px-6">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-blue-400">Experience</span>
        </h2>
        <p className="text-gray-400 mt-2">
          What I’ve been working on recently
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative border-l border-white/10 pl-6 space-y-10">

        {experiences.map((exp, index) => (
          <div key={index} className="relative">

            {/* Dot */}
            <div className="absolute -left-2.5 top-2 w-4 h-4 bg-blue-400 rounded-full"></div>

            {/* Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md hover:bg-white/10 transition">

              <h3 className="text-lg font-semibold">
                {exp.role} <span className="text-blue-400">@ {exp.company}</span>
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {exp.duration}
              </p>

              <p className="text-gray-300 mt-3 text-sm">
                {exp.desc}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;