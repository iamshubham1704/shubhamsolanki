export interface TimelineEvent {
  date: string;
  title: string;
  subtitle?: string;
  desc: string;
  iconName: string;
  color: string;
  badge?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    date: "2019",
    title: "Spark of Coding",
    subtitle: "Age 14, 9th Grade",
    desc: "Began my coding journey by learning programming fundamentals and building hardware projects with Arduino Uno, merging code with real-world electronics.",
    iconName: "Cpu",
    color: "emerald",
    badge: "Arduino",
  },
  {
    date: "2023",
    title: "ATAL Lab Mentor",
    subtitle: "School Mentorship Role",
    desc: "Served as a student mentor in the school's ATAL Tinkering Lab, guiding juniors in robotics, circuits, and programming logic.",
    iconName: "Users",
    color: "indigo",
    badge: "Leadership",
  },
  {
    date: "2024",
    title: "Joined College",
    subtitle: "B.Tech CSE Journey Starts",
    desc: "Transitioned into college life, diving into advanced algorithms, computer systems, and starting to build community networks.",
    iconName: "GraduationCap",
    color: "blue",
  },
  {
    date: "Oct 2024",
    title: "Won HackwithMAIT",
    subtitle: "First Semester Hackathon",
    desc: "Collaborated in a fast-paced environment to build and pitch a working prototype under pressure, securing the first-place prize.",
    iconName: "Trophy",
    color: "yellow",
    badge: "1st Place",
  },
  {
    date: "Feb 2025",
    title: "Google Developer Challenge",
    subtitle: "Won 2nd Semester Project",
    desc: "Engineered and shipped a technical application that won the Google Developer Challenge, validating my execution and speed.",
    iconName: "Trophy",
    color: "amber",
    badge: "Winner",
  },
  {
    date: "March 2025",
    title: "Coencers Startup",
    subtitle: "First Startup Venture",
    desc: "Launched my first startup. Though it did not succeed, it provided a crash course in operations, market dynamics, and building MVPs.",
    iconName: "Rocket",
    color: "red",
    badge: "Startup #1",
  },
  {
    date: "June 2025",
    title: "PyIce AI Startup",
    subtitle: "Second Startup Venture",
    desc: "Co-founded an AI startup (PyIce), securing a valuation of a few Crores. Faced scaling challenges that taught me lessons on market timing.",
    iconName: "Rocket",
    color: "purple",
    badge: "Startup #2",
  },
  {
    date: "Sept 2025",
    title: "CampusMart.store",
    subtitle: "P2P Marketplace Launch",
    desc: "Built a peer-to-peer campus platform for buying and selling. Successfully scaled to 1,000+ active users and generated ₹40k+ in revenue.",
    iconName: "ShoppingBag",
    color: "cyan",
    badge: "Success",
  },
  {
    date: "Dec 2025",
    title: "Founding Engineer",
    subtitle: "Joined Micro Kahani",
    desc: "Brought on as the founding engineer for Micro Kahani, architecting a full-stack, scalable short-form drama video platform from scratch.",
    iconName: "Code",
    color: "pink",
    badge: "Founding",
  },
  {
    date: "May 2026",
    title: "CollegePaglu App",
    subtitle: "Live on Play Store",
    desc: "Upgraded CampusMart with new features, rebranded it as CollegePaglu, and successfully published it to the Google Play Store.",
    iconName: "Smartphone",
    color: "violet",
    badge: "Google Play",
  },
  {
    date: "Present",
    title: "Always Building",
    subtitle: "Deploying Real-World Apps",
    desc: "Actively developing and scaling applications and open-source systems that deliver utility and value to users.",
    iconName: "Sparkles",
    color: "teal",
    badge: "Active",
  },
];
