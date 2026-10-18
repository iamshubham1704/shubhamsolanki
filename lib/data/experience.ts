export interface Experience {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Founding Engineer",
    company: "MicroKahani Private Limited",
    duration: "Dec 2025 – Jun 2026",
    highlights: [
      "Built and launched a scalable AI-powered OTT micro-drama app for Digital Kalakaar (15M+ followers), engineering intelligent content delivery and high-performance streaming systems that supported 200K+ content views.",
      "Built and optimised the video-upload pipeline for MicroKahani, enabling scalable content delivery and smoother media-processing workflows.",
      "Implemented backend notifications with Firebase Cloud Messaging (FCM) to improve real-time user engagement and platform retention.",
    ],
  },
];
