export interface Experience {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "MicroKahani Private Limited",
    duration: "Dec 2025 – Jun 2026",
    highlights: [
      "Built and launched a scalable AI-powered OTT micro-drama app for Digital Kalakaar (15M+ followers), engineering intelligent content delivery and high-performance streaming systems that supported 200K+ content views.",
      "Built and optimised the video-upload pipeline for MicroKahani, enabling scalable content delivery and smoother media-processing workflows.",
      "Implemented backend notifications with Firebase Cloud Messaging (FCM) to improve real-time user engagement and platform retention.",
    ],
  },
  {
    role: "Freelance Software Engineer",
    company: "Self-employed",
    duration: "Freelance",
    highlights: [
      "Closed and delivered software projects worth more than ₹10 lakh in total client value.",
      "Worked with more than 10 clients, turning their product requirements into dependable digital solutions.",
    ],
  },
];
