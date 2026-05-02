import React from "react";

const projects = [
  {
    name: "Campusmart",
    desc: "E-commerce platform for campus students to buy/sell essentials.",
    link: "https://campusmart.store",
  },
  {
    name: "Micro Kahani",
    desc: "Micro drama reels platform for short storytelling content.",
    link: "https://app.microkahani.com",
  },
  {
    name: "AI Interview System",
    desc: "AI-powered system to conduct and evaluate interviews.",
    link: "https://github.com/iamshubham1704/Cheating",
  },
  {
    name: "TollyPips",
    desc: "A collection of AI-powered web tools and utilities.",
    link: "https://tollypips.vercel.app",
  },
];

const Project = () => {
  return (
    <section id="projects" className="bg-[#05070d] text-white py-20 px-6">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Recent <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Some of the things I’ve built recently
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md 
                       hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
              {project.name}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {project.desc}
            </p>

            <span className="text-sm text-blue-400">
              View Project →
            </span>
          </a>
        ))}

      </div>

    </section>
  );
};

export default Project;