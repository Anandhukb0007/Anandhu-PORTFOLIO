import { FaDatabase, FaServer } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReact, TbBrandTailwind } from "react-icons/tb";
import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: TbBrandReact,
    skills: [
      { name: "React", level: 93 },
      { name: "Next.js", level: 91 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Responsive UI", level: 94 },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 87 },
      { name: "PHP", level: 90 },
      { name: "REST API Design", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", level: 89 },
      { name: "MySQL", level: 86 },
      { name: "Query Optimization", level: 84 },
      { name: "Schema Modeling", level: 87 },
    ],
  },
  {
    title: "Framework Focus",
    icon: TbBrandNextjs,
    skills: [
      { name: "App Router", level: 89 },
      { name: "SSR / SSG", level: 86 },
      { name: "SEO & Metadata", level: 90 },
      { name: "Performance Tuning", level: 87 },
    ],
  },
  {
    title: "Styling",
    icon: TbBrandTailwind,
    skills: [
      { name: "Design Systems", level: 86 },
      { name: "Animations", level: 88 },
      { name: "Dark Mode", level: 91 },
      { name: "Accessibility", level: 85 },
    ],
  },
];
