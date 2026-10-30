// ---------------------------------------------------------------------------
// Portfolio Data — Single source of truth for all content.
// Update this file to change content across the site.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Atharva Santosh Kanekar",
  displayName: "Atharva Kanekar",
  firstName: "Atharva",
  lastName: "Kanekar",
  role: "AI & Software Engineering",
  location: "Mumbai, Maharashtra, India",
  email: "atharva.kanekar22@gmail.com",
  bio: "I'm Atharva, an MCA student passionate about artificial intelligence, software engineering and cybersecurity. I enjoy exploring emerging technologies and building practical solutions to real-world problems.",
  github: "https://github.com/atharvakanekar22-dev",
  githubUsername: "atharvakanekar22-dev",
  linkedin: "https://www.linkedin.com/in/atharvakanekar",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "GitHub", href: "#github" },
  { label: "Works", href: "#works" },
  { label: "Connect", href: "#connect" },
];

export const projects = [
  {
    number: "01",
    name: "Khali-Jagah",
    description:
      "An AI-powered Mumbai local train crowd intelligence application.",
    tags: ["Kotlin", "Jetpack Compose", "Android", "AI"],
    href: "",
    repo: "https://github.com/atharvakanekar22-dev/Khali-Jagah",
    image: "",
  },
  {
    number: "02",
    name: "SUS — Scam Spotter",
    description:
      "A digital scam intelligence and safety platform focused on helping users identify suspicious messages and potential fraud.",
    tags: ["TypeScript", "Next.js", "React", "Cybersecurity"],
    href: "",
    repo: "https://github.com/atharvakanekar22-dev/sus-scam-detector",
    image: "",
  },
  {
    number: "03",
    name: "MirageMesh",
    description:
      "A cybersecurity project based on deception technology and threat detection.",
    tags: ["React", "Node.js", "Express.js", "Cybersecurity"],
    href: "",
    repo: "https://github.com/atharvakanekar22-dev/MirageMesh",
    image: "",
  },
  {
    number: "04",
    name: "Station Saathi",
    description:
      "Smart railway station navigation platform with facility discovery, indoor route planning, and an API-powered assistant for Mumbai railway stations.",
    tags: ["React", "Python", "FastAPI", "Navigation"],
    href: "",
    repo: "https://github.com/atharvakanekar22-dev/StationSathi",
    image: "",
  },
  {
    number: "05",
    name: "EduPath",
    description:
      "An educational technology application for guided learning paths and academic resources.",
    tags: ["Full-stack", "EdTech"],
    href: "",
    repo: "",
    image: "",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    institution:
      "DES Navinchandra Mehta Institute of Technology and Development, Mumbai",
    status: "Pursuing",
    period: "2025 — Present",
    cgpa: "8.32",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Tilak Maharashtra Vidyapeeth",
    status: "Completed",
    period: "2022 — 2025",
    cgpa: "8.30",
  },
];

export interface WorkItem {
  name: string;
  description: string;
  href: string;
  type?: "app" | "experiment" | "profile" | "project";
}

export const works: WorkItem[] = [
  {
    name: "Focus Pomodoro",
    description:
      "A calm, minimal Pomodoro timer with customizable focus sessions, breaks, and progress tracking.",
    href: "https://github.com/atharvakanekar22-dev/focus-pomodoro",
    type: "app",
  },
  {
    name: "WordLight",
    description:
      "Web-based, distraction-free word deduction game designed as an intentional mental pause.",
    href: "https://github.com/atharvakanekar22-dev/WordLight",
    type: "experiment",
  },
  {
    name: "SmartRail",
    description:
      "Smart railway recommendation and journey planning platform.",
    href: "https://github.com/atharvakanekar22-dev/SmartRail",
    type: "project",
  },
  {
    name: "SupportDesk",
    description:
      "Django-based helpdesk and support ticket management system.",
    href: "https://github.com/atharvakanekar22-dev/SupportDesk",
    type: "app",
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/atharvakanekar22-dev",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atharvakanekar",
    icon: "linkedin" as const,
  },
];
