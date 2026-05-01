import type { IconType } from "react-icons";

export type NavItem = {
  id: string;
  label: string;
};

export type SkillEntry = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  icon: IconType;
  skills: SkillEntry[];
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};
