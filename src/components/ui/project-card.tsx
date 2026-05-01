"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/40"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {project.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        {project.description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-indigo-500/20 bg-indigo-50/50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-5 py-2.5 text-sm font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-indigo-400 hover:bg-white hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-slate-800 dark:hover:text-indigo-300"
        >
          <FaGithub className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40"
        >
          <FaExternalLinkAlt className="h-3 w-3" />
          Live Demo
          <FaArrowRight className="h-3 w-3" />
        </a>
      </div>
    </motion.article>
  );
}
