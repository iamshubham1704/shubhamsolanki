export interface Project {
  name: string;
  desc: string;
  link: string;
  github?: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "CollegePaglu",
    desc: "Student super-app for campus commerce, food ordering, deliveries, and community services. Built to support real-time orders, authentication, and 1500+ onboarded students.",
    link: "https://play.google.com/store/apps/details?id=com.CollegePaglu.app",
    tags: ["React Native", "Node.js", "MongoDB", "Redis", "GCP"],
    featured: true,
  },
  {
    name: "Retinal Disease Classification System",
    desc: "Deep-learning system that classifies retinal fundus images into multiple eye-disease categories using transfer learning, preprocessing, augmentation, and a tuned PyTorch pipeline.",
    link: "https://github.com/iamshubham1704/retinal_disease",
    github: "https://github.com/iamshubham1704/retinal_disease",
    tags: ["Python", "PyTorch", "ResNet-50", "OpenCV"],
  },
  {
    name: "Resume Classification System",
    desc: "NLP-based system that extracts text from PDFs and automatically categorizes resumes into job domains with TF-IDF, Logistic Regression, and Linear SVM.",
    link: "https://github.com/iamshubham1704/resume-classification-ml",
    github: "https://github.com/iamshubham1704/resume-classification-ml",
    tags: ["Python", "Scikit-learn", "TF-IDF", "NLP"],
  },
  {
    name: "Context Passport",
    desc: "Chrome extension that maintains persistent AI memory across ChatGPT sessions through structured context storage, extraction, and automatic prompt injection.",
    link: "https://github.com/iamshubham1704/passport",
    github: "https://github.com/iamshubham1704/passport",
    tags: ["Manifest V3", "JavaScript", "Chrome Extension", "Regex"],
  },
];
