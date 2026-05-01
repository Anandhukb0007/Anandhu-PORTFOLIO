import type { ExperienceItem } from "@/types/portfolio";

export const experienceItems: ExperienceItem[] = [
  {
    role: "Junior Full Stack Developer",
    company: "Ezyxam Learning co pty ltd",
    duration: "NOV/2025 - Present",
    summary:
      "Built and maintained business web modules with a focus on reliability, speed, and cleaner deployment workflows.",
    achievements: [
      "Delivered responsive dashboard and CRUD modules for internal business tools.",
      "Integrated authentication and role-based access control for secure operations.",
      "Improved database query performance and reduced average page-load time.",
      "Integrated Paypal Payment Gateway for payment processing."
    ],
    technologies: ["PHP","Laravel","MySQL","Next.Js","React", "JavaScript", "Material UI", "REST API"],
  },
  {
    role: "Web Developer Intern",
    company: "Zidio Development",
    duration: "FEB/2025 - MAY/2025",
    summary: "",
    achievements: [
      "Developed and maintained the Zidio Task Manager, a full-stack web application.",
      "Contributed to both front-end and back-end development.",
      "Gained practical experience in team collaboration, code versioning, and production deployment. ",
      "Enhanced understanding of React.js, Node.js, and MongoDB integration."
    ],
    technologies: ["React.JS", "HTML", "CSS", "JavaScript","Git", "Github", "Node.JS", "Express", "MongoDb"],
  }
];
