export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "/react.png" },
      { name: "Next.js", icon: "/nextjs.png" },
      { name: "React Native", icon: "/atom.png" },
      { name: "HTML5", icon: "/html.png" },
      { name: "CSS3", icon: "/css.png" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: "/Node.js.png" },
      { name: "MongoDB", icon: "/mongo.png" },
      { name: "SQL", icon: "/sql.png" },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "TypeScript", icon: "/typescript.png" },
      { name: "JavaScript", icon: "/js.png" },
      { name: "Python", icon: "/python.png" },
      { name: "C++", icon: "/C++.png" },
      { name: "C", icon: "/C.png" },
      { name: "GitHub", icon: "/github.png" },
    ],
  },
];
